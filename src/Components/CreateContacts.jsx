import React, { useState } from 'react';

export default function CreateContacts() {

    const [userData, setUserData] = useState({
        id: "",
        FirstName: "",
        LastName: "",
        Status: ""
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserData({ ...userData, [name]: value });
    }

    const addContact = (e) => {
        e.preventDefault();
        let newContact = { ...userData, id: new Date().getTime().toString() };
        fetch("http://localhost:4000/Contacts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newContact)
        }).then(() => {
            alert("Contact added succesfully");
            console.log(JSON.stringify(newContact));
        })
    }

    return (
        <div className='flex flex-col items-center justify-center w-full h-screen'>
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
                <button type="submit" className=' rounded-xl shadow-md p-3 pl-10 pr-10 hover:text-black hover:bg-white bg-green-200 mt-4 font-sans font-bold' onClick={addContact}>Save</button>
            </div>
        </div>
    );
}
