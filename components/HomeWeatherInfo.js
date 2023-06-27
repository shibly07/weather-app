import { View, Text } from "react-native";

const WeatherInfo = ({ city, isModalExpanded }) => {
  return (
    <View className="flex-col gap-3 mb-5 sm:mb-20">
      {!city.id ? (
        <Text className="text-white text-center font-light text-5xl top-12">
          Please Search a City to View Weather
        </Text>
      ) : !isModalExpanded ? (
        <View>
          <Text className="text-white text-center font-normal text-4xl">
            {city?.name}
          </Text>
          <Text className="text-white text-center font-extralight text-8xl">
            {city?.hourlyWeather[0]?.feelsLikeTemp}°C
          </Text>
          <Text className="text-gray-400 text-center font-semibold text-xl capitalize">
            {city?.hourlyWeather[0]?.symbolPhrase}
          </Text>
          <View className="flex-row justify-center">
            <Text className="text-white text-center font-semibold text-xl mr-4">
              H: {city?.dailyWeather[0]?.maxTemp}°C
            </Text>
            <Text className="text-white text-center font-semibold text-xl">
              L: {city?.dailyWeather[0]?.minTemp}°C
            </Text>
          </View>
        </View>
      ) : (
        <View className="flex-col justify-center items-center">
          <Text className="text-white text-center font-normal text-4xl">
            {city?.name}
          </Text>
          <Text className="text-gray-400 text-center font-semibold text-xl capitalize">
            {city?.hourlyWeather[0]?.feelsLikeTemp}°C |{" "}
            {city?.hourlyWeather[0]?.symbolPhrase}
          </Text>
        </View>
      )}
    </View>
  );
};

export default WeatherInfo;
