<?php

use App\Models\Product;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

{/*Product Routes Landing Page*/}
    Route::get('/top-picks', function () {
        $products = Product::all();
        return Inertia::render('TopPicks', [
            'products' => $products,
        ]);
    })->name('top-picks');

    Route::get('/blanks', function () {
        $products = Product::where('categories', 'Blanks')->get();
        return Inertia::render('Blanks', [
            'products' => $products,
        ]);
    })->name('blanks');

    Route::get('/new-arrivals', function () {
        return Inertia::render('NewArrivals');
    })->name('new-arrivals');

    Route::get('/bottoms', function () {
        $products = Product::where('categories', 'Bottoms')->get();
        return Inertia::render('Bottoms', [
            'products' => $products,
            ]);
    })->name('bottoms');

    Route::get('/outerwear', function () {
        $products = Product::where('categories', 'Outerwear')->get();
        return Inertia::render('Outerwear', [
            'products' => $products,
        ]);
    })->name('outerwear');

     Route::get('/essentials', function () {
        $products = Product::where('categories', 'Essentials')->get();
        return Inertia::render('essentials', [
            'products' => $products,
        ]);
    })->name('essentials');

     Route::get('/gallery', function () {
        return Inertia::render('gallery');
    })->name('gallery');

     {/*Cart Route*/}
     Route::get('cart', function () {
        return Inertia::render('cart');
    })->name('cart');


{/*Admin Routes*/}
Route::middleware(['auth','role:admin'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('admin/dashboard');
    })->name('dashboard');
    Route::get('products', function () {
            return Inertia::render('admin/products');
    })->name('products');
    
        Route::get('users', function () {
            return Inertia::render('admin/users');
        })->name('users');
    
        Route::get('orders', function () {
            return Inertia::render('admin/orders');
        })->name('orders');

        Route::get('transactions', function () {
            return Inertia::render('admin/transaction');
        })->name('transactions');

   
});

{/*User Routes*/}
Route::middleware(['auth','role:user'])->group(function () {
    Route::get('user-dashboard', function () {
        return Inertia::render('user-dashboard');
    })->name('user-dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
