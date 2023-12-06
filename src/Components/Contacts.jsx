import { NavLink } from 'react-router-dom';
import useFetchContacts from './CustomHooks/useFetchContacts';

export default function Contacts() {

const [contacts, pending, error] = useFetchContacts();

  let deleteContact = (id) => {
    fetch("http://localhost:4000/Contacts/" + id, { method: "DELETE" })
      .then(() => {
        let userChoice = confirm("Are you sure you want to delete this contact?");
        if (userChoice) {
          alert("Contact deleted successfully");
        }
      }
      );
  };

  if(pending){
    return(
      <div style={{display:'flex', alignItems:'center'}}>Loading.......</div>
    )
  }

  return (
    <div className=''>
      {error && <h1>{error}</h1>}
      <div className='flex items-center justify-center m-8 '>
        <NavLink to="/add-contacts">
          <button className='pt-2 pb-2 pl-6 pr-6 mb-4 font-sans font-bold text-white bg-gray-400 border-2 border-black rounded-xl hover:text-black hover:bg-slate-200'>Create Contact</button>
        </NavLink>
      </div>

      <div className='flex flex-wrap items-center justify-center h-screen'>
        {contacts.map((contact) => {
          return (
            <div className='flex flex-col items-center justify-center'>
              <div className='grid grid-cols-2 p-2 mb-4 mr-4 bg-white shadow-lg rounded-xl shadow-gray-300'>
                <h2 className='font-sans text-4xl'>FirstName:-&ensp;</h2><h2 className='font-mono text-3xl font-semibold' >{contact.FirstName}</h2>
                <h2 className='font-sans text-4xl'>LastName:-&ensp;</h2><h2 className='font-mono text-3xl font-semibold' >{contact.LastName}</h2>
                <h2 className='font-sans text-4xl'>Status:-&ensp;</h2><h2 className='font-mono text-3xl font-semibold' >{contact.Status}</h2>
              </div>
              <div className='flex flex-col bg-none'>
                <NavLink to={`/edit-contacts/${contact.id}`}>
                  <button className='w-full pt-2 pb-2 pl-6 pr-6 mb-4 font-sans font-bold text-white border-green-400 shadow-md rounded-xl bg-gradient-to-r from-green-300 to-green-500 hover:from-green-500 hover:to-green-300 '> Edit</button>
                </NavLink>
                <button className='pt-2 pb-2 pl-6 pr-6 font-sans font-bold text-white border-red-400 shadow-md rounded-xl bg-gradient-to-r from-red-300 to-red-500 hover:from-red-500 hover:to-red-300' onClick={() => { deleteContact(contact.id) }}> Delete</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}
