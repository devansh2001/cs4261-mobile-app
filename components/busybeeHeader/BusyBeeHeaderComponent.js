import React, { useRef } from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Button,
  Input,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Code,
} from "native-base";


const BusyBeeHeaderComponent = () => {
    return (
        <Center px='200' backgroundColor="#fff9a1" padding='2'>
            <Heading>BusyBee</Heading>
        </Center>
    )
}

export default BusyBeeHeaderComponent;