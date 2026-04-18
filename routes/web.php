<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');


    Route::get('/top-picks', function () {
        return Inertia::render('TopPicks');
    })->name('top-picks');

    Route::get('/blanks', function () {
        return Inertia::render('Blanks');
    })->name('blanks');

    Route::get('/new-arrivals', function () {
        return Inertia::render('NewArrivals');
    })->name('new-arrivals');

    Route::get('/bottoms', function () {
        return Inertia::render('Bottoms');
    })->name('bottoms');

    Route::get('/outerwear', function () {
        return Inertia::render('Outerwear');
    })->name('outerwear');

     Route::get('/essentials', function () {
        return Inertia::render('essentials');
    })->name('essentials');

     Route::get('/gallery', function () {
        return Inertia::render('gallery');
    })->name('gallery');

     {/*Cart Route*/}
     Route::get('cart', function () {
        return Inertia::render('cart');
    })->name('cart');


Route::middleware(['auth','role:admin'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::middleware(['auth','role:user'])->group(function () {
    Route::get('user-dashboard', function () {
        return Inertia::render('user-dashboard');
    })->name('user-dashboard');

   
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
