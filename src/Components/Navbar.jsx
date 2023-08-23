import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <div className='bg-yellow-400 h-screen w-80 flex flex-col max-sm:hidden items-center pt-12 '>
        <NavLink to="/contacts">
          <h3 className='mb-16 text-4xl max-sm:text-sm underline hover:text-blue-600' >Contacts</h3>
        </NavLink>
        <hr className='h-1 bg-black w-full pl-4' />
        <NavLink to="/">
          <h3 className='mb-16 mt-12 text-4xl max-sm:text-sm underline hover:text-blue-600'>Charts and Maps</h3>
        </NavLink>
        <hr className='h-1 bg-black w-full' />
      </div>
      <div className='bg-yellow-400 max-sm:w-screen max-sm:h-12 flex flex-col items-center md:hidden'>
        <NavLink to="/contacts">
          <h3 className='max-sm:text-sm underline hover:text-blue-600' >Contacts</h3>
        </NavLink>
        <hr className='h-1 bg-black w-full pl-4' />
        <NavLink to="/">
          <h3 className='max-sm:text-sm underline hover:text-blue-600'>Charts and Maps</h3>
        </NavLink>
        <hr className='h-1 bg-black w-full' />
      </div>
    </div>
  );
}
