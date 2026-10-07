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
        Schema::create('categories', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('name');
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            $table->uuid('parent_id')->nullable();
            $table->integer('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
            $table->softDeletes();
            
            $table->index('slug');
            $table->index('parent_id');
        });
        
        // Add self-referencing foreign key after table creation
        Schema::table('categories', function (Blueprint $table) {
            $table->foreign('parent_id')->references('id')->on('categories')->nullOnDelete();
        });

        Schema::create('articles', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('summary')->nullable();
            $table->longText('content');
            $table->string('status')->default('draft'); // draft, review, published, archived
            $table->uuid('author_id');
            $table->uuid('editor_id')->nullable();
            $table->timestamp('published_at')->nullable();
            $table->json('metadata')->nullable(); // SEO, tags, etc.
            $table->unsignedInteger('views_count')->default(0);
            $table->timestamps();
            $table->softDeletes();
            
            $table->index('slug');
            $table->index('status');
            $table->index('published_at');
            $table->index('author_id');
            $table->index(['title', 'summary', 'content']);
        });
        
        Schema::table('articles', function (Blueprint $table) {
            $table->foreign('author_id')->references('id')->on('users')->cascadeOnDelete();
            $table->foreign('editor_id')->references('id')->on('users')->nullOnDelete();
        });

        Schema::create('article_revisions', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('article_id');
            $table->string('title');
            $table->string('slug');
            $table->text('summary')->nullable();
            $table->longText('content');
            $table->uuid('editor_id');
            $table->text('change_summary')->nullable();
            $table->unsignedInteger('version');
            $table->timestamps();
            
            $table->unique(['article_id', 'version']);
            $table->index('article_id');
        });
        
        Schema::table('article_revisions', function (Blueprint $table) {
            $table->foreign('article_id')->references('id')->on('articles')->cascadeOnDelete();
            $table->foreign('editor_id')->references('id')->on('users')->cascadeOnDelete();
        });

        Schema::create('article_sections', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('article_id');
            $table->string('title');
            $table->string('slug');
            $table->longText('content');
            $table->integer('sort_order')->default(0);
            $table->unsignedInteger('level')->default(1); // 1=h1, 2=h2, etc.
            $table->timestamps();
            
            $table->unique(['article_id', 'slug']);
            $table->index(['article_id', 'sort_order']);
        });
        
        Schema::table('article_sections', function (Blueprint $table) {
            $table->foreign('article_id')->references('id')->on('articles')->cascadeOnDelete();
        });

Schema::create('article_categories', function (Blueprint $table) {
            $table->uuid('article_id');
            $table->uuid('category_id');
            $table->primary(['article_id', 'category_id']);
        });
        
        Schema::table('article_categories', function (Blueprint $table) {
            $table->foreign('article_id')->references('id')->on('articles')->cascadeOnDelete();
            $table->foreign('category_id')->references('id')->on('categories')->cascadeOnDelete();
        });
        
        Schema::create('references', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('article_id');
            $table->string('type'); // book, journal, website, archive, manuscript, oral, etc.
            $table->string('title');
            $table->string('authors')->nullable();
            $table->string('publisher')->nullable();
            $table->string('publication_year')->nullable();
            $table->string('isbn_issn')->nullable();
            $table->string('url')->nullable();
            $table->string('doi')->nullable();
            $table->text('pages')->nullable();
            $table->text('notes')->nullable();
            $table->integer('sort_order')->default(0);
            $table->timestamps();
            
            $table->index(['article_id', 'sort_order']);
        });
        
        Schema::table('references', function (Blueprint $table) {
            $table->foreign('article_id')->references('id')->on('articles')->cascadeOnDelete();
        });

Schema::create('bibliographies', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('title');
            $table->text('description')->nullable();
            $table->boolean('is_public')->default(true);
            $table->uuid('owner_id');
            $table->timestamps();
        });
        
        Schema::table('bibliographies', function (Blueprint $table) {
            $table->foreign('owner_id')->references('id')->on('users')->cascadeOnDelete();
        });
        
        Schema::create('bibliography_entries', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('bibliography_id');
            $table->uuid('reference_id');
            $table->integer('sort_order')->default(0);
            $table->text('annotation')->nullable();
            $table->timestamps();
            
            $table->unique(['bibliography_id', 'reference_id']);
        });
        
        Schema::table('bibliography_entries', function (Blueprint $table) {
            $table->foreign('bibliography_id')->references('id')->on('bibliographies')->cascadeOnDelete();
            $table->foreign('reference_id')->references('id')->on('references')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bibliography_entries');
        Schema::dropIfExists('bibliographies');
        Schema::dropIfExists('references');
        Schema::dropIfExists('article_categories');
        Schema::dropIfExists('article_sections');
        Schema::dropIfExists('article_revisions');
        Schema::dropIfExists('articles');
        Schema::dropIfExists('categories');
    }
};