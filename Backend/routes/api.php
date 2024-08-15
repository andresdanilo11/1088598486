<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GanadoresController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('/ganadores/aleatorios', [GanadoresController::class, 'aleatorios']);
Route::get('/ganadores', [GanadoresController::class, 'index']);
Route::put('/ganadores/{id}', [GanadoresController::class, 'update']);
Route::delete('/ganadores/{id}', [GanadoresController::class, 'destroy']);