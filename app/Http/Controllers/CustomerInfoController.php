<?php

namespace App\Http\Controllers;

use App\Http\Resources\CustomerinfoResource;
use App\Models\CustomerInfo;
use App\Http\Requests\StoreCustomerInfoRequest;
use App\Http\Requests\UpdateCustomerInfoRequest;
use Inertia\Inertia;

class CustomerInfoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $query = Customerinfo::query();

        $customerInfo = $query->paginate(30)->onEachSide(1);
        return inertia("Customer/Index",[
            "customerInfo" => CustomerinfoResource::collection($customerInfo),
            "success" => session('success'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Customer/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCustomerInfoRequest $request)
    {
        $data = $request->all();

        $customerInfo = Customerinfo::create([
            'name' => $data['name'],
            'address' => $data['address'],
        ]);

        return to_route('customerinfo.index')->with('success', 'Customer successfully added!');
    }

    /**
     * Display the specified resource.
     */
    public function show(CustomerInfo $customerInfo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CustomerInfo $customerInfo, $customerID)
    {
       $record = $customerInfo::find($customerID);
        
        //dd($record);
        return inertia('Customer/Edit', [
            'customer' => $record,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCustomerInfoRequest $request, CustomerInfo $customerInfo)
    {
        
        $data = $request->validated();
        
        $name = $data['name'];
        $id = $data['id'];
        $result = $customerInfo->where('id', $id )->update($data);
        

        return to_route('customerinfo.index')
            ->with('success', "Customer \"$name\" was updated");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CustomerInfo $customerInfo, $customerID)
    {
 
        
        // Find the record you want to delete
        $record = $customerInfo::find($customerID); // Replace $id with the ID of the record you want to delete
        dd($customerInfo);
        $info = $record->toArray();
        //dd( $record['name'] );
        $name = $info['name'];
       $record->delete();
       return to_route('customerinfo.index')->with('success', "Customer \"$name\" was successfully deleted.");
    }
}
