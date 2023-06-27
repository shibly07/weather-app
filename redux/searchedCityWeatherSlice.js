import { createSlice } from "@reduxjs/toolkit";

const initialState = { weather: [] };

export const searchedCityWeatherSlice = createSlice({
  name: "searchedCityWeather",
  initialState,
  reducers: {
    addToSearchedCityWeather: (state, action) => {
      state.weather.unshift(action.payload);
    },
    reorganizeSearchedCityWeather: (state, action) => {
      const existingWeather = state.weather.filter(
        (item) => item.id === action.payload
      );
      const foundIdx = state.weather.findIndex(
        (el) => el.id === existingWeather[0].id
      );
      state.weather.splice(foundIdx, 1);
      state.weather.unshift(...existingWeather);
    },
    removeFromSearchedCityWeather: (state, action) => {
      state.weather = state.weather.filter(
        (item) => item.id !== action.payload
      );
    },
    updateCityWeather: (state, action) => {
      state.weather = action.payload;
    },
    resetSearchedCityWeather: (state, action) => {
      state.weather = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToSearchedCityWeather,
  reorganizeSearchedCityWeather,
  removeFromSearchedCityWeather,
  updateCityWeather,
  resetSearchedCityWeather,
} = searchedCityWeatherSlice.actions;

export default searchedCityWeatherSlice.reducer;
