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
import MainStack from "./MainStack"
import SettingsStack from "./SettingsStack"
import CalendarStack from "./CalendarStack"

import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

const Tab = createBottomTabNavigator();



// extend the theme
export const theme = extendTheme({ config });

export default function TabBarNavigate() {
  return (
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
  );
}
