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
        Schema::create('documents', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('type'); // certificate, letter, diary, photo, map, newspaper, etc.
            $table->text('description')->nullable();
            $table->date('date_created')->nullable();
            $table->string('date_precision')->nullable();
            $table->uuid('place_id')->nullable();
            $table->text('transcription')->nullable();
            $table->text('translation')->nullable();
            $table->json('metadata')->nullable();
            $table->uuid('source_id')->nullable();
            $table->uuid('author_id')->nullable();
            $table->uuid('created_by');
            $table->uuid('updated_by')->nullable();
            $table->timestamps();
            $table->softDeletes();
            
            $table->index('slug');
            $table->index('type');
        });
        
        Schema::table('documents', function (Blueprint $table) {
            $table->foreign('place_id')->references('id')->on('places')->nullOnDelete();
            $table->foreign('source_id')->references('id')->on('sources')->nullOnDelete();
            $table->foreign('author_id')->references('id')->on('people')->nullOnDelete();
            $table->foreign('created_by')->references('id')->on('users')->cascadeOnDelete();
            $table->foreign('updated_by')->references('id')->on('users')->nullOnDelete();
        });

        Schema::create('document_people', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('document_id');
            $table->uuid('person_id');
            $table->string('role'); // author, recipient, subject, witness, signer, etc.
            $table->text('notes')->nullable();
            $table->timestamps();
            
            $table->unique(['document_id', 'person_id', 'role']);
        });
        
        Schema::table('document_people', function (Blueprint $table) {
            $table->foreign('document_id')->references('id')->on('documents')->cascadeOnDelete();
            $table->foreign('person_id')->references('id')->on('people')->cascadeOnDelete();
        });

        Schema::create('media', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('type'); // image, audio, video, document, 3d_model
            $table->string('mime_type');
            $table->string('file_path');
            $table->unsignedBigInteger('file_size')->nullable();
            $table->string('checksum')->nullable();
            $table->integer('width')->nullable();
            $table->integer('height')->nullable();
            $table->integer('duration')->nullable();
            $table->string('license')->nullable();
            $table->text('description')->nullable();
            $table->text('caption')->nullable();
            $table->text('alt_text')->nullable();
            $table->string('credit')->nullable();
            $table->json('metadata')->nullable(); // EXIF, IPTC, etc.
            $table->string('access_level')->default('public'); // public, restricted, private
            $table->uuid('created_by');
            $table->uuid('updated_by')->nullable();
            $table->timestamps();
            $table->softDeletes();
            
            $table->index('slug');
            $table->index('type');
            $table->index('mime_type');
        });
        
        Schema::table('media', function (Blueprint $table) {
            $table->foreign('created_by')->references('id')->on('users')->cascadeOnDelete();
            $table->foreign('updated_by')->references('id')->on('users')->nullOnDelete();
        });

        Schema::create('media_relations', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('media_id');
            $table->morphs('related'); // related_type, related_id (person, document, place, event, etc.)
            $table->string('role')->default('illustration'); // cover, illustration, scan, thumbnail, etc.
            $table->integer('sort_order')->default(0);
            $table->timestamps();
            
            $table->unique(['media_id', 'related_type', 'related_id', 'role']);
        });
        
        Schema::table('media_relations', function (Blueprint $table) {
            $table->foreign('media_id')->references('id')->on('media')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('media_relations');
        Schema::dropIfExists('media');
        Schema::dropIfExists('document_people');
        Schema::dropIfExists('documents');
        // sources table is dropped in 2024_01_03 migration
    }
};