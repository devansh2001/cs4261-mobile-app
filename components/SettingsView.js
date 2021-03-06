// Used this documentation: https://docs.nativebase.io/input, https://docs.nativebase.io/image,
// https://docs.nativebase.io/box

import React, { useRef, useState, useEffect, useCallback } from "react";
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
  FlatList,
  Divider,
  Button,
} from "native-base";
import TopBar from "./sharedComponents/TopBar";
import { useNavigation } from "@react-navigation/native";
import PointsInfo from "./PointsInfo";


const SettingsView = (props) => {
    // https://stackoverflow.com/a/70110510
    var color = "#fff785"
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
                'screen': 'SettingsView',
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
const navigation = useNavigation()
const [data, setData] = useState([]);
const getData = async () => {
    let url = 'https://cs4261-users-service.herokuapp.com/get-user/';
     try {
      const response = await fetch(url + props.route.params.userId);
      const json = await response.json();
      setData(json.user);
    } catch (error) {
      console.error(error);
    }
  }
 useEffect(() => {
     getData();
 }, []);

    if(data.user_type=="consumer"){
    return (
        <VStack h="100%" w="100%">
            <Center h="100%" w="100%">
                <TopBar/>
                <Box h="95%" w="100%">
                    <Center>
                        <Heading>Settings</Heading>
                    </Center>
                    <VStack>
                        <Text>Rewards</Text>
                        <PointsInfo user={props.route.params.userId} />
                        <Text>Options</Text>
                        <Button
                            backgroundColor={color}
                            w="90%"
                            rounded="lg"
                            borderColor="#c4c4c4"
                            borderWidth="1"
                            shadow="2"
                            onPress={() =>
                                navigation.navigate("PaymentHistory",{user_id:props.route.params.userId})
                            }
                        >
                            <Center>
                                <Text>Payment History</Text>
                            </Center>
                        </Button>
                        <Button
                            backgroundColor={color}
                            w="90%"
                            rounded="lg"
                            borderColor="#c4c4c4"
                            borderWidth="1"
                            shadow="2"
                            //onPress={() =>
                            //log out
                            //}
                        >
                            <Center>
                                <Text>Log Out</Text>
                            </Center>
                        </Button>
                    </VStack>
                </Box>
            </Center>
        </VStack>
    )
    }else{
    return(
        <VStack h="100%" w="100%">
            <Center h="100%" w="100%">
                <TopBar/>
                <Box h="95%" w="100%">
                    <VStack space={3} px={2}>
                    <Center>
                        <Heading>Settings</Heading>
                    </Center>

                    <Heading>Rewards</Heading>
                    <Center>
                        <PointsInfo user={props.route.params.userId} />
                    </Center>
                    <Heading>Options</Heading>
                    <Center>
                        <Button
                            backgroundColor={color}
                            w="90%"
                            rounded="lg"
                            borderColor="#c4c4c4"
                            borderWidth="1"
                            shadow="2"
                            onPress={() =>
                                navigation.navigate("PaymentHistory",{user_id:props.route.params.userId})
                            }
                        >
                            <Center>
                                <Text>Payment History</Text>
                            </Center>
                        </Button>
                        <Button
                            backgroundColor={color}
                            w="90%"
                            rounded="lg"
                            borderColor="#c4c4c4"
                            borderWidth="1"
                            shadow="2"
                            onPress={() =>
                                navigation.navigate("Availability",{user_id:props.route.params.userId})
                            }
                        >
                            <Center>
                                <Text>Availability</Text>
                            </Center>
                        </Button>
                        <Button
                            backgroundColor={color}
                            w="90%"
                            rounded="lg"
                            borderColor="#c4c4c4"
                            borderWidth="1"
                            shadow="2"
                            onPress={() =>
                                navigation.navigate("RequestsView",{user_id:props.route.params.userId})
                            }
                        >
                            <Center>
                                <Text>Provider Requests</Text>
                            </Center>
                        </Button>
                        <Button
                            backgroundColor={color}
                            w="90%"
                            rounded="lg"
                            borderColor="#c4c4c4"
                            borderWidth="1"
                            shadow="2"
                            //onPress={() =>
                            //log out
                            //}
                        >
                            <Center>
                                <Text>Log Out</Text>
                            </Center>
                        </Button>
                    </Center>
                    </VStack>
                </Box>
            </Center>
        </VStack>
    )
    }
}

export default SettingsView;