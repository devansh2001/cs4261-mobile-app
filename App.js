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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainStack from "./components/MainStack"
import SettingsStack from "./components/SettingsStack"
import CalendarStack from "./components/CalendarStack"

import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


import NativeBaseIcon from "./components/NativeBaseIcon";
import LoginView from "./components/loginScreenComponents/LoginView";
import SignUpView from "./components/loginScreenComponents/SignUp";
import BusyBeeHeaderComponent from "./components/busybeeHeader/BusyBeeHeaderComponent";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

const Tab = createBottomTabNavigator();



// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === 'Home') {
                return <SimpleLineIcons name="home" size={size} color={color} />
              } else if (route.name === 'Calendar') {
                return <MaterialCommunityIcons name="calendar-month-outline" size={size} color={color} />
              } else if (route.name === 'Settings') {
                return <Ionicons name="ios-settings-outline" size={size} color={color} />
              }

            },
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Home" component={MainStack} />
          <Tab.Screen name="Calendar" component={CalendarStack} />
          <Tab.Screen name="Settings" component={SettingsStack} />
        </Tab.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
