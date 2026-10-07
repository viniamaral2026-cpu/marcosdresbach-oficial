<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('places', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('type')->nullable(); // country, state, city, parish, cemetery, hospital, etc.
            $table->uuid('parent_id')->nullable();
            $table->decimal('latitude', 10, 8)->nullable();
            $table->decimal('longitude', 11, 8)->nullable();
            $table->text('description')->nullable();
            $table->json('historical_names')->nullable();
            $table->timestamps();
            $table->softDeletes();
            
            $table->index('slug');
            $table->index('name');
            $table->index(['latitude', 'longitude']);
            $table->index('type');
        });
        
        // Add self-referencing foreign key after table creation
        Schema::table('places', function (Blueprint $table) {
            $table->foreign('parent_id')->references('id')->on('places')->nullOnDelete();
        });

        Schema::create('people', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('name');
            $table->string('slug')->unique();
            $table->enum('gender', ['M', 'F', 'O'])->nullable();
            $table->date('birth_date')->nullable();
            $table->uuid('birth_place_id')->nullable();
            $table->date('death_date')->nullable();
            $table->uuid('death_place_id')->nullable();
            $table->text('biography')->nullable();
            $table->boolean('is_living')->default(true);
            $table->uuid('created_by');
            $table->uuid('updated_by')->nullable();
            $table->timestamps();
            $table->softDeletes();
            
            $table->index(['name', 'birth_date']);
            $table->index('slug');
            $table->index(['birth_date', 'death_date']);
            $table->index('gender');
            $table->index('is_living');
        });
        
        // Add foreign keys after table creation
        Schema::table('people', function (Blueprint $table) {
            $table->foreign('birth_place_id')->references('id')->on('places')->nullOnDelete();
            $table->foreign('death_place_id')->references('id')->on('places')->nullOnDelete();
            $table->foreign('created_by')->references('id')->on('users')->cascadeOnDelete();
            $table->foreign('updated_by')->references('id')->on('users')->nullOnDelete();
        });

        Schema::create('families', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('name');
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            $table->uuid('tree_id')->nullable();
            $table->uuid('created_by');
            $table->uuid('updated_by')->nullable();
            $table->timestamps();
            $table->softDeletes();
            
            $table->index('slug');
            $table->index('name');
        });
        
        Schema::table('families', function (Blueprint $table) {
            $table->foreign('tree_id')->references('id')->on('trees')->nullOnDelete();
            $table->foreign('created_by')->references('id')->on('users')->cascadeOnDelete();
            $table->foreign('updated_by')->references('id')->on('users')->nullOnDelete();
        });

        Schema::create('family_members', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('family_id');
            $table->uuid('person_id');
            $table->enum('role', ['father', 'mother', 'child', 'spouse', 'other'])->default('other');
            $table->integer('sort_order')->default(0);
            $table->timestamps();
            
            $table->unique(['family_id', 'person_id', 'role']);
            $table->index(['family_id', 'role']);
        });
        
        Schema::table('family_members', function (Blueprint $table) {
            $table->foreign('family_id')->references('id')->on('families')->cascadeOnDelete();
            $table->foreign('person_id')->references('id')->on('people')->cascadeOnDelete();
        });

        Schema::create('parent_child_relationships', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('parent_id');
            $table->uuid('child_id');
            $table->enum('type', ['biological', 'adoptive', 'step', 'foster', 'other'])->default('biological');
            $table->unsignedTinyInteger('confidence')->default(100);
            $table->uuid('source_id')->nullable();
            $table->text('notes')->nullable();
            $table->timestamps();
            
            $table->unique(['parent_id', 'child_id', 'type']);
            $table->index(['child_id', 'type']);
            $table->index(['parent_id', 'type']);
        });
        
        // Foreign keys will be added after sources table exists

        Schema::create('spouse_relationships', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('person_id');
            $table->uuid('spouse_id');
            $table->date('marriage_date')->nullable();
            $table->uuid('marriage_place_id')->nullable();
            $table->date('divorce_date')->nullable();
            $table->boolean('is_current')->default(true);
            $table->unsignedTinyInteger('confidence')->default(100);
            $table->uuid('source_id')->nullable();
            $table->text('notes')->nullable();
            $table->timestamps();
            
            $table->unique(['person_id', 'spouse_id']);
            $table->index('marriage_date');
        });
        
        Schema::table('spouse_relationships', function (Blueprint $table) {
            $table->foreign('person_id')->references('id')->on('people')->cascadeOnDelete();
            $table->foreign('spouse_id')->references('id')->on('people')->cascadeOnDelete();
            $table->foreign('marriage_place_id')->references('id')->on('places')->nullOnDelete();
            // source_id foreign key will be added after sources table exists
        });

        Schema::create('sibling_relationships', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('person_id');
            $table->uuid('sibling_id');
            $table->enum('type', ['full', 'half', 'step', 'adoptive'])->default('full');
            $table->unsignedTinyInteger('confidence')->default(100);
            $table->timestamps();
            
            $table->unique(['person_id', 'sibling_id']);
        });
        
        Schema::table('sibling_relationships', function (Blueprint $table) {
            $table->foreign('person_id')->references('id')->on('people')->cascadeOnDelete();
            $table->foreign('sibling_id')->references('id')->on('people')->cascadeOnDelete();
        });

        Schema::create('events', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('name');
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            $table->date('date')->nullable();
            $table->string('date_precision', 20)->nullable(); // exact, year, circa, before, after
            $table->uuid('place_id')->nullable();
            $table->enum('type', ['birth', 'baptism', 'marriage', 'death', 'burial', 'residence', 'occupation', 'migration', 'military', 'education', 'custom'])->default('custom');
            $table->unsignedTinyInteger('confidence')->default(100);
            $table->uuid('source_id')->nullable();
            $table->timestamps();
            
            $table->index('slug');
            $table->index(['date', 'type']);
            $table->index('type');
        });
        
        // Foreign keys will be added after sources table exists

        Schema::create('event_people', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('event_id');
            $table->uuid('person_id');
            $table->string('role'); // principal, witness, officiant, parent, spouse, child, etc.
            $table->timestamps();
            
            $table->unique(['event_id', 'person_id', 'role']);
        });
        
        Schema::table('event_people', function (Blueprint $table) {
            $table->foreign('event_id')->references('id')->on('events')->cascadeOnDelete();
            $table->foreign('person_id')->references('id')->on('people')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('event_people');
        Schema::dropIfExists('events');
        Schema::dropIfExists('places');
        Schema::dropIfExists('sibling_relationships');
        Schema::dropIfExists('spouse_relationships');
        Schema::dropIfExists('parent_child_relationships');
        Schema::dropIfExists('family_members');
        Schema::dropIfExists('families');
        Schema::dropIfExists('people');
    }
};