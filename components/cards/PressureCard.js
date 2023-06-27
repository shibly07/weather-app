import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const PressureCard = ({ pressure }) => {
  return (
    <View className="h-[164px] flex-1 pt-4 px-4 border border-[#FFFFFF] bg-[#2b2556] rounded-3xl">
      <View className="flex-row gap-2 items-center">
        <FontAwesome name="tachometer" size={24} color="#9CA3AF" />
        <Text className="text-gray-400 font-bold text-base">PRESSURE</Text>
      </View>

      <Text className="pt-5 text-white text-4xl">{pressure} mbar</Text>
    </View>
  );
};

export default PressureCard;
