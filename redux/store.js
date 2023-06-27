import { configureStore } from "@reduxjs/toolkit";
import searchedCityWeatherReducer from "./searchedCityWeatherSlice";
import selectedCityWeatherReducer from "./selectedCityWeatherSlice";

export const store = configureStore({
  reducer: {
    searchedCityWeather: searchedCityWeatherReducer,
    selectedCityWeather: selectedCityWeatherReducer,
  },
});
