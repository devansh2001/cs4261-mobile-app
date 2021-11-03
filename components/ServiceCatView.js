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
import { useNavigation } from "@react-navigation/native";


const Calendar = (props) => {

    const navigation = useNavigation()
    return (
        <VStack h="100%" w="100%">
            <Center h="100%" w="100%">
                <TopBar/>
                <Box h="95%" w="100%">
                    <Center>
                        <Heading>Services</Heading>
                    </Center>
                    <HStack h="18%" space="2%" px={2} py={1}>
                        <Button
                            backgroundColor="#FFF9A1"
                            rounded="lg"
                            borderColor="#c4c4c4"
                            borderWidth="1"
                            shadow="2"
                            w="49%"
                            h="100%"
                            onPress={() =>
                                navigation.navigate("Services", {category:"CLEANING", userId: props.route.params.userId})
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
                                navigation.navigate("Services", {category:"PET", userId: props.route.params.userId})
                            }
                        >
                            <Center>
                                <Heading>Pet</Heading>
                                <MaterialIcons name="pets" size={50} color="black" />
                            </Center>
                        </Button>
                    </HStack>
                    <HStack h="18%" space="2%" px={2} py={1}>
                        <Button
                            backgroundColor="#FFF9A1"
                            rounded="lg"
                            borderColor="#c4c4c4"
                            borderWidth="1"
                            shadow="2"
                            w="49%"
                            h="100%"
                            onPress={() =>
                                navigation.navigate("Services", {category:"PLUMBING", userId: props.route.params.userId})
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
                                navigation.navigate("Services",{category:"ELECTRICAL", userId: props.route.params.userId})
                            }
                        >
                            <Center>
                                <Heading>Electrical</Heading>
                                <MaterialIcons name="electrical-services" size={50} color="black" />
                            </Center>
                        </Button>
                    </HStack>
                    <HStack h="18%" space="2%" px={2} py={1}>
                        <Button
                            backgroundColor="#FFF9A1"
                            rounded="lg"
                            borderColor="#c4c4c4"
                            borderWidth="1"
                            shadow="2"
                            w="49%"
                            h="100%"
                            onPress={() =>
                                navigation.navigate("Services",{category:"BUILD", userId: props.route.params.userId})
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
                                navigation.navigate("Services",{category:"COMPUTER", userId: props.route.params.userId})
                            }
                        >
                            <Center>
                                <Heading>Technology</Heading>
                                <MaterialIcons name="computer" size={50} color="black" />
                            </Center>
                        </Button>
                    </HStack>
                    <HStack h="18%" space="2%" px={2} py={1}>
                        <Button
                            backgroundColor="#FFF9A1"
                            rounded="lg"
                            borderColor="#c4c4c4"
                            borderWidth="1"
                            shadow="2"
                            w="49%"
                            h="100%"
                            onPress={() =>
                                navigation.navigate("Services", {category:"LAWN", userId: props.route.params.userId})
                            }
                        >
                            <Center>
                                <Heading>Landscaping</Heading>
                                <MaterialIcons name="grass" size={50} color="black" />
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
                                navigation.navigate("Services",{category:"HOME", userId: props.route.params.userId})
                            }
                        >
                            <Center>
                                <Heading>Home</Heading>
                                <MaterialIcons name="home-work" size={50} color="black" />
                            </Center>
                        </Button>
                    </HStack>
                    <HStack h="18%" space="2%" px={2} py={1}>
                        <Button
                            backgroundColor="#FFF9A1"
                            rounded="lg"
                            borderColor="#c4c4c4"
                            borderWidth="1"
                            shadow="2"
                            w="49%"
                            h="100%"
                            onPress={() =>
                                navigation.navigate("Services",{category:"OTHER", userId: props.route.params.userId})
                            }
                        >
                            <Center>
                                <Heading>Other</Heading>
                                <MaterialIcons name="home-repair-service" size={50} color="black" />
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
                                navigation.navigate("ServiceCreateNew", {userId: props.route.params.userId})
                            }
                        >
                            <Center>
                                <Heading>Create New Service</Heading>
                                <MaterialIcons name="add" size={50} color="black" />
                            </Center>
                        </Button>
                    </HStack>
                </Box>
            </Center>
        </VStack>
    )
}

export default Calendar;