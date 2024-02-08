"use client";
import React, { useState } from 'react';
import {addUser} from "@/app/reduxtoolkit/Slice"
import { useDispatch } from 'react-redux';

const AddUsers = () => {
    const [userName,setUserName] = useState("");
    const dispatch = useDispatch();

    function addUserList(){
        dispatch(addUser(userName))
    }
    return (
        <>
            <div className='_add1'>
                <h3>Add New user</h3>
                <div className='_add2'>
                    <input type='text' placeholder='Enter User Name' onChange={(e)=>setUserName(e.target.value)} value={userName} name="userName"/>
                    <button onClick={addUserList}>Add User</button>
                </div>
            </div>
        </>
    )
}

export default AddUsers