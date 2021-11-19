// Used this documentation: https://docs.nativebase.io/input, https://docs.nativebase.io/image,
// https://docs.nativebase.io/box

import React, { useRef, useState, useEffect } from "react";
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
import BottomBar from "./sharedComponents/BottomBar";
import TopBar from "./sharedComponents/TopBar";
import { useNavigation } from "@react-navigation/native";


const SettingsView = (props) => {
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
                    <Heading>Settings</Heading>
                    <Center>
                        <Button
                            backgroundColor="#FFF9A1"
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
                            backgroundColor="#FFF9A1"
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
                            <Heading>Settings</Heading>
                            <Center>
                                <Button
                                    backgroundColor="#FFF9A1"
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
                                    backgroundColor="#FFF9A1"
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
                                    backgroundColor="#FFF9A1"
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
                                    backgroundColor="#FFF9A1"
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
                        </Box>
                    </Center>
                </VStack>
    )
    }
}

export default SettingsView;