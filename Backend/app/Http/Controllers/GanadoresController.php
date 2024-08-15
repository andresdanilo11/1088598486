<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ganador;
use Faker\Factory as Faker;

class GanadoresController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function  aleatorios()
    {
        for ($i=0 ; $i<1001;$i++){
            $ganadores = new ganadores();
            $ganadores -> name = $faker -> name;
            $ganadores -> email = $faker -> email;
            $ganadores -> city = $faker -> city;
            $ganadores -> country = $faker -> country;
            $ganadores -> save();
        }
        
    }
}
