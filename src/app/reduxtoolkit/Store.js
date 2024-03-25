import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "@/app/reduxtoolkit/Slice";
import todosReducer from "@/app/reduxtoolkit/todoSlice"


export const Store = configureStore({
    reducer: {
        usersData: usersReducer,
        todosData: todosReducer
    }
})