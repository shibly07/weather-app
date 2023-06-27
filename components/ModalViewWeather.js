import { View, TouchableOpacity, ScrollView } from "react-native";
import ModalWidgets from "./ModalWidgets";

import WeatherForecastCard from "./WeatherForecastCard";

const ModalViewWeather = ({
  city,
  forecastSchedule,
  forecastScheduleType,
  isModalExpanded,
  selectedHourlyWeatherIndex,
  setSelectedHourlyWeatherIndex,
  selectedDailyWeatherIndex,
  setSelectedDailyWeatherIndex,
}) => {
  const modalWidgetIndex =
    forecastScheduleType === "hourlyWeather"
      ? selectedHourlyWeatherIndex
      : selectedDailyWeatherIndex;

  const selectIndex = (index) => {
    if (forecastScheduleType === "hourlyWeather") {
      setSelectedHourlyWeatherIndex(index);
    } else if (forecastScheduleType === "dailyWeather") {
      setSelectedDailyWeatherIndex(index);
    }
  };

  return (
    <View>
      {!forecastSchedule ? (
        ""
      ) : (
        <ScrollView>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row px-4 gap-3">
              {forecastSchedule.map((item, index) => (
                <View className="flex-row" key={index}>
                  <TouchableOpacity
                    onPress={() => selectIndex(index)}
                    className={`${
                      forecastScheduleType === "hourlyWeather" &&
                      index === selectedHourlyWeatherIndex
                        ? "bg-[#48319D] rounded-full"
                        : forecastScheduleType === "dailyWeather" &&
                          index === selectedDailyWeatherIndex
                        ? "bg-[#48319D] rounded-full"
                        : ""
                    } `}
                  >
                    <WeatherForecastCard
                      weather={item}
                      index={index}
                      forecastScheduleType={forecastScheduleType}
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </ScrollView>

          {isModalExpanded && (
            <View className="top-2 px-4">
              {
                <ModalWidgets
                  forecastScheduleType={forecastScheduleType}
                  uvIndex={forecastSchedule[modalWidgetIndex].uvIndex}
                  sunrise={
                    forecastScheduleType === "hourlyWeather"
                      ? city.dailyWeather[0].sunrise
                      : city.dailyWeather[modalWidgetIndex].sunrise
                  }
                  sunset={
                    forecastScheduleType === "hourlyWeather"
                      ? city.dailyWeather[0].sunset
                      : city.dailyWeather[modalWidgetIndex].sunset
                  }
                  windSpeed={
                    forecastScheduleType === "hourlyWeather"
                      ? city.hourlyWeather[modalWidgetIndex].windSpeed
                      : city.dailyWeather[modalWidgetIndex].maxWindSpeed
                  }
                  hourlyPrecipAccum={
                    forecastScheduleType === "hourlyWeather"
                      ? city.hourlyWeather[modalWidgetIndex].precipAccum
                      : city.hourlyWeather[0].precipAccum
                  }
                  dailyPrecipAccum={
                    forecastScheduleType === "hourlyWeather"
                      ? city.dailyWeather[0].precipAccum
                      : city.dailyWeather[modalWidgetIndex].precipAccum
                  }
                  actualTemp={
                    forecastScheduleType === "hourlyWeather"
                      ? city.hourlyWeather[
                          modalWidgetIndex
                        ].feelsLikeTemp?.toString()
                      : city.hourlyWeather[0].feelsLikeTemp?.toString()
                  }
                  feelsLikeTemp={
                    forecastScheduleType === "hourlyWeather"
                      ? city.hourlyWeather[
                          modalWidgetIndex
                        ].feelsLikeTemp.toString()
                      : city.dailyWeather[
                          modalWidgetIndex
                        ].maxFeelsLikeTemp.toString()
                  }
                  humidity={
                    forecastScheduleType === "hourlyWeather"
                      ? city.hourlyWeather[modalWidgetIndex].relHumidity
                      : city.dailyWeather[modalWidgetIndex].maxRelHumidity
                  }
                  dewPoint={
                    forecastScheduleType === "hourlyWeather"
                      ? city.hourlyWeather[modalWidgetIndex].dewPoint
                      : city.dailyWeather[modalWidgetIndex].maxDewPoint
                  }
                  visibility={
                    forecastScheduleType === "hourlyWeather"
                      ? city.hourlyWeather[modalWidgetIndex].visibility
                      : ""
                  }
                  minVisibility={
                    forecastScheduleType === "hourlyWeather"
                      ? city.dailyWeather[0].minVisibility
                      : city.dailyWeather[modalWidgetIndex].minVisibility
                  }
                  pressure={
                    city[forecastScheduleType][modalWidgetIndex].pressure
                  }
                />
              }
            </View>
          )}
        </ScrollView>
      )}
    </View>
  );
};

export default ModalViewWeather;
