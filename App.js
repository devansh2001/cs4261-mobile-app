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

import NativeBaseIcon from "./components/NativeBaseIcon";
import LoginView from "./components/loginScreenComponents/LoginView";
import SignUpView from "./components/loginScreenComponents/SignUp";
import BusyBeeHeaderComponent from "./components/busybeeHeader/BusyBeeHeaderComponent";
import { Router } from "react-native-router-flux";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider>
      <Center
        px={4}
        flex={1}
      >
        {/* https://github.com/aksonov/react-native-router-flux */}
        {/* <Router>
          <BusyBeeHeaderComponent/>
          <Stack key="root">
            <Scene key="login" component={LoginView} title="Login" />
            <Scene key="signup" component={SignUpView} title="SignUp" />
          </Stack>
        </Router> */}
        {/* https://reactnative.dev/docs/navigation */}

        {/* <VStack space={5} alignItems="center">
          <NativeBaseIcon />
          <Heading size="lg">Welcome to NativeBase</Heading>
          <HStack space={2} alignItems="center">
            <Text>Edit</Text>
            <Code>App.js</Code>
            <Text>and save to reload.</Text>
          </HStack>
          <Link href="https://docs.nativebase.io" isExternal>
            <Text color="primary.500" underline fontSize={"xl"}>
              Learn NativeBase
            </Text>
          </Link>
        </VStack> */}
      </Center>
    </NativeBaseProvider>
  );
}
