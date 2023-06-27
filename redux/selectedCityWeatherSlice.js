import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const selectedCityWeatherSlice = createSlice({
  name: "selectedCityWeather",
  initialState,
  reducers: {
    setSelectedCityWeatherInfo: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.country = action.payload.country;
      state.hourlyWeather = action.payload.hourlyWeather;
      state.dailyWeather = action.payload.dailyWeather;
      state.nearbyWeather = action.payload.nearbyWeather;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSelectedCityWeatherInfo } = selectedCityWeatherSlice.actions;

export default selectedCityWeatherSlice.reducer;
