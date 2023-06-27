import { useState } from "react";
import { View, SafeAreaView, Platform, StatusBar, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Toast } from "toastify-react-native";

import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar";
import LocationWeatherInfo from "../components/LocationWeatherInfo";

import { useDispatch, useSelector } from "react-redux";
import {
  addToSearchedCityWeather,
  reorganizeSearchedCityWeather,
  removeFromSearchedCityWeather,
  resetSearchedCityWeather,
} from "../redux/searchedCityWeatherSlice";
import { setSelectedCityWeatherInfo } from "../redux/selectedCityWeatherSlice";

import { getCityIdFromName, fetchWeather } from "../services/weatherServices";
import SearchedLocationResults from "../components/SearchedLocationResults";
import ToastifyNotification from "../components/ToastifyNotification";

const LocationWeather = ({ navigation }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [searchedCityResults, setSearchedCityResults] = useState([]);

  const dispatch = useDispatch();
  const searchedCityWeather = useSelector(
    (state) => state.searchedCityWeather.weather
  );
  const selectedCityWeather = useSelector((state) => state.selectedCityWeather);

  const handleSearchCities = async (cityName) => {
    try {
      const data = await getCityIdFromName(cityName);
      setSearchedCityResults(data);
    } catch (error) {
      Toast.error(error.message);
    }
  };

  const handleAddCities = async (city) => {
    const { id, name, country } = city;
    const existingCities = searchedCityWeather.map((city) => city?.id);
    if (existingCities.includes(id)) {
      dispatch(reorganizeSearchedCityWeather(id));
    } else {
      const weather = await fetchWeather({ id, name, country });
      dispatch(addToSearchedCityWeather(weather));
      dispatch(setSelectedCityWeatherInfo(weather));
    }

    setSearchedCityResults([]);
  };

  const handleDeleteCity = (id) => {
    dispatch(removeFromSearchedCityWeather(id));
    if (searchedCityWeather.length < 2) {
      setIsEditing(false);
    }
  };

  const handleResetCities = () => {
    dispatch(resetSearchedCityWeather());
    setIsEditing(false);
  };

  return (
    <View>
      <LinearGradient
        colors={["rgba(28, 27, 51, 1)", "rgba(46, 51, 90, 1)"]}
        className="h-full w-full"
        useAngle={true}
      >
        <SafeAreaView
          style={{
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          }}
        >
          <ToastifyNotification />
          {selectedCityWeather.id && (
            <Navbar
              navigation={navigation}
              visibleOption={true}
              setIsEditing={setIsEditing}
            />
          )}
          <SearchBar handleSearchCities={handleSearchCities} />
          {searchedCityResults.length > 0 && (
            <SearchedLocationResults
              searchedCityResults={searchedCityResults}
              setSearchedCityResults={setSearchedCityResults}
              handleAddCities={handleAddCities}
            />
          )}
          <LocationWeatherInfo
            navigation={navigation}
            cityForecast={searchedCityWeather}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            handleDeleteCity={handleDeleteCity}
            handleResetCities={handleResetCities}
          />
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
};

export default LocationWeather;
