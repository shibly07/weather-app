import { Image, ImageBackground, TouchableOpacity, View } from "react-native";

import DetailsButton from "../assets/icon-details.svg";
import LocationButton from "../assets/icon-location.svg";

const FooterNavBar = ({
  navigation,
  modalClose,
  modalOpenAndClose,
  setModalVisible,
}) => {
  const goToPage = (page) => {
    setModalVisible(false);
    modalClose();
    navigation.navigate(page);
  };

  return (
    <ImageBackground
      source={require("../assets/bg-footer.png")}
      style={{ width: 390, height: 88 }}
    >
      <View className="flex-row justify-between top-7 px-8">
        <TouchableOpacity
          className="h-11 w-11 justify-center items-center"
          onPress={() => goToPage("NearbyWeather")}
        >
          <LocationButton width={28} height={28} />
        </TouchableOpacity>
        <TouchableOpacity
          className="h-11 w-11 justify-center items-center"
          onPress={() => modalOpenAndClose()}
        >
          <DetailsButton width={28} height={28} />
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={require("../assets/bg-footer-button.png")}
        style={{
          width: 258,
          height: 100,
          position: "absolute",
          left: "16.92%",
          right: "16.92%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => goToPage("LocationWeather")}>
          <Image
            source={require("../assets/icon-plus.png")}
            className="h-24 w-24"
          />
        </TouchableOpacity>
      </ImageBackground>
    </ImageBackground>
  );
};

export default FooterNavBar;
