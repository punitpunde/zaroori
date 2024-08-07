import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/moviesSlice";
import artistsReducer from "../features/artistSlice"
const store = configureStore({
    reducer:{
        moviesState: moviesReducer,
        artistsState: artistsReducer
    }
})

export default store;
