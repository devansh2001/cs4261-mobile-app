//https://reactnative.dev/docs/navigation

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
  Code,
} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NativeBaseIcon from "./NativeBaseIcon";
import CalendarView from "./CalendarView"
import ProviderDetailView from "./ProviderDetailView"

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

const Stack = createNativeStackNavigator();


// extend the theme
export const theme = extendTheme({ config });

export default function CalendarStack(props) {
  console.log(props)
  return (
<Stack.Navigator>
  <Stack.Screen name="Calendar" component={CalendarView} initialParams={{userId: props.route.params.userId}} />
  <Stack.Screen name="ProviderDetail" component={ProviderDetailView} initialParams={{userId: props.route.params.userId}} />
</Stack.Navigator>
  );
}
