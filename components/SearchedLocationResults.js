import { View, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

const lookup = require("country-code-lookup");

const SearchedLocationResults = ({
  searchedCityResults,
  setSearchedCityResults,
  handleAddCities,
}) => {
  return (
    <View className="z-10 items-center">
      <View className="absolute pt-2 pb-6 px-6 items-center bg-black gap-y-2">
        <TouchableOpacity
          className="absolute right-1 -top-2"
          onPress={() => setSearchedCityResults([])}
        >
          <Entypo name="cross" size={34} color="red" />
        </TouchableOpacity>
        {searchedCityResults.map((item) => (
          <TouchableOpacity
            key={item?.id}
            className="py-1 px-2"
            onPress={() => handleAddCities(item)}
          >
            <Text className="text-white font-semibold text-base">
              {`${item?.name}, ${item?.adminArea}, ${
                lookup.byCountry(item?.country).internet
              }`}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default SearchedLocationResults;
