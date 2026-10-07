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
        Schema::create('archives', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('name');
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            $table->string('country')->nullable();
            $table->string('city')->nullable();
            $table->string('address')->nullable();
            $table->string('website')->nullable();
            $table->string('email')->nullable();
            $table->string('phone')->nullable();
            $table->json('access_conditions')->nullable();
            $table->json('opening_hours')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
            $table->softDeletes();
            
            $table->index('slug');
            $table->index('country');
        });

        Schema::create('fonds', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('archive_id');
            $table->string('reference_code');
            $table->string('title');
            $table->text('description')->nullable();
            $table->date('start_date')->nullable();
            $table->date('end_date')->nullable();
            $table->string('extent')->nullable(); // e.g., "5 linear meters"
            $table->string('language')->nullable();
            $table->text('scope_content')->nullable();
            $table->text('system_arrangement')->nullable();
            $table->text('conditions_access')->nullable();
            $table->text('conditions_reproduction')->nullable();
            $table->text('finding_aids')->nullable();
            $table->string('status')->default('active'); // active, restricted, closed
            $table->text('acquisition_info')->nullable();
            $table->uuid('parent_id')->nullable();
            $table->timestamps();
            $table->softDeletes();
            
            $table->unique(['archive_id', 'reference_code']);
            $table->index(['archive_id', 'title']);
            $table->index('status');
        });
        
        Schema::table('fonds', function (Blueprint $table) {
            $table->foreign('archive_id')->references('id')->on('archives')->cascadeOnDelete();
            $table->foreign('parent_id')->references('id')->on('fonds')->nullOnDelete();
        });

        Schema::create('finding_aids', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('fonds_id');
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            $table->string('format')->nullable(); // PDF, XML, HTML, etc.
            $table->string('language')->nullable();
            $table->string('version')->nullable();
            $table->date('date_created')->nullable();
            $table->string('creator')->nullable();
            $table->string('status')->default('draft');
            $table->timestamps();
            
            $table->index('slug');
            $table->index('fonds_id');
        });
        
        Schema::table('finding_aids', function (Blueprint $table) {
            $table->foreign('fonds_id')->references('id')->on('fonds')->cascadeOnDelete();
        });

        Schema::create('classifications', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('fonds_id');
            $table->string('reference_code');
            $table->string('title');
            $table->integer('level'); // 1=fonds, 2=series, 3=file, 4=item, etc.
            $table->text('scope_content')->nullable();
            $table->date('start_date')->nullable();
            $table->date('end_date')->nullable();
            $table->string('extent')->nullable();
            $table->string('medium')->nullable();
            $table->text('conditions_access')->nullable();
            $table->text('system_arrangement')->nullable();
            $table->uuid('parent_id')->nullable();
            $table->uuid('finding_aid_id')->nullable();
            $table->timestamps();
            $table->softDeletes();
            
            $table->unique(['fonds_id', 'reference_code']);
            $table->index(['fonds_id', 'level']);
            $table->index('parent_id');
        });
        
        Schema::table('classifications', function (Blueprint $table) {
            $table->foreign('fonds_id')->references('id')->on('fonds')->cascadeOnDelete();
            $table->foreign('parent_id')->references('id')->on('classifications')->nullOnDelete();
            $table->foreign('finding_aid_id')->references('id')->on('finding_aids')->nullOnDelete();
        });

        Schema::create('description_units', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('classification_id');
            $table->string('reference_code');
            $table->string('title');
            $table->text('scope_content')->nullable();
            $table->date('start_date')->nullable();
            $table->date('end_date')->nullable();
            $table->string('extent')->nullable();
            $table->string('medium')->nullable();
            $table->text('conditions_access')->nullable();
            $table->text('conditions_reproduction')->nullable();
            $table->text('related_units')->nullable(); // JSON with related unit IDs
            $table->text('notes')->nullable();
            $table->uuid('parent_unit_id')->nullable();
            $table->timestamps();
            $table->softDeletes();
            
            $table->unique(['classification_id', 'reference_code']);
            $table->index('title');
        });
        
        Schema::table('description_units', function (Blueprint $table) {
            $table->foreign('classification_id')->references('id')->on('classifications')->cascadeOnDelete();
            $table->foreign('parent_unit_id')->references('id')->on('description_units')->nullOnDelete();
        });

        Schema::create('digital_objects', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('description_unit_id')->nullable();
            $table->string('title');
            $table->string('description')->nullable();
            $table->string('file_path');
            $table->string('mime_type');
            $table->unsignedBigInteger('file_size')->nullable();
            $table->string('checksum')->nullable(); // SHA-256
            $table->integer('width')->nullable();
            $table->integer('height')->nullable();
            $table->integer('duration')->nullable(); // for audio/video
            $table->string('license')->nullable();
            $table->text('rights_statement')->nullable();
            $table->string('access_level')->default('public'); // public, restricted, private
            $table->json('metadata')->nullable(); // EXIF, IPTC, etc.
            $table->uuid('created_by');
            $table->timestamps();
            
            $table->index('file_path');
            $table->index('mime_type');
        });
        
        Schema::table('digital_objects', function (Blueprint $table) {
            $table->foreign('description_unit_id')->references('id')->on('description_units')->nullOnDelete();
            $table->foreign('created_by')->references('id')->on('users')->cascadeOnDelete();
        });

        Schema::create('external_sources', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('type'); // archive, library, catalog, database, website
            $table->string('base_url')->nullable();
            $table->string('api_endpoint')->nullable();
            $table->string('api_key')->nullable(); // encrypted
            $table->text('description')->nullable();
            $table->json('metadata_mapping')->nullable(); // field mapping for import
            $table->boolean('is_active')->default(true);
            $table->timestamp('last_sync_at')->nullable();
            $table->json('last_sync_result')->nullable();
            $table->timestamps();
            
            $table->index('slug');
            $table->index('type');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('external_sources');
        Schema::dropIfExists('digital_objects');
        Schema::dropIfExists('description_units');
        Schema::dropIfExists('classifications');
        Schema::dropIfExists('finding_aids');
        Schema::dropIfExists('fonds');
        Schema::dropIfExists('archives');
    }
};