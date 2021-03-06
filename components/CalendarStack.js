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
import CalendarDetailView from "./CalendarDetailView"
import RequestStatusView from "./RequestStatusView"


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
<Stack.Navigator
    screenOptions={{
        headerShown: false
    }}
>
  <Stack.Screen name="CalendarView" component={CalendarView} initialParams={{userId: props.route.params.userId}} />
  <Stack.Screen name="CalendarDetail" component={CalendarDetailView} initialParams={{userId: props.route.params.userId}} />
  <Stack.Screen name="RequestStatus" component={RequestStatusView} initialParams={{userId: props.route.params.userId}} />

</Stack.Navigator>
  );
}
