"use client";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {removeUser} from "@/app/reduxtoolkit/Slice"


const UserList = () => {
  const userAllData = useSelector((data)=>data.usersData.usersData);
  const dispatch = useDispatch();
  return (
    <>
      <div className='_us1'>
        <h3>User Lists</h3>
        <ul className='_us2'>
          <div className='_gfbca'>
            {
              userAllData?.map((items)=>(
                <div key={items.id}>
                  <li>{items.name}</li>
                  <button onClick={()=>dispatch(removeUser(items.id))}>Remove</button>
                </div>
              ))
            }
          </div>
        </ul>
      </div>
    </>
  )
}

export default UserList