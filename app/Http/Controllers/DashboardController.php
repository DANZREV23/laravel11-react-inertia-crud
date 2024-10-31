<?php

namespace App\Http\Controllers;

use App\Http\Resources\CustomerinfoResource;
use App\Models\Customerinfo;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
       
        $query = Customerinfo::query();

        $customerInfo = $query->paginate(30)->onEachSide(1);
        
       
        $totalCustomers = CustomerinfoResource::collection($customerInfo);
        //dd($totalCustomers);
        return inertia('Dashboard', compact(
            'totalCustomers',
           
        ));
    }
}
