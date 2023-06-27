import { Text, TouchableOpacity, View } from "react-native";

import ChevronLeft from "../assets/icon-chevron-left.svg";
import RightIcon from "../assets/icon-right.svg";

const Navbar = ({ navigation, visibleOption, setIsEditing }) => {
  return (
    <View className="flex-row justify-between flex">
      <TouchableOpacity
        className="flex-row gap-x-2 items-center py-[9px] flex-1 pl-6 md:pl-10"
        onPress={() => navigation.navigate("Home")}
      >
        <ChevronLeft width={18} height={24} />
        <Text className="font-normal text-[28px] text-white">Weather</Text>
      </TouchableOpacity>
      {visibleOption && (
        <TouchableOpacity
          className="flex-1 items-end justify-center pr-6 md:pr-10"
          onPress={() => setIsEditing((prev) => !prev)}
        >
          <RightIcon width={33} height={34} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Navbar;
