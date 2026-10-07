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
        Schema::create('sources', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('type'); // archive_record, book, manuscript, oral_history, website, database, etc.
            $table->text('description')->nullable();
            $table->string('reference_code')->nullable(); // archival reference
            $table->string('author')->nullable();
            $table->string('title_full')->nullable();
            $table->date('date_created')->nullable();
            $table->string('date_precision')->nullable(); // exact, year, circa, range
            $table->string('language')->nullable();
            $table->text('summary')->nullable();
            $table->text('notes')->nullable();
            $table->uuid('archive_id')->nullable();
            $table->uuid('fonds_id')->nullable();
            $table->uuid('classification_id')->nullable();
            $table->uuid('description_unit_id')->nullable();
            $table->json('metadata')->nullable();
            $table->timestamps();
            $table->softDeletes();
            
            $table->index('slug');
            $table->index('type');
            $table->index(['archive_id', 'fonds_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sources');
    }
};