import { View, ScrollView } from "react-native";

import {
  UVIndexCard,
  SunriseCard,
  WindCard,
  RainfallCard,
  FeelsLike,
  HumidityCard,
  VisibilityCard,
  PressureCard,
} from "./cards";

const ModalWidgets = ({
  forecastScheduleType,
  uvIndex,
  sunrise,
  sunset,
  windSpeed,
  hourlyPrecipAccum,
  dailyPrecipAccum,
  actualTemp,
  feelsLikeTemp,
  humidity,
  dewPoint,
  visibility,
  minVisibility,
  pressure,
}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className="top-6 flex-col gap-y-4 pb-60">
        <View className="flex-row">
          <UVIndexCard uvIndex={uvIndex} />
          <View className="w-4"></View>
          <SunriseCard sunrise={sunrise} sunset={sunset} />
        </View>
        <View className="flex-row">
          <FeelsLike actualTemp={actualTemp} feelsLikeTemp={feelsLikeTemp} />
          <View className="w-4"></View>
          <RainfallCard
            hourlyPrecipAccum={hourlyPrecipAccum}
            dailyPrecipAccum={dailyPrecipAccum}
          />
        </View>
        <View className="flex-row">
          <WindCard windSpeed={windSpeed} />
          <View className="w-4"></View>
          <HumidityCard
            forecastScheduleType={forecastScheduleType}
            humidity={humidity}
            dewPoint={dewPoint}
          />
        </View>

        <View className="flex-row">
          <VisibilityCard
            visibility={visibility}
            minVisibility={minVisibility}
          />
          <View className="w-4"></View>
          <PressureCard pressure={pressure} />
        </View>
      </View>
    </ScrollView>
  );
};

export default ModalWidgets;
