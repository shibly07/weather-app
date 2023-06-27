import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

const SunriseCard = ({ sunrise, sunset }) => {
  const formatTime = (timeString) => {
    const getHourAndMinute = timeString.split(":");
    const hour = parseInt(getHourAndMinute[0]);
    const minute = parseInt(getHourAndMinute[1]);

    return `${hour % 12 || 12}:${minute} ${hour < 12 ? "AM" : "PM"}`;
  };

  return (
    <View className="h-[164px] flex-1 pt-4 px-4 border border-[#FFFFFF] bg-[#2b2556] rounded-3xl">
      <View className="flex-row gap-2 items-center">
        <Feather name="sunrise" size={24} color="#9CA3AF" />
        <Text className="text-gray-400 font-bold text-base">SUNRISE</Text>
      </View>
      <View className="pt-5 pb-4 flex-col flex-1 justify-between">
        <Text className="text-white text-3xl">{formatTime(sunrise)}</Text>
        <Text className="text-white text-xs">Sunset: {formatTime(sunset)}</Text>
      </View>
    </View>
  );
};

export default SunriseCard;
