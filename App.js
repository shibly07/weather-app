import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { store } from "./redux/store";
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();

import Home from "./screens/Home";
import LocationWeather from "./screens/LocationWeather";
import NearbyWeather from "./screens/NearbyWeather";
import Navigation from "./navigation/Navigation";

export default function App() {
  return <Navigation />;
}
