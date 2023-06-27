import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

const RainfallCard = ({ hourlyPrecipAccum, dailyPrecipAccum }) => {
  return (
    <View className="h-[164px] flex-1 pt-4 px-4 border border-[#FFFFFF] bg-[#2b2556] rounded-3xl">
      <View className="flex-row gap-2 items-center">
        <Feather name="droplet" size={24} color="#9CA3AF" />
        <Text className="text-gray-400 font-bold text-base">RAINFALL</Text>
      </View>
      <View className="flex-col flex-1 justify-between pt-2 pb-4">
        <View>
          <Text className="text-white text-2xl">{hourlyPrecipAccum} mm</Text>
          <Text className="text-white text-lg">in last hour</Text>
        </View>
        <View>
          <Text className="text-white text-xs">
            {dailyPrecipAccum} mm expected in next 24h.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RainfallCard;
