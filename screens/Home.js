import { View, ImageBackground, Image } from "react-native";

import { useState } from "react";
import { useSelector } from "react-redux";

import HomeWeatherInfo from "../components/HomeWeatherInfo";
import ModalView from "../components/ModalView";
import FooterNavBar from "../components/FooterNavBar";

import LocationWeather from "../screens/LocationWeather";

const Home = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [forecastScheduleType, setForecastScheduleType] =
    useState("hourlyWeather");
  const [isModalExpanded, setIsModalExpanded] = useState(false);
  const [selectedHourlyWeatherIndex, setSelectedHourlyWeatherIndex] =
    useState(0);
  const [selectedDailyWeatherIndex, setSelectedDailyWeatherIndex] = useState(0);

  const city = useSelector((state) => state.selectedCityWeather);

  const modalClose = () => {
    setForecastScheduleType("hourlyWeather");
    setIsModalExpanded(false);
    setSelectedHourlyWeatherIndex(0);
    setSelectedDailyWeatherIndex(0);
  };

  const modalOpenAndClose = () => {
    setModalVisible(!modalVisible);

    if (!modalVisible) {
      modalClose();
    }
  };

  return (
    <View className="min-h-screen w-full">
      <ImageBackground
        source={require("../assets/bg-image.png")}
        className="h-full w-full"
      >
        <View className=" mt-20 sm:mt-40 flex-col justify-center items-center">
          <HomeWeatherInfo city={city} isModalExpanded={isModalExpanded} />

          <Image
            source={require("../assets/bg-house.png")}
            className="h-[24.375rem] w-[24.375rem] absolute top-52"
          />
        </View>

        <View className="absolute left-0 right-0 bottom-0 justify-center items-center z-10">
          <FooterNavBar
            navigation={navigation}
            modalClose={modalClose}
            modalOpenAndClose={modalOpenAndClose}
            setModalVisible={setModalVisible}
          />
        </View>

        <View
          className={`absolute left-0 right-0 bottom-0 justify-center items-center z-0 ${
            modalVisible ? "block" : "hidden"
          }`}
        >
          <ModalView
            city={city}
            forecastScheduleType={forecastScheduleType}
            setForecastScheduleType={setForecastScheduleType}
            isModalExpanded={isModalExpanded}
            setIsModalExpanded={setIsModalExpanded}
            selectedHourlyWeatherIndex={selectedHourlyWeatherIndex}
            setSelectedHourlyWeatherIndex={setSelectedHourlyWeatherIndex}
            selectedDailyWeatherIndex={selectedDailyWeatherIndex}
            setSelectedDailyWeatherIndex={setSelectedDailyWeatherIndex}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;
