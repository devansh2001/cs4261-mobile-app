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
  Divider,
} from "native-base";
import BottomBar from "./sharedComponents/BottomBar";
import TopBar from "./sharedComponents/TopBar";

import { Feather } from '@expo/vector-icons';



const ProviderDetailView = ({navigation, route}) => {
const data = [
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
let sum = 0;
data.forEach(function(item, index, array) {
    sum = parseInt(item.review_rating) + sum;
})
let avg_rating = sum/data.length;

    return (
        <VStack h="100%" w="100%">
            <Center h="100%" w="100%">
                <TopBar/>
                <Box backgroundColor="#FFFFFF" h="90%" w="100%">
                    <Heading>Provider Details</Heading>
                    <HStack>
                        <Text fontSize="lg">{avg_rating}</Text>
                        <Feather name="star" size={24} color="black" />
                        <Text fontSize="lg">    {data[0].provider_fname} {data[0].provider_lname}</Text>
                    </HStack>
                    <Text fontSize="xl">Reviews</Text>
                    <FlatList
                        w="100%"
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
                <BottomBar/>
            </Center>
        </VStack>
    )
}

export default ProviderDetailView;