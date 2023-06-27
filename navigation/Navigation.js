import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { store } from "../redux/store";
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();

import Home from "../screens/Home";
import LocationWeather from "../screens/LocationWeather";
import NearbyWeather from "../screens/NearbyWeather";

import React from "react";

const Navigation = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="light" />
        <Stack.Navigator
        initialRouteName="LocationWeather"
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LocationWeather"
            component={LocationWeather}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NearbyWeather"
            component={NearbyWeather}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Navigation;
