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

export default function MainStack(props) {
  return (
<Stack.Navigator
    screenOptions={{
        headerShown: false
    }}
>
  <Stack.Screen name="Categories" component={CategoriesView} initialParams={{ userId: props.route.params.userId }} />
  <Stack.Screen name="Services" component={ServicesView} initialParams={{ userId: props.route.params.userId }} />
  <Stack.Screen name="Providers" component={ProvidersView} initialParams={{ userId: props.route.params.userId }} />
  <Stack.Screen name="ServiceRequest" component={ServiceRequestView} initialParams={{ userId: props.route.params.userId }} />
  <Stack.Screen name="ProviderDetail" component={ProviderDetailView} initialParams={{ userId: props.route.params.userId }} />
</Stack.Navigator>
  );
}
