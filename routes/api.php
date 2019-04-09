<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::resource('blog', 'Api\BlogController');

Route::get('blog', 'Api\BlogController@getAllTasks');
Route::post('blog', 'Api\BlogController@postNewTask');
Route::delete('blog/{id}', 'Api\BlogController@deleteTask');

Route::put('blog/{id}/status', 'Api\BlogController@toggleCompleteTask');

Route::put('blog/{id}/edit', 'Api\BlogController@editTask');



Route::group(['middleware' => ['json.response']], function () {

  Route::middleware('auth:api')->get('/user', function (Request $request) {
      return $request->user();
  });

  // public routes
  Route::post('/login', 'Api\AuthController@login')->name('login.api');
  Route::post('/register', 'Api\AuthController@register')->name('register.api');

  // private routes
  Route::middleware('auth:api')->group(function () {
      Route::get('/logout', 'Api\AuthController@logout')->name('logout');
  });

});









