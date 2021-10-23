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
  const [userId, setUserId] = React.useState('');  

  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator>
          {/* https://reactnavigation.org/docs/screen-options/ */}
            <Stack.Screen name="Login" component={LoginView} params={{userId: userId, setUserId: setUserId}} /> 
            {/* initialParams={{ userId: userId, changeUser: (id) => setUserId(id) }} */}
            <Stack.Screen name="SignUp" component={SignUpView} initialParams={{userId: userId, setUserId: (id) => setUserId(id)}} />
            <Stack.Screen name="TabBar" component={TabBarView} initialParams={{ userId: userId }} />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
