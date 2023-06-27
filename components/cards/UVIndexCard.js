import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

const UVIndexCard = ({ uvIndex }) => {
  const uvIndexCondition = (uvIndex) => {
    if (uvIndex >= 0 && uvIndex <= 2) return "Low";
    if (uvIndex >= 3 && uvIndex <= 5) return "Moderate";
    if (uvIndex >= 6 && uvIndex <= 7) return "High";
    if (uvIndex >= 8) return "Very High";
  };
  return (
    <View className="h-[164px] flex-1 pt-4 px-4 border border-[#FFFFFF] bg-[#2b2556] rounded-3xl">
      <View className="flex-row gap-2 items-center">
        <Feather name="sun" size={24} color="#9CA3AF" />
        <Text className="text-gray-400 font-bold text-base">UV INDEX</Text>
      </View>
      <View className="pt-5 flex-col gap-3">
        <Text className="text-white text-4xl">{uvIndex}</Text>
        <Text className="text-white text-2xl">{uvIndexCondition(uvIndex)}</Text>
      </View>
    </View>
  );
};

export default UVIndexCard;
