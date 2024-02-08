"use client";
const { configureStore } = require("@reduxjs/toolkit");
import reducer from "./Slice"


export const store2 = configureStore({
    reducer
})
