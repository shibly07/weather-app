import { useCallback, useState } from "react";
import {
  ScrollView,
  View,
  RefreshControl,
  TouchableOpacity,
  Pressable,
  Text,
} from "react-native";
import { useDispatch } from "react-redux";
import { setSelectedCityWeatherInfo } from "../redux/selectedCityWeatherSlice";
import WeatherInfoCard from "./cards/WeatherInfoCard";

const LocationWeatherInfo = ({
  cityForecast,
  isEditing,
  setIsEditing,
  handleDeleteCity,
  handleResetCities,
  navigation,
}) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 300);
  }, []);

  const dispatch = useDispatch();
  const selectedCity = (city) => {
    dispatch(setSelectedCityWeatherInfo(city));
    navigation.navigate("Home");
  };
  const lookup = require("country-code-lookup");

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {isEditing && (
        <View className="flex-row justify-between">
          <Pressable onPress={() => handleResetCities()} className="py-2 px-6">
            <Text className="text-red-500 bg-slate-600 rounded-md py-1 px-2">
              Clear All
            </Text>
          </Pressable>

          <Pressable onPress={() => setIsEditing(false)} className="py-2 px-6">
            <Text className="text-green-500 bg-slate-600 rounded-md py-1 px-2">
              Done
            </Text>
          </Pressable>
        </View>
      )}
      <View className="py-3 px-10 md:px-10 justify-center items-center">
        <View className="pt-1 pb-40">
          {cityForecast?.map(
            (item) =>
              item.country && (
                <View key={item.id}>
                  <TouchableOpacity onPress={() => selectedCity(item)}>
                    <WeatherInfoCard
                      id={item?.id}
                      isEditing={isEditing}
                      handleDeleteCity={handleDeleteCity}
                      feelsLike={item?.hourlyWeather[0]?.feelsLikeTemp}
                      maxTemp={item?.dailyWeather[0]?.maxTemp.toString()}
                      minTemp={item?.dailyWeather[0]?.minTemp.toString()}
                      city={item?.name}
                      country={
                        item?.country?.includes(" ")
                          ? lookup.byCountry(item?.country).internet
                          : item?.country
                      }
                      symbolPhrase={
                        item?.hourlyWeather[0]?.symbolPhrase ||
                        item?.dailyWeather[0]?.symbolPhrase
                      }
                      icon={
                        item?.hourlyWeather[0]?.symbol ||
                        item?.dailyWeather[0]?.symbol
                      }
                    />
                  </TouchableOpacity>
                </View>
              )
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default LocationWeatherInfo;
