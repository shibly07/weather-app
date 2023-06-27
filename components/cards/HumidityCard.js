import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const HumidityCard = ({ forecastScheduleType, humidity, dewPoint }) => {
  return (
    <View className="h-[164px] flex-1 pt-4 px-4 border border-[#FFFFFF] bg-[#2b2556] rounded-3xl">
      <View className="flex-row gap-2 items-center">
        <MaterialIcons name="waves" size={24} color="#9CA3AF" />
        <Text className="text-gray-400 font-bold text-base">HUMIDITY</Text>
      </View>
      <View className="pt-5 pb-4 flex-col flex-1 justify-between">
        <Text className="text-white text-4xl">{humidity}%</Text>
        <Text className="text-white text-xs">
          {forecastScheduleType === "hourlyWeather"
            ? `The dew point is ${dewPoint} right now.`
            : `The dew point is ${dewPoint} today.`}
        </Text>
      </View>
    </View>
  );
};

export default HumidityCard;
