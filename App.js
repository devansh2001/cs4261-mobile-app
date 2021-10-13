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
import NativeBaseIcon from "./components/NativeBaseIcon";
import LoginView from "./components/loginScreenComponents/LoginView";
import ServicesView from "./components/ServicesView";
import ProvidersView from "./components/ProvidersView";
import ServiceRequestView from "./components/ServiceRequestView";
import ProviderDetailView from "./components/ProviderDetailView";


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
          <Stack.Screen name="Services" component={ServicesView} />
          <Stack.Screen name="Providers" component={ProvidersView} />
          <Stack.Screen name="ServiceRequest" component={ServiceRequestView} />
          <Stack.Screen name="ProviderDetail" component={ProviderDetailView} />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
