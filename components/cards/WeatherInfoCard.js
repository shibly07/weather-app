import { Image, Text, View, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import WeatherCardBG from "../../assets/bg-weather-card.svg";
import { weatherIcon } from "../../assets/icons-weather/icons";

const WeatherInfoCard = ({
  id,
  handleDeleteCity,
  isEditing,
  feelsLike,
  maxTemp,
  minTemp,
  city,
  country,
  symbolPhrase,
  distance,
  station,
  icon,
}) => {
  return (
    <View>
      {isEditing && (
        <Pressable
          className="absolute right-4 top-4 z-10"
          onPress={() => handleDeleteCity(id)}
        >
          <MaterialIcons name="delete" size={45} color="red" />
        </Pressable>
      )}
      <View className={station ? "scale-y-110" : ""}>
        <WeatherCardBG width={342} height={250} />
      </View>
      <View className={`absolute left-48 ${station ? "top-3" : "-top-3"}`}>
        <Image source={weatherIcon[icon]} style={{ width: 140, height: 140 }} />
      </View>
      <View className="absolute p-5 w-full">
        <View className="mt-6 h-full">
          <Text className="text-white font-normal text-[64px]">{`${feelsLike}°C`}</Text>
          <View
            className={
              station?.length > 46 ||
              city?.length + country?.length + symbolPhrase?.length > 38
                ? "mt-2"
                : "flex-1 justify-end"
            }
          >
            <Text className="text-gray-400">
              {maxTemp && minTemp
                ? `H: ${maxTemp}°C L: ${minTemp}°C`
                : `Distance: ${distance}`}
            </Text>
            {station && <Text className="text-gray-300">{station}</Text>}
            <View className="flex-row justify-center items-center">
              <Text className="text-white flex-1">
                {city}, {country}
              </Text>
              <Text className="text-white capitalize text-right flex-1">
                {symbolPhrase}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default WeatherInfoCard;
