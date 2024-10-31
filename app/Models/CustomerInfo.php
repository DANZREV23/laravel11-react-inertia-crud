<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CustomerInfo extends Model
{
    /** @use HasFactory<\Database\Factories\CustomerInfoFactory> */
    use HasFactory;

    protected $fillable = ['name', 'address'];


}