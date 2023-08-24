import React, { useEffect, useState } from 'react';
import { json, useParams } from 'react-router-dom';

export default function EditContact() {

    let { id } = useParams();

    let [contact, setContact] = useState({
        id: id,
        FirstName: "",
        LastName: "",
        Status: ""
    });
    let [error, seterror] = useState(null);
    useEffect(() => {
        fetch("http://localhost:4000/Contacts/" + id)
            .then((res) => {
                if (res.ok === false) {
                    throw Error("Searching data not found in this API")
                }
                return res.json();
            })
            .then((data) => { setContact(data); console.log(data); data.Status == "Active"? (document.getElementById('radio1').checked = true) : (document.getElementById('radio2').checked = true);})
            .catch((err) => { seterror(err.message) });
            
    }, []);


    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
    }

    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center'>
            {error && <h1>{error}</h1>}
            <div>
                <div className='bg-white shadow-gray-300 shadow-lg w-80 h-54 p-8 rounded-xl'>
                    <div className='flex items-center justify-center'>
                        <h3 className='mb-6'>Edit Contact</h3>
                    </div>
                    <div className='grid grid-cols-1'>
                        <form>
                            <div className='flex items-center justify-center mb-6'>
                                <h2 className='font-bold' >FirstName:&ensp; </h2>
                                <input type="text" name="FirstName" id="" className='bg-gray-200 rounded-lg'  value={contact.FirstName} onChange={handleInput} />
                            </div>
                            <div className='flex items-center justify-center mb-6'>
                                <h2 className='font-bold' >LastName:&ensp; </h2>
                                <input type="text" name="LastName" id="" className='bg-gray-200 rounded-lg'  value={contact.LastName} onChange={handleInput} />
                            </div>
                            <div className='flex items-center justify-center'>
                                <h2 className='font-bold' >Status:&ensp; </h2>
                                <div className='grid grid-cols-2' >
                                    <input type="radio" name="Status" id="radio1" className='mb-2 ' value={contact.Status} onChange={handleInput} /><h2>Active</h2>
                                    <input type="radio" name="Status" id="radio2" className='mt-2 ' value={contact.Status} onChange={handleInput} /><h2>Inactive</h2>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div>
                    <button type="submit" className=' rounded-xl shadow-md p-3 pl-10 pr-10 hover:text-black hover:bg-white bg-green-200 mt-4 font-sans font-bold'>Save</button>
                </div>
            </div>
        </div>
    );
}
