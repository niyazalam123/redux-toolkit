"use client";
import React, { useState } from 'react';
import { addTodo } from "@/app/reduxtoolkit/todoSlice";
import { useDispatch, useSelector } from 'react-redux';
import {removeTodo} from "@/app/reduxtoolkit/todoSlice";

const page = () => {
    const dispatch = useDispatch();
    const [todoData, setTodoData] = useState("");
    const todoAllData = useSelector((data: any) => data.todosData.todoUsers);
    console.log(todoAllData)

    function addTodoData() {
        dispatch(addTodo(todoData));
        setTodoData("");
    }
    return (
        <>
            <main style={{ maxWidth: "400px", width: "100%", border: "1px solid #44d", padding: "20px", borderRadius: "10px", margin: "50px auto" }}>
                <div style={{ border: "1px solid orange", padding: "15px", borderRadius: "6px" }}>
                    <input
                        type="text"
                        placeholder='Write Todo Here...'
                        onChange={(e) => setTodoData(e.target.value)}
                        value={todoData}
                        style={{ width: "100%", padding: "12px 20px", borderRadius: "6px" }} />
                    <button
                        onClick={addTodoData}
                        style={{ background: "#44d", color: "#fff", padding: "8px 12px", display: "block", width: "100%", cursor: "pointer", marginTop: "6px" }}>Add Todo</button>
                </div>
                <div style={{ marginTop: "20px", border: "1px solid orange", padding: "25px", borderRadius: "6px", maxHeight: "400px", overflowY: "scroll" }}>
                    <ul>
                        {
                            todoAllData.map((items: { id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }) => (
                                <li style={{ marginBottom: "10px" }} key={items.id}>
                                    <span>{items.name}</span>
                                    <button onClick={()=>dispatch(removeTodo(items.id))}>Remove</button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </main>
        </>
    )
}

export default page