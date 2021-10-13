// Used this documentation: https://docs.nativebase.io/input, https://docs.nativebase.io/image
//https://reactnative.dev/docs/height-and-width

import React, { useRef } from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Input,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Code,
  Image,
  Container,
  Box,
} from "native-base";
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



const BottomBar = () => {

    return (
        <Box backgroundColor="#FFF9A1" w="100%" h="5%">
            <HStack w="100%">
                <Center w="25%">
                    <SimpleLineIcons name="home" size={24} color="black" />
                </Center>
                <Center w="25%">
                    <Feather name="message-circle" size={24} color="black" />
                </Center>
                <Center w="25%">
                    <MaterialCommunityIcons name="calendar-month-outline" size={24} color="black" />
                </Center>
                <Center w="25%">
                    <Ionicons name="ios-settings-outline" size={24} color="black" />
                </Center>
            </HStack>
        </Box>
    )
}

export default BottomBar;