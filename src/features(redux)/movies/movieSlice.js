import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialSatate = {
  movies: [],
  series: [],
  details: {},
};

export const fetchMovie = createAsyncThunk(
  "movies/fetchMovie",
  async (search) => {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=307ea669&s=${search}&type=movie`
    );

    return response.data.Search;
  }
);
export const fetchSeries = createAsyncThunk(
  "series/fetchSeries",
  async (search) => {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=307ea669&s=${search}&type=series`
    );

    return response.data.Search;
  }
);
export const fetchDetails = createAsyncThunk(
  "series/fetchDetails",
  async (id) => {
    const response = await axios.get(
      `    http://www.omdbapi.com/?apikey=307ea669&Plot=full&i=${id}`
    );

    return response.data;
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: initialSatate,
  reducers: {
    removeSelected: (state) => {
      state.details = {};
    },
  },
  extraReducers: {
    [fetchMovie.pending]: () => {
      console.log("Pending");
    },
    [fetchMovie.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, movies: payload };
    },
    [fetchMovie.rejected]: () => {
      console.log("Rejected!");
    },
    [fetchSeries.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, series: payload };
    },
    [fetchDetails.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, details: payload };
    },
  },
});

export const { removeSelected } = movieSlice.actions;

export const getAllMovies = (state) => state.movies.movies;
export const getAllSeries = (state) => state.movies.series;
export const getFullDetails = (state) => state.movies.details;

export default movieSlice.reducer;
