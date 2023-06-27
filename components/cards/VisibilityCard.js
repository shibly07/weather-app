import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const VisibilityCard = ({ visibility, minVisibility }) => {
  const formattedMinimumVis = Math.ceil(minVisibility / 1000);
  const formattedvisibility = visibility
    ? Math.ceil(visibility / 1000)
    : formattedMinimumVis;

  return (
    <View className="h-[164px] flex-1 pt-4 px-4 border border-[#FFFFFF] bg-[#2b2556] rounded-3xl">
      <View className="flex-row gap-2 items-center">
        <Ionicons name="eye" size={24} color="#9CA3AF" />
        <Text className="text-gray-400 font-bold text-base">VISIBILITY</Text>
      </View>
      <View className="pt-5 pb-4 flex-col flex-1 justify-between">
        <Text className="text-white text-4xl">{formattedvisibility} km</Text>
        <Text className="text-white text-xs">
          Min Visibility: {formattedMinimumVis} km
        </Text>
      </View>
    </View>
  );
};

export default VisibilityCard;
