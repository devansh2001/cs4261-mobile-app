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
} from "native-base";
import BottomBar from "./sharedComponents/BottomBar";
import TopBar from "./sharedComponents/TopBar";

import { Feather } from '@expo/vector-icons';



const ProviderDetailView = ({navigation, route}) => {
const vdata = [
    {
        review_id: "42",
        review_text: "Great Provider",
        review_rating: "5",
        provider_id: "57",
        provider_fname: "FirstName",
        provider_lname: "LastName",
        consumer_id: "23",
        consumer_fname: "FirstName",
    },
    {
        review_id: "43",
        review_text: "Great Job!",
        review_rating: "4",
        provider_id: "57",
        provider_fname: "FirstName",
        provider_lname: "LastName",
        consumer_id: "24",
        consumer_fname: "FirstName",
    },
]
const { provider,service,user } = route.params;
const [data, setData] = useState([]);
const getData = async () => {
    let url = 'https://cs4261-reviews-service.herokuapp.com/get-all-reviews/';
     try {
      const response = await fetch(url + provider);
      const json = await response.json();
      setData(json.reviews);
    } catch (error) {
      console.error(error);
    }
  }
 useEffect(() => {
     getData();
 }, []);

let sum = 0;
let avg_rating = "No ratings";
if(data == null){
}else{
data.forEach(function(item, index, array) {
    sum = parseInt(item.review_rating) + sum;
})
if(sum>0){
    avg_rating = sum/vdata.length;
}
}



    return (
        <VStack h="100%" w="100%">
            <Center h="100%" w="100%">
                <TopBar/>
                <Box backgroundColor="#FFFFFF" h="95%" w="100%">
                    <Heading>Provider Details</Heading>
                    <HStack px={2}>
                        <Text fontSize="lg">{avg_rating}</Text>
                        <Feather name="star" size={24} color="black" />
                    </HStack>
                    <Center>
                        <Button
                            backgroundColor="#FFF9A1"
                            w="50%"
                            rounded="lg"
                            borderColor="#c4c4c4"
                            borderWidth="1"
                            shadow="2"
                            onPress={() =>
                                navigation.navigate("ServiceRequest",{provider:provider,service_id:service,user:user})
                            }
                        >
                            <Center>
                                <Text>Request</Text>
                            </Center>
                        </Button>
                    </Center>
                    <Text fontSize="xl" px={2}>Reviews</Text>
                    <FlatList
                        w="100%"
                        px={2}
                        data={data}
                        renderItem={({ item }) => (
                            <Box
                                rounded="md"
                                borderColor="#c4c4c4"
                                borderWidth="1"
                                w="100%"
                            >
                                <HStack w="100%" alignItems="center">
                                    <Text>{item.review_rating}</Text>
                                    <Feather name="star" size={16} color="black" />
                                    <VStack>
                                        <Text bold sub> By {item.consumer_fname}</Text>
                                        <Text> {item.review_text}</Text>
                                    </VStack>
                                </HStack>
                            </Box>
                        )}
                        keyExtractor={(item) => item.review_id}
                    />
                </Box>
            </Center>
        </VStack>
    )
}

export default ProviderDetailView;