<?php

namespace App\Http\Controllers;

use App\Http\Resources\CustomerInfoResource;
use App\Models\Customerinfo;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
       
        //$totalCustomers = CustomerInfo::query();
       
        //$totalCustomers = CustomerinfoResource::collection($totalCustomers);
        //dd($totalCustomers);
        return inertia('Dashboard');
    }
}
