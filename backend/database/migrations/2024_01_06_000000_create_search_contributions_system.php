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
        Schema::create('search_indexes', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('entity_type'); // person, family, article, document, place, event, source
            $table->uuid('entity_id');
            $table->string('title');
            $table->text('content');
            $table->text('searchable_text'); // full text for search
            $table->json('metadata')->nullable(); // additional fields for filtering
            $table->timestamp('indexed_at')->nullable();
            $table->timestamps();
            
            $table->unique(['entity_type', 'entity_id']);
            $table->index('searchable_text');
            $table->index('entity_type');
        });

        Schema::create('contributions', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('type'); // person, family, article, document, source, correction, addition
            $table->string('status')->default('pending'); // pending, under_review, approved, rejected, needs_changes
            $table->uuid('contributor_id');
            $table->morphs('target'); // target_type, target_id (what is being contributed to)
            $table->json('data'); // the contributed data
            $table->json('original_data')->nullable(); // original data for comparison
            $table->text('change_summary')->nullable();
            $table->text('moderator_notes')->nullable();
            $table->uuid('reviewed_by')->nullable();
            $table->timestamp('reviewed_at')->nullable();
            $table->timestamps();
            $table->softDeletes();
            
            $table->index('type');
            $table->index('status');
            $table->index('contributor_id');
        });
        
        Schema::table('contributions', function (Blueprint $table) {
            $table->foreign('contributor_id')->references('id')->on('users')->cascadeOnDelete();
            $table->foreign('reviewed_by')->references('id')->on('users')->nullOnDelete();
        });

        Schema::create('moderation_actions', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('contribution_id');
            $table->uuid('moderator_id');
            $table->string('action'); // approve, reject, request_changes, edit
            $table->text('notes')->nullable();
            $table->json('changes')->nullable(); // what was changed
            $table->timestamps();
            
            $table->index('contribution_id');
            $table->index('moderator_id');
        });
        
        Schema::table('moderation_actions', function (Blueprint $table) {
            $table->foreign('contribution_id')->references('id')->on('contributions')->cascadeOnDelete();
            $table->foreign('moderator_id')->references('id')->on('users')->cascadeOnDelete();
        });

Schema::create('notifications', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('user_id');
            $table->string('type');
            $table->string('title');
            $table->text('message');
            $table->uuid('related_id')->nullable();
            $table->string('related_type')->nullable();
            $table->boolean('is_read')->default(false);
            $table->timestamp('read_at')->nullable();
            $table->json('action_url')->nullable();
            $table->timestamps();
            
            $table->index(['user_id', 'is_read']);
            $table->index('created_at');
            $table->index(['related_type', 'related_id']);
        });
        
        Schema::table('notifications', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users')->cascadeOnDelete();
        });

        Schema::create('favorites', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('user_id');
            $table->uuid('favoritable_id')->nullable();
            $table->string('favoritable_type')->nullable();
            $table->timestamps();
            
            $table->unique(['user_id', 'favoritable_type', 'favoritable_id']);
            $table->index('user_id');
        });
        
        Schema::table('favorites', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users')->cascadeOnDelete();
        });

        Schema::create('activity_logs', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('user_id')->nullable();
            $table->string('event');
            $table->string('description');
            $table->uuid('subject_id')->nullable();
            $table->string('subject_type')->nullable();
            $table->json('properties')->nullable();
            $table->string('ip')->nullable();
            $table->string('user_agent')->nullable();
            $table->timestamps();
            
            $table->index(['subject_type', 'subject_id']);
            $table->index('user_id');
            $table->index('event');
            $table->index('created_at');
        });
        
        Schema::table('activity_logs', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users')->nullOnDelete();
        });

Schema::create('exports', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('type'); // gedcom, csv, json, pdf, json-ld
            $table->string('status')->default('pending');
            $table->uuid('user_id');
            $table->json('filters')->nullable();
            $table->string('file_path')->nullable();
            $table->unsignedBigInteger('file_size')->nullable();
            $table->string('checksum')->nullable();
            $table->timestamp('completed_at')->nullable();
            $table->text('error')->nullable();
            $table->timestamps();
            
            $table->index('user_id');
            $table->index('status');
        });
        
        Schema::table('exports', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users')->cascadeOnDelete();
        });
        
        Schema::create('imports', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('type'); // gedcom, csv, json
            $table->string('status')->default('pending');
            $table->uuid('user_id');
            $table->string('file_path');
            $table->unsignedBigInteger('file_size');
            $table->json('mapping')->nullable(); // field mapping
            $table->json('result')->nullable(); // stats, errors, warnings
            $table->timestamp('completed_at')->nullable();
            $table->text('error')->nullable();
            $table->timestamps();
            
            $table->index('user_id');
            $table->index('status');
        });
        
        Schema::table('imports', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('imports');
        Schema::dropIfExists('exports');
        Schema::dropIfExists('activity_logs');
        Schema::dropIfExists('favorites');
        Schema::dropIfExists('notifications');
        Schema::dropIfExists('moderation_actions');
        Schema::dropIfExists('contributions');
        Schema::dropIfExists('search_indexes');
    }
};