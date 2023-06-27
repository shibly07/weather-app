import {
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import WeatherInfoCard from "../components/cards/WeatherInfoCard";
import { weatherSymbolPhrase } from "../assets/icons-weather/icons";

const NearbyWeather = ({ navigation }) => {
  const city = useSelector((state) => state.selectedCityWeather);

  const lookup = require("country-code-lookup");

  return (
    <View className="min-h-screen w-full">
      <LinearGradient
        colors={["rgba(28, 27, 51, 1)", "rgba(46, 51, 90, 1)"]}
        className="h-full w-full"
        useAngle={true}
      >
        <SafeAreaView
          style={{
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          }}
        >
          <Navbar navigation={navigation} />
          {!city ? (
            ""
          ) : (
            <View className="px-4 items-center pt-3 pb-28">
              <ScrollView className="" showsVerticalScrollIndicator={false}>
                {city?.nearbyWeather?.map((item, index) => (
                  <View key={index}>
                    <WeatherInfoCard
                      feelsLike={item?.feelsLikeTemp?.toString()}
                      distance={item?.distance}
                      station={item?.station}
                      city={city?.name}
                      country={
                        city?.country?.includes(" ")
                          ? lookup.byCountry(city?.country).internet
                          : city?.country
                      }
                      symbolPhrase={
                        item?.station?.length > 46 &&
                        city?.name?.length +
                          city?.country?.length +
                          weatherSymbolPhrase[city?.hourlyWeather[0]?.symbol]
                            .length >
                          36
                          ? weatherSymbolPhrase[
                              city?.hourlyWeather[0]?.symbol
                            ] ||
                            weatherSymbolPhrase[city?.dailyWeather[0]?.symbol]
                          : weatherSymbolPhrase[item?.symbol]
                      }
                      icon={
                        item?.symbol ||
                        city?.hourlyWeather[0]?.symbol ||
                        city?.dailyWeather[0]?.symbol
                      }
                    />
                  </View>
                ))}
              </ScrollView>
            </View>
          )}
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
};

export default NearbyWeather;
