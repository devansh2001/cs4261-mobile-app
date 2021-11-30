// Used this documentation: https://docs.nativebase.io/input, https://docs.nativebase.io/image,
// https://docs.nativebase.io/box

import React, { useRef, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/core";
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
    

    // https://stackoverflow.com/a/70110510
    useFocusEffect(
        useCallback(() => {
            const startTime = Date.now();
    
          return async () => {
            const endTime = Date.now();

            const timeTaken = endTime - startTime
            
            // send time taken to server
            const headers = new Headers();
            headers.append('Access-Control-Allow-Origin', 'https://localhost')
            headers.append('Content-Type', 'application/json')

            const body = {
                'screen': 'ServiceCatView',
                'timeTaken': timeTaken
            };
            
            await fetch('https://cs4261-usage-metrics-service.herokuapp.com/time-on-screen', {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(body)
            })
            .then(data => data.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
            };
        }, [])
    );
    
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
                                <Heading size="md">Cleaning</Heading>
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
                                <Heading size="md">Pet</Heading>
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
                                <Heading size="md">Plumbing</Heading>
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
                                <Heading size="md">Electrical</Heading>
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
                                <Heading size="md">Assembly</Heading>
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
                                <Heading size="md">Technology</Heading>
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
                                <Heading size="md">Landscaping</Heading>
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
                                <Heading size="md">Home</Heading>
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
                            w="100%"
                            h="100%"
                            onPress={() =>
                                navigation.navigate("Services",{category:"OTHER", userId: props.route.params.userId})
                            }
                        >
                            <Center>
                                <Heading size="md">Other</Heading>
                                <MaterialIcons name="home-repair-service" size={50} color="black" />
                            </Center>
                        </Button>
                    </HStack>
                </Box>
            </Center>
        </VStack>
    )
}

export default Calendar;