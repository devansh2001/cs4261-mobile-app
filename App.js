//https://reactnative.dev/docs/navigation, https://reactnavigation.org/docs/tab-based-navigation

import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Code
} from "native-base";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import NativeBaseIcon from "./components/NativeBaseIcon";
import LoginView from "./components/loginScreenComponents/LoginView";
import SignUpView from "./components/loginScreenComponents/SignUp";
import BusyBeeHeaderComponent from "./components/busybeeHeader/BusyBeeHeaderComponent";
import TabBarView from "./components/TabBarNavigate"

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

const Stack = createNativeStackNavigator();



// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginView} />
            <Stack.Screen name="SignUp" component={SignUpView} />
            <Stack.Screen name="TabBar" component={TabBarView} />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
