import { createSlice } from "@reduxjs/toolkit";
import artistsData from "../data/artists";

const initialState = {
    artistsData,

}

const artistSlice = createSlice({
    name:"artist",
    initialState,
    reducers:{

    }
})

export default artistSlice.reducer;