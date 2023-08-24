import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Contacts() {

  let [contacts, setContacts] = useState([]);
  let [pending, setpending] = useState(true);
  let [error, seterror] = useState(null);
  
  useEffect(() => {
    fetch("http://localhost:4000/Contacts")
      .then((res) => {
        if (res.ok === false) {
          throw Error("Searching data not found in this API")
        }
        return res.json();
      })
      .then((data) => { setContacts(data); setpending(false); console.log(data); })
      .catch((err) => { seterror(err.message); setpending(false) })
  }, []);

  return (
    <div className=''>
      {error && <h1>{error}</h1>}
      <div className='flex items-center justify-center m-8'>
        <NavLink to="/add-contacts">
          <button className='border-2 rounded-xl border-black pl-6 pr-6 pt-2 pb-2 mb-4 font-sans font-bold text-white bg-gray-400 hover:text-black hover:bg-slate-200'>Create Contact</button>
        </NavLink>
      </div>

      {!pending && <div className='flex flex-wrap items-center justify-center'>
        {contacts.map((contact) => {
          return (
            <div className='mb-6 flex justify-center flex-col items-center'>
              <div className='grid grid-cols-2 p-2 rounded-xl mr-4 mb-4 border-4 border-black bg-slate-500 text-white'>
                <h2 className='text-4xl font-sans'>FirstName:-&ensp;</h2><h2 className='text-3xl font-mono font-semibold' >{contact.FirstName}</h2>
                <h2 className='text-4xl font-sans'>LastName:-&ensp;</h2><h2 className='text-3xl font-mono font-semibold' >{contact.LastName}</h2>
                <h2 className='text-4xl font-sans'>Status:-&ensp;</h2><h2 className='text-3xl font-mono font-semibold' >{contact.Status}</h2>
              </div>
              <div className='flex flex-col bg-none'>
                <button className='rounded-xl border-green-400 pl-6 pr-6 pt-2 pb-2 mb-4 font-sans font-bold text-white bg-gradient-to-r from-green-300 to-green-500 hover:from-green-500 hover:to-green-300 '> Edit</button>
                <button className='rounded-xl border-red-400 pl-6 pr-6 pt-2 pb-2 font-sans font-bold text-white bg-gradient-to-r from-red-300 to-red-500 hover:from-red-500 hover:to-red-300 '> Delete</button>
              </div>
            </div>
          )
        })}
      </div>}
    </div>
  );
}
