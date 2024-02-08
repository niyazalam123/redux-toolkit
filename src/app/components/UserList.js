"use client";
import React from 'react';
import { useSelector } from 'react-redux';



const UserList = () => {
  const userData = useSelector((data)=>data.users);
  return (
    <>
    <div className='_us1'>
        <h3>User Lists</h3>
        <ul className='_us2'>
          {
            userData.map((items)=>(
              <li key={items.id}>{items.name}</li>
            ))
          }
        </ul>
    </div>
    </>
  )
}

export default UserList