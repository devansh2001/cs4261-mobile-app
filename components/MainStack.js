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
import LoginView from "./loginScreenComponents/LoginView";
import ServicesView from "./ServicesView";
import ProvidersView from "./ProvidersView";
import ServiceRequestView from "./ServiceRequestView";
import ProviderDetailView from "./ProviderDetailView";
import CategoriesView from "./ServiceCatView";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

const Stack = createNativeStackNavigator();


// extend the theme
export const theme = extendTheme({ config });

export default function MainStack() {
  return (
<Stack.Navigator>
  <Stack.Screen name="Categories" component={CategoriesView} />
  <Stack.Screen name="Services" component={ServicesView} />
  <Stack.Screen name="Providers" component={ProvidersView} />
  <Stack.Screen name="ServiceRequest" component={ServiceRequestView} />
  <Stack.Screen name="ProviderDetail" component={ProviderDetailView} />
</Stack.Navigator>
  );
}
