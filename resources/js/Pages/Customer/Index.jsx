import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";


export default function Index({ customerInfo, success }) {

    const delCustomer = (customerInfos) => {
        if (!window.confirm('Are you sure you want to delete customer?')) {
            return;
        }
        
        router.delete(route("customerinfo.destroy", customerInfos.id));
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        Customers
                    </h2>
                    <Link href={route('customerinfo.create')} className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
                        Add New
                    </Link>
                </div>
            }

        >
            <Head title="Customers" />


            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                {success && (
                    <div className="bg-emerald-500 py-2 px-4 text-white rounded mb-4">{success}</div>
                )}
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
                                        <th className="px-3 py-2 text-right">Actions</th>
                                    </tr>
                                </thead>
                                
                                <tbody>
                                    {customerInfo.data.map(customerInfo => (
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={customerInfo.id}>
                                            <td className="px-3 py-2">{customerInfo.id}</td>
                                            <td className="px-3 py-2">{customerInfo.name}</td>
                                            <td className="px-3 py-2">{customerInfo.address}</td>
                                            <td className="px-3 py-2">{customerInfo.created_at}</td>
                                            <td className="px-3 py-2">{customerInfo.updated_at}</td>
                                            <td className="px-3 py-2 text-nowrap">
                                                <Link href={route('customerinfo.edit', customerInfo.id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1">
                                                    Edit
                                                </Link>
                                                <button
                                                    onClick={ e => delCustomer(customerInfo) }
                                                    className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                                                >
                                                    Delete 
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>



                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )

}