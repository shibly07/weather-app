import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

const WindCard = ({ windSpeed }) => {
  return (
    <View className="h-[164px] flex-1 pt-4 px-4 border border-[#FFFFFF] bg-[#2b2556] rounded-3xl">
      <View className="flex-row gap-2 items-center">
        <Feather name="wind" size={24} color="#9CA3AF" />
        <Text className="text-gray-400 font-bold text-base">WIND</Text>
      </View>
      <View className="flex-1 justify-center items-center">
        <Text className="text-white text-3xl">{windSpeed}</Text>
        <Text className="text-white text-xl">km/h</Text>
      </View>
    </View>
  );
};

export default WindCard;
