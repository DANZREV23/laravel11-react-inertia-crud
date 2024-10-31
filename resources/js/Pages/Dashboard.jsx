import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({
    totalCustomers,
  }) {

    const cust = totalCustomers;
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard - All Customers
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">

                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                    <tr className="text-nowrap">
                                        <th className="px-3 py-2">ID</th>
                                        <th className="px-3 py-2">Name</th>
                                        <th className="px-3 py-2">Address</th>
                                        <th className="px-3 py-2">Created Date</th>
                                        <th className="px-3 py-2">Updated Date</th>
                                        
                                    </tr>
                                </thead>
                                
                                <tbody>
                                    {totalCustomers.map(customerInfo => (
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={customerInfo.id}>
                                            <td className="px-3 py-2">{customerInfo.id}</td>
                                            <td className="px-3 py-2">{customerInfo.name}</td>
                                            <td className="px-3 py-2">{customerInfo.address}</td>
                                            <td className="px-3 py-2">{customerInfo.created_at}</td>
                                            <td className="px-3 py-2">{customerInfo.updated_at}</td>
                                            
                                        </tr>
                                    ))}
                                </tbody>
                            </table>



                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
