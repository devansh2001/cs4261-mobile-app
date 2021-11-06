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
import SettingsView from "./SettingsView"
import PaymentHistoryView from "./PaymentHistoryView"
import ProviderRequests from "./ProviderRequests";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

const Stack = createNativeStackNavigator();


// extend the theme
export const theme = extendTheme({ config });

export default function SettingsStack(props) {
  return (
<Stack.Navigator
    screenOptions={{
        headerShown: false
    }}
>
  <Stack.Screen name="SettingsView" component={SettingsView} initialParams={{userId: props.route.params.userId}} />
  <Stack.Screen name="RequestsView" component={ProviderRequests} initialParams={{userId: props.route.params.userId}} />
  <Stack.Screen name="PaymentHistory" component={PaymentHistoryView} initialParams={{userId: props.route.params.userId}} />
</Stack.Navigator>
  );
}
