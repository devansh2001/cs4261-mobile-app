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
  Button,
} from "native-base";
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



const BottomBar = ({navigation}) => {
    return (
        <Box backgroundColor="#FFF9A1" w="100%" h="5%">
            <HStack w="100%">
                <Button
                    w="25%"
                    h="100%"
                    bg="#FFF9A1"
                    onPress={() =>
                        navigation.navigate("Providers")
                    }
                >
                    <SimpleLineIcons name="home" size={24} color="black" />
                </Button>
                <Button
                    w="25%"
                    h="100%"
                    bg="#FFF9A1"
                    onPress={() =>
                        navigation.navigate("Messages")
                    }
                >
                    <Feather name="message-circle" size={24} color="black" />
                </Button>
                <Button
                    w="25%"
                    h="100%"
                    bg="#FFF9A1"
                    onPress={() =>
                        navigation.navigate("Calendar")
                    }
                >
                    <MaterialCommunityIcons name="calendar-month-outline" size={24} color="black" />
                </Button>
                <Button
                    w="25%"
                    h="100%"
                    bg="#FFF9A1"
                    onPress={() =>
                        navigation.navigate("Settings")
                    }
                >
                    <Ionicons name="ios-settings-outline" size={24} color="black" />
                </Button>
            </HStack>
        </Box>
    )
}

export default BottomBar;