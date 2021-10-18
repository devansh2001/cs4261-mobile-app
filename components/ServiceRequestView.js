// Used this documentation: https://docs.nativebase.io/input, https://docs.nativebase.io/image,
// https://docs.nativebase.io/box

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
  FlatList,
} from "native-base";
import BottomBar from "./sharedComponents/BottomBar";
import TopBar from "./sharedComponents/TopBar";


const ServiceRequestView = ({navigation, route}) => {

    return (
        <VStack h="100%" w="100%">
            <Center h="100%" w="100%">
                <TopBar/>
                <VStack h="90%" w="100%" py={2} px={2} space={3}>
                    <Heading>Service Request</Heading>
                    <Text>Time Estimate</Text>
                    <Input
                        placeholder="1 hour"
                        w="100%"
                    />
                    <Text>Payment Offer</Text>
                    <Input
                        placeholder="$20"
                        w="100%"
                    />
                    <Text>Task Details</Text>
                    <Input
                        placeholder="Walk dogs"
                        w="100%"
                        h="20%" //FIX THIS, TEXT DOES NOT WRAP
                    />
                </VStack>
                <BottomBar/>
            </Center>
        </VStack>
    )
}

export default ServiceRequestView;