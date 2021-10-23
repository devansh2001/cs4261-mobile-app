// Used this documentation: https://docs.nativebase.io/input, https://docs.nativebase.io/image,
// https://docs.nativebase.io/box

import React, { useRef, useEffect, useState } from "react";
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
  ScrollView,
} from "native-base";
import BottomBar from "./sharedComponents/BottomBar";
import TopBar from "./sharedComponents/TopBar";
import { Ionicons } from '@expo/vector-icons';



const ServicesView = ({navigation, route}) => {

let vdata = [
//replace this with data from database
    {
        service_id: "57",
        service_name: "Dog Walking",
        service_description: "Walk dogs"
    },
    {
        service_id: "58",
        service_name: "Cat sitting",
        service_description: "Give cats food and water twice a day"
    },
    {
        service_id: "59",
        service_name: "Dog Sitting",
        service_description: "Walk dogs, feed them, and let them outside"
    },
]
const { category, userId } = route.params;

const [data, setData] = useState([]);
const getData = async () => {
    let url = 'https://cs4261-services-service.herokuapp.com/get-services-by-category/';
     try {
      const response = await fetch(url + category);
      const json = await response.json();
      setData(json.services);
    } catch (error) {
      console.error(error);
    }
  }
 useEffect(() => {
     getData();
 }, []);

    return (
        <VStack h="100%" w="100%">
            <Center h="100%" w="100%">
                <TopBar/>
                <Center h="95%" w="100%">
                    <Heading>{category} SERVICES</Heading>
                    <FlatList
                        w="100%"
                        space={1}
                        data={data}
                        renderItem={({ item }) => (
                            <Button
                                w="100%"
                                borderWidth="1"
                                borderColor="#c4c4c4"
                                bg="white"
                                rounded="xs"
                                onPress={() =>
                                    navigation.navigate('Providers',{service:item.service_id,user_id:userId})
                                }
                            >
                                <Text>{item.service_name}</Text>
                            </Button>
                        )}
                        keyExtractor={(item) => item.service_id}
                    />
                    <Button
                        backgroundColor="#FFF9A1"
                        w="50%"
                        rounded="lg"
                        borderColor="#c4c4c4"
                        borderWidth="1"
                        shadow="2"
                        onPress={() =>
                            navigation.navigate("ServiceRequest")
                        }
                    >
                        <Center>
                            <Text>New Service</Text>
                        </Center>
                    </Button>
                </Center>
            </Center>
        </VStack>
    )
}

export default ServicesView;