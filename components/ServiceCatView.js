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
  Button,
} from "native-base";
import BottomBar from "./sharedComponents/BottomBar";
import TopBar from "./sharedComponents/TopBar";

import { MaterialIcons } from '@expo/vector-icons';


const Calendar = ({navigation, route}) => {

    return (
        <VStack h="100%" w="100%">
            <Center h="100%" w="100%">
                <TopBar/>
                <Box h="90%" w="100%">
                    <Center>
                        <Heading>Services</Heading>
                    </Center>
                    <HStack h="20%" space="2%" px={2} py={1}>
                        <Button
                            backgroundColor="#FFF9A1"
                            rounded="lg"
                            borderColor="#c4c4c4"
                            borderWidth="1"
                            shadow="2"
                            w="49%"
                            h="100%"
                            onPress={() =>
                                navigation.navigate("Services")
                            }
                        >
                            <Center>
                                <Heading>Cleaning</Heading>
                                <MaterialIcons name="clean-hands" size={50} color="black" />
                            </Center>
                        </Button>
                        <Button
                            backgroundColor="#FFF9A1"
                            rounded="lg"
                            borderColor="#c4c4c4"
                            borderWidth="1"
                            shadow="2"
                            w="49%"
                            h="100%"
                            onPress={() =>
                                navigation.navigate("Services")
                            }
                        >
                            <Center>
                                <Heading>Pet</Heading>
                                <MaterialIcons name="pets" size={50} color="black" />
                            </Center>
                        </Button>
                    </HStack>
                    <HStack h="20%" space="2%" px={2} py={1}>
                        <Button
                            backgroundColor="#FFF9A1"
                            rounded="lg"
                            borderColor="#c4c4c4"
                            borderWidth="1"
                            shadow="2"
                            w="49%"
                            h="100%"
                            onPress={() =>
                                navigation.navigate("Services")
                            }
                        >
                            <Center>
                                <Heading>Plumbing</Heading>
                                <MaterialIcons name="plumbing" size={50} color="black" />
                            </Center>
                        </Button>
                        <Button
                            backgroundColor="#FFF9A1"
                            rounded="lg"
                            borderColor="#c4c4c4"
                            borderWidth="1"
                            shadow="2"
                            w="49%"
                            h="100%"
                            onPress={() =>
                                navigation.navigate("Services")
                            }
                        >
                            <Center>
                                <Heading>Electrical</Heading>
                                <MaterialIcons name="electrical-services" size={50} color="black" />
                            </Center>
                        </Button>
                    </HStack>
                    <HStack h="20%" space="2%" px={2} py={1}>
                        <Button
                            backgroundColor="#FFF9A1"
                            rounded="lg"
                            borderColor="#c4c4c4"
                            borderWidth="1"
                            shadow="2"
                            w="49%"
                            h="100%"
                            onPress={() =>
                                navigation.navigate("Services")
                            }
                        >
                            <Center>
                                <Heading>Assembly</Heading>
                                <MaterialIcons name="build" size={50} color="black" />
                            </Center>
                        </Button>
                        <Button
                            backgroundColor="#FFF9A1"
                            rounded="lg"
                            borderColor="#c4c4c4"
                            borderWidth="1"
                            shadow="2"
                            w="49%"
                            h="100%"
                            onPress={() =>
                                navigation.navigate("Services")
                            }
                        >
                            <Center>
                                <Heading>Technology</Heading>
                                <MaterialIcons name="computer" size={50} color="black" />
                            </Center>
                        </Button>
                    </HStack>
                    <HStack h="20%" space="2%" px={2} py={1}>
                        <Button
                            backgroundColor="#FFF9A1"
                            rounded="lg"
                            borderColor="#c4c4c4"
                            borderWidth="1"
                            shadow="2"
                            w="100%"
                            h="100%"
                            onPress={() =>
                                navigation.navigate("Services")
                            }
                        >
                            <Center>
                                <Heading>Other</Heading>
                                <MaterialIcons name="home-repair-service" size={50} color="black" />
                            </Center>
                        </Button>
                    </HStack>
                </Box>
                <BottomBar/>
            </Center>
        </VStack>
    )
}

export default Calendar;