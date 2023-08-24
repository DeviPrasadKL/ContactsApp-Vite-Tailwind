import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function EditContact() {

    let { id } = useParams();

    let [contact, setContact] = useState([]);
    let [pending, setpending] = useState(true);
    let [error, seterror] = useState(null);

    useEffect(() => {
        fetch("http://localhost:4000/Contacts/" + id)
            .then((res) => {
                if (res.ok === false) {
                    throw Error("Searching data not found in this API")
                }
                return res.json();
            })
            .then((data) => { setContact(data); setpending(false); console.log(data); })
            .catch((err) => { seterror(err.message); setpending(false) })
    }, []);

    const handleInput = ()=>{
        
    }

    return (
        <div>
            {error && <h1>{error}</h1>}
            {pending && <div className='flex flex-col items-center justify-center w-full h-screen'>
                <div className='bg-white shadow-gray-300 shadow-lg w-80 h-54 p-8 rounded-xl'>
                    <div className='flex items-center justify-center'>
                        <h3 className='mb-6'>Edit Contact</h3>
                    </div>
                    <div className='grid grid-cols-1'>
                        <form>
                            <div className='flex items-center justify-center mb-6'>
                                <h2 className='font-bold' >FirstName:&ensp; </h2>
                                <input type="text" name="FirstName" id="" className='bg-gray-200 rounded-lg' onChange={handleInput} />
                            </div>
                            <div className='flex items-center justify-center mb-6'>
                                <h2 className='font-bold' >LastName:&ensp; </h2>
                                <input type="text" name="LastName" id="" className='bg-gray-200 rounded-lg' onChange={handleInput} />
                            </div>
                            <div className='flex items-center justify-center'>
                                <h2 className='font-bold' >Status:&ensp; </h2>
                                <div className='grid grid-cols-2' >
                                    <input type="radio" name="Status" id="" className='mb-2 ' value="Active" onChange={handleInput} /><h2>Active</h2>
                                    <input type="radio" name="Status" id="" className='mt-2 ' value="Inactive" onChange={handleInput} /><h2>Inactive</h2>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div>
                    <button type="submit" className=' rounded-xl shadow-md p-3 pl-10 pr-10 hover:text-black hover:bg-white bg-green-200 mt-4 font-sans font-bold' onClick={editContact}>Save</button>
                </div>
            </div>}
        </div>
    );
}
