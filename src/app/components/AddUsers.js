"use client";
import React, { useState } from 'react';
import {addUsers} from "@/app/reduxtoolkit/Slice"
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';


const AddUsers = () => {
    const [users,setUsers] = useState("");
    const dispatch = useDispatch();
    const route = useRouter();

    function addUserList(){
        dispatch(addUsers(users));
        setUsers("");  
    }
    return (
        <>
            <div className='_add1'>
                <h3>Add New user</h3>
                <div className='_add2'>
                    <input type='text' placeholder='Enter User Name'   name="users" value={users} onChange={(e)=>setUsers(e.target.value)}/>
                    <button onClick={addUserList}>Add User</button>
                </div>
                <button onClick={()=>route.push("/removeuser")}>Go to removeuser page</button>
            </div>
        </>
    )
}

export default AddUsers