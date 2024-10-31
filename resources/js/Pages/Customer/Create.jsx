import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create() {

    const { data, setData, post, errors } = useForm({
        name: '',
        address: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        post(route('customerinfo.store'));
    }
    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        Create New Customer
                    </h2>

                </div>
            }

        >
            <Head title="Customers" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">

                    <div  className="p-6 text-gray-900 dark:text-gray-100">
                        <form onSubmit={onSubmit} className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                            <div className="mt-4">
                                <InputLabel htmlFor="name" value="Name" />
                                <TextInput id="name" name="name" type="text" value={data.name} className="mt-1 block w-full" onChange={e => setData('name', e.target.value)} />
                                <InputError message={errors.name} className="mt-2" />
                            </div>
                            <div className="mt-4">
                                <InputLabel htmlFor="address" value="Address" />
                                <TextAreaInput id="address" name="address" type="text" value={data.address} className="mt-1 block w-full" onChange={e => setData('address', e.target.value)} />
                                <InputError message={errors.address} className="mt-2" />
                            </div>
                            <div className="mt-4 text-right">
                                <Link href={route('customerinfo.index')} className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2" > Cancel</Link>
                                <button className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600" >Submit</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    )
}