"use client";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {removeUser} from "../reduxtoolkit/Slice"

const page = () => {
    const userAllData = useSelector((data)=>data.usersData.usersData);
    const dispatch = useDispatch();
    return (
        <>
        <h1>All User Data Here</h1>
        <ul style={{padding:"50px 200px"}}>
            {
                userAllData?.map((items)=>(
                    <div key = {items.id}>
                        <li>{items.name}</li>
                        <button onClick={()=>dispatch(removeUser(items.id))}>remove</button>
                    </div>
                ))
            }
        </ul>
        </>
    )
}

export default page