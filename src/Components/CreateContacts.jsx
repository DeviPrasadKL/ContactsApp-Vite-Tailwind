import React from 'react';

export default function CreateContacts() {
    return (
        <div className='flex flex-col items-center justify-center w-screen'>
            <div className='w-80 h-48 p-8 border-4 border-black rounded-lg'>
                <div className='flex items-center justify-center'>
                    <h3>Edit Contact</h3>
                </div>
                <div className='grid grid-cols-1'>
                    <form>
                        <div className='flex items-center justify-center'>
                            <h2>FirstName:&ensp; </h2>
                            <input type="text" name="" id="" />
                        </div>
                        <div className='flex items-center justify-center'>
                            <h2>LastName:&ensp; </h2>
                            <input type="text" name="" id="" />
                        </div>
                        <div className='flex items-center justify-center'>
                            <h2>Status:&ensp; </h2>
                            <div className='grid grid-cols-2' >
                                <input type="radio" name="status" id="" /><h2>Active</h2>
                                <input type="radio" name="status" id="" /><h2>Inactive</h2>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div>3</div>
        </div>
    );
}
