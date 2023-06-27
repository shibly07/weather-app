import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const FeelsLike = ({ actualTemp, feelsLikeTemp }) => {
  const tempDifference = (actualTemp, feelsLikeTemp) => {
    const differenceInTemp = feelsLikeTemp - actualTemp;
    if (differenceInTemp >= -5 || differenceInTemp <= 5)
      return "Similar to the actual temperature.";
    else if (differenceInTemp < -5) return "Lower than the actual temperature.";
    else if (differenceInTemp > 5) return "Higher than the actual temperature.";
  };

  return (
    <View className="h-[164px] flex-1 pt-4 px-4 border border-[#FFFFFF] bg-[#2b2556] rounded-3xl">
      <View className="flex-row gap-2 items-center">
        <FontAwesome
          name="thermometer-three-quarters"
          size={24}
          color="#9CA3AF"
        />
        <Text className="text-gray-400 font-bold text-base">FEELS LIKE</Text>
      </View>
      <View className="pt-5 pb-4 flex-col flex-1 justify-between">
        <Text className="text-white text-4xl">{actualTemp}</Text>
        <Text className="text-white text-xs">
          {tempDifference(actualTemp, feelsLikeTemp)}
        </Text>
      </View>
    </View>
  );
};

export default FeelsLike;
