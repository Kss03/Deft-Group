<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

//static pages
Route::inertia('/about', 'AboutUs');
Route::inertia('/reviews', 'Reviews');
Route::inertia('/vacancies', 'Vacancies');
Route::inertia('/product', 'ProductCardPage');
Route::inertia('/search', 'Search');
Route::inertia('/articles', 'Articles');
Route::inertia('/helpful', 'Helpful');
Route::inertia('/contacts', 'Contacts');
//Онлайн-подбор
Route::inertia('/online-selection-info', 'OnlineSelectionInfo');
//Послепродажный сервис
Route::inertia('/after-sales-service', 'AfterSaleService');
//ознакомительный тур
Route::inertia('/intro-tour', 'IntroTour');
// Продать недвижимость
Route::inertia('/sell-apart', 'SellApart');
//Наша команда
Route::inertia('/our-team', 'OurTeam');
//Сохраненное
Route::inertia('/saved', 'Saved');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
