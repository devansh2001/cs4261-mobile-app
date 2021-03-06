// Used this documentation: https://docs.nativebase.io/input, https://docs.nativebase.io/image

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
  StatusBar,
  IconButton,
  Icon,
} from "native-base";
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';




const TopBar = () => {
    //var color = "#fff459"
    //var color = "#fff9a1"
    var color = "#fff785"

    return (
    <Box backgroundColor={color} w="100%" h="10%">
        <StatusBar backgroundColor="#FFF9A1" barStyle="dark-content" />
        <Center safeAreaTop backgroundColor={color} h="100%" width={['100%']}>
            <Text color="black" fontSize="20" fontWeight='bold'>BusyBee</Text>
        </Center>
    </Box>
    )
}

export default TopBar;