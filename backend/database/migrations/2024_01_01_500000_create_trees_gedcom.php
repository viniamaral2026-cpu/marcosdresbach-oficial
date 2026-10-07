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
        Schema::create('trees', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('name');
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            $table->boolean('is_public')->default(false);
            $table->uuid('owner_id');
            $table->uuid('root_person_id')->nullable();
            $table->json('settings')->nullable(); // privacy, display options, etc.
            $table->timestamps();
            $table->softDeletes();
            
            $table->index('slug');
            $table->index('owner_id');
            $table->index('root_person_id');
        });
        
        Schema::table('trees', function (Blueprint $table) {
            $table->foreign('owner_id')->references('id')->on('users')->cascadeOnDelete();
            // root_person_id foreign key will be added after people table exists
        });

        Schema::create('tree_members', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('tree_id');
            $table->uuid('user_id');
            $table->enum('role', ['owner', 'admin', 'editor', 'viewer', 'contributor'])->default('viewer');
            $table->timestamps();
            
            $table->unique(['tree_id', 'user_id']);
            $table->index('user_id');
        });
        
        Schema::table('tree_members', function (Blueprint $table) {
            $table->foreign('tree_id')->references('id')->on('trees')->cascadeOnDelete();
            $table->foreign('user_id')->references('id')->on('users')->cascadeOnDelete();
        });

        Schema::create('tree_invitations', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('tree_id');
            $table->string('email');
            $table->enum('role', ['admin', 'editor', 'viewer', 'contributor'])->default('viewer');
            $table->string('token')->unique();
            $table->timestamp('expires_at')->nullable();
            $table->timestamp('accepted_at')->nullable();
            $table->uuid('invited_by');
            $table->timestamps();
            
            $table->unique(['tree_id', 'email']);
            $table->index('token');
        });
        
        Schema::table('tree_invitations', function (Blueprint $table) {
            $table->foreign('tree_id')->references('id')->on('trees')->cascadeOnDelete();
            $table->foreign('invited_by')->references('id')->on('users')->cascadeOnDelete();
        });

        Schema::create('gedcom_exports', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('tree_id');
            $table->string('status')->default('pending');
            $table->string('file_path')->nullable();
            $table->unsignedBigInteger('file_size')->nullable();
            $table->string('checksum')->nullable();
            $table->json('options')->nullable(); // export options
            $table->timestamp('completed_at')->nullable();
            $table->text('error')->nullable();
            $table->uuid('requested_by');
            $table->timestamps();
            
            $table->index('tree_id');
            $table->index('status');
        });
        
        Schema::table('gedcom_exports', function (Blueprint $table) {
            $table->foreign('tree_id')->references('id')->on('trees')->cascadeOnDelete();
            $table->foreign('requested_by')->references('id')->on('users')->cascadeOnDelete();
        });

        Schema::create('gedcom_imports', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('tree_id')->nullable();
            $table->string('status')->default('pending');
            $table->string('file_path');
            $table->unsignedBigInteger('file_size');
            $table->json('options')->nullable();
            $table->json('result')->nullable(); // stats, errors, warnings
            $table->timestamp('completed_at')->nullable();
            $table->text('error')->nullable();
            $table->uuid('imported_by');
            $table->timestamps();
            
            $table->index('status');
        });
        
        Schema::table('gedcom_imports', function (Blueprint $table) {
            $table->foreign('tree_id')->references('id')->on('trees')->nullOnDelete();
            $table->foreign('imported_by')->references('id')->on('users')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gedcom_imports');
        Schema::dropIfExists('gedcom_exports');
        Schema::dropIfExists('tree_invitations');
        Schema::dropIfExists('tree_members');
        Schema::dropIfExists('trees');
    }
};