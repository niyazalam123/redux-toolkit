import { createSlice,nanoid,current, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
    todoUsers:JSON.parse(localStorage.getItem("TodoList")) || []
}


export const fetchApiData = createAsyncThunk("fetchApiData",async()=>{
    const data2 = await fetch("https://jsonplaceholder.typicode.com/users");
    return data2.json();
})


const todoSlices = createSlice({
    name:"TodoData",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const data = {
                id:nanoid(),
                name:action.payload
            };
            state.todoUsers.push(data);
            const savedData = JSON.stringify(current(state.todoUsers));
            localStorage.setItem("TodoList",savedData);
        },
        removeTodo:(state,action)=>{
            const updatedTodo = state.todoUsers.filter((item)=>item.id!==action.payload);
            state.todoUsers = updatedTodo;
            const savedData = JSON.stringify(updatedTodo);
            localStorage.setItem("TodoList",savedData);
        }

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchApiData.fulfilled,(state,action)=>{
            
        })
    }
});

export const {addTodo,removeTodo}  = todoSlices.actions;
export default todoSlices.reducer;