import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  usersData:[],
};

const userSlice = createSlice({
  name: "UserDatas",
  initialState,
  reducers: {
    addUsers: (state, action) => {
      const data = {
        id: nanoid(),
        name: action.payload,
      };
      state.usersData.push(data);
    },
    removeUser: (state, action) => {
      state.usersData = state.usersData.filter((item) => item.id !== action.payload);
    },
  },
});

// Export actions and reducer
export const { addUsers, removeUser } = userSlice.actions;
export default userSlice.reducer;
