import {
  View,
  Text,
  ImageBackground,
  Pressable,
  TouchableOpacity,
  Image,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import WeatherSelectorBG from "../assets/bg-underline.svg";
import ModalViewWeather from "./ModalViewWeather";

const ModalView = ({
  city,
  forecastScheduleType,
  setForecastScheduleType,
  isModalExpanded,
  setIsModalExpanded,
  selectedHourlyWeatherIndex,
  setSelectedHourlyWeatherIndex,
  selectedDailyWeatherIndex,
  setSelectedDailyWeatherIndex,
}) => {
  return (
    <ImageBackground
      source={require("../assets/bg-modal.png")}
      className={`${
        !isModalExpanded ? "h-[325px]" : "h-[650px]"
      } w-[390px] opacity-90`}
    >
      <View className={isModalExpanded ? "h-full" : "h-[325px]"}>
        <TouchableOpacity
          className="absolute z-10 left-0 right-0 items-center h-7"
          onPress={() => setIsModalExpanded(!isModalExpanded)}
        >
          {!isModalExpanded ? (
            <MaterialIcons name="keyboard-arrow-up" size={28} color="white" />
          ) : (
            <MaterialIcons name="keyboard-arrow-down" size={28} color="white" />
          )}
        </TouchableOpacity>

        <View className="flex-row justify-between px-8 pt-10">
          <Pressable onPress={() => setForecastScheduleType("hourlyWeather")}>
            <Text className="text-gray-400 font-semibold text-lg">
              Hourly Forecast
            </Text>
            <View
              className={
                forecastScheduleType === "hourlyWeather"
                  ? "absolute bottom-0 -left-5"
                  : "hidden"
              }
            >
              <WeatherSelectorBG />
            </View>
          </Pressable>
          <Pressable onPress={() => setForecastScheduleType("dailyWeather")}>
            <Text className="text-gray-400 font-semibold text-lg">
              Weekly Forecast
            </Text>
            <View
              className={
                forecastScheduleType === "dailyWeather"
                  ? "absolute bottom-0 -left-5"
                  : "hidden"
              }
            >
              <WeatherSelectorBG />
            </View>
          </Pressable>
        </View>
        <Image source={require("../assets/bg-modal-underline.png")} />
        {city && (
          <View className="top-3 h-full">
            <ModalViewWeather
              city={city}
              forecastSchedule={city[forecastScheduleType]}
              forecastScheduleType={forecastScheduleType}
              isModalExpanded={isModalExpanded}
              selectedHourlyWeatherIndex={selectedHourlyWeatherIndex}
              setSelectedHourlyWeatherIndex={setSelectedHourlyWeatherIndex}
              selectedDailyWeatherIndex={selectedDailyWeatherIndex}
              setSelectedDailyWeatherIndex={setSelectedDailyWeatherIndex}
            />
          </View>
        )}
      </View>
    </ImageBackground>
  );
};

export default ModalView;
