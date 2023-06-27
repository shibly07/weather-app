import { View, Text, Image } from "react-native";

import WeatherForecastBG from "../assets/bg-weather-forecast-inactive.svg";
import { weatherIcon } from "../assets/icons-weather/icons";

const WeatherForecastModal = ({ weather, index, forecastScheduleType }) => {
  const formatTime = (timeString, index) => {
    if (index === 0) return "Now";

    const findIndex = timeString.indexOf("T");
    const hour = parseInt(timeString.slice(findIndex + 1, findIndex + 3));

    return `${hour % 12 || 12} ${hour < 12 ? "AM" : "PM"}`;
  };

  const formatDay = (dateString, index) => {
    if (index === 0) return "Today";

    const day = new Date(dateString).toDateString().split(" ")[0];

    return day;
  };

  const hourOrDay = weather?.time
    ? formatTime(weather?.time, index)
    : formatDay(weather?.date, index);

  return (
    <View className="h-[146px] w-[60px]">
      <WeatherForecastBG />
      <View className="absolute left-0 right-0 top-0 bottom-0 justify-center items-center justify-between py-4">
        <Text className="text-white text-center font-semibold text-base">
          {hourOrDay}
        </Text>
        <View>
          <Image
            source={weatherIcon[weather?.symbol]}
            style={{ width: 35, height: 35 }}
          />
        </View>
        <Text className="text-white text-center font-normal text-xl">
          {weather?.feelsLikeTemp?.toString() ||
            weather?.maxFeelsLikeTemp?.toString()}
          °
        </Text>
      </View>
    </View>
  );
};

export default WeatherForecastModal;
