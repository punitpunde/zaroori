import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/moviesSlice";

const store = configureStore({
    reducer:{
        moviesState: moviesReducer,
    }
})

export default store;
