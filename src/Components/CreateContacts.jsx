import React, { useState } from 'react';

export default function CreateContacts() {

    const [userData, setUserData] = useState({
        FirstName: "",
        LastName: "",
        Status: "",
        id: ""
    });
    const [contacts, setContacts] = useState([]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserData({...userData, [name]: value});
        console.log(name + " - " + value);
        console.log(JSON.stringify(userData) + " setUserData");
    }

    const addContact = (e)=>{
        e.preventDefault();
        let newContact = {...userData, id:new Date().getTime().toString()};
        setContacts([...contacts, newContact]);
        fetch("http://localhost:4000/add-contacts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(contacts)
          })
            .then(() => {
              alert("Contact added succesfully")
              
            })
    }

    return (
        <div className='flex flex-col items-center justify-center w-screen'>
            <div className='w-80 h-54 p-8 border-4 border-black rounded-lg'>
                <div className='flex items-center justify-center'>
                    <h3 className='mb-6'>Edit Contact</h3>
                </div>
                <div className='grid grid-cols-1'>
                    <form>
                        <div className='flex items-center justify-center mb-6'>
                            <h2 className='font-bold' >FirstName:&ensp; </h2>
                            <input type="text" name="FirstName" id="" onChange={handleInput} />
                        </div>
                        <div className='flex items-center justify-center mb-6'>
                            <h2 className='font-bold' >LastName:&ensp; </h2>
                            <input type="text" name="LastName" id="" onChange={handleInput} />
                        </div>
                        <div className='flex items-center justify-center'>
                            <h2 className='font-bold' >Status:&ensp; </h2>
                            <div className='grid grid-cols-2' >
                                <input type="radio" name="Status" id="" className='mb-2' value="Active" onChange={handleInput} /><h2>Active</h2>
                                <input type="radio" name="Status" id="" className='mt-2' value="Inactive" onChange={handleInput} /><h2>Inactive</h2>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <button type="submit" className=''>Save</button>
            </div>
        </div>
    );
}
