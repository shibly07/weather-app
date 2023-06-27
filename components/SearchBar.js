import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

import { View, TextInput } from "react-native";

import SearchIcon from "../assets/icon-search.svg";

const SearchBar = ({ handleSearchCities }) => {
  const [cityToAdd, setCityToAdd] = useState("");

  const handleSubmit = () => {
    if (!cityToAdd) return;

    handleSearchCities(cityToAdd);
    setCityToAdd("");
  };

  return (
    <View className="px-6 md:px-10 py-3 md:py-5 shadow-sm shadow-black/25">
      <LinearGradient
        colors={["rgba(48, 44, 91,0.9)", "rgba(48, 44, 91,0.9)"]}
        className="flex-row rounded-lg py-3 items-center px-5"
        useAngle={true}
      >
        <SearchIcon width={16} height={16} />
        <TextInput
          placeholder="Search for a city or airport"
          keyboardType="default"
          placeholderTextColor="rgba(235, 235, 245, 0.6)"
          className="ml-3 font-normal text-lg text-white md:pb-3 flex-1"
          value={cityToAdd}
          onChangeText={setCityToAdd}
          onSubmitEditing={() => handleSubmit(cityToAdd)}
        />
      </LinearGradient>
    </View>
  );
};

export default SearchBar;
