import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "./accountSlice";
import messageSlice from "./messageSlice"
 
const store=configureStore({
    reducer:{
        account:accountSlice,
        message:messageSlice
    }
});

export default store;