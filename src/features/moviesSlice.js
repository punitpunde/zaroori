import { createSlice } from "@reduxjs/toolkit";
import moviesData from "../data/moviesData";
import {uniq,sortBy} from "lodash"


const moviesCategoryByYear = uniq(moviesData.map((movie)=>movie.year)).sort();
const DEFAULT_CATEGORIES = "SELECT MOVIE YEAR";

const initialState = {
    moviesData: moviesData,
    moviesCategoryByYear:[DEFAULT_CATEGORIES,...moviesCategoryByYear],  
}

const moviesSlice = createSlice({
    name:"movies",
    initialState,
    reducers:{

    }
})

export default moviesSlice.reducer;