// Used this documentation: https://docs.nativebase.io/input, https://docs.nativebase.io/image,
// https://docs.nativebase.io/box, https://docs.nativebase.io/flat-list

import React, { useRef, useEffect, useState, useCallback } from "react";
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

import { Feather } from '@expo/vector-icons';



const ProviderDetailView = ({navigation, route}) => {
    var color = "#fff785"
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
                'screen': 'ProviderDetailView',
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

const { provider,service,user,service_name } = route.params;
console.log(service + " - " + service_name)
console.log("*** in providerdetailview ***")
const [data, setData] = useState([]);
console.log(provider.user_id)
const getData = async () => {
    let url = 'https://cs4261-reviews-service.herokuapp.com/get-all-reviews/';
     try {
      const response = await fetch(url + provider.user_id);
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
    avg_rating = sum/data.length;
}
}
let str = provider.availability
str = str.replace(/'/g, '"')
let avail = JSON.parse(str)
let days = []
let times = []
for(var i in avail){
    days.push(i + ": " + avail[i])
}
days = days.join('\n')
    return (
        <VStack h="100%" w="100%">
            <Center h="100%" w="100%">
                <TopBar/>
                <Box backgroundColor="#FFFFFF" h="95%" w="100%">
                    <Heading px={2}>Provider Details</Heading>
                    <HStack px={2}>
                        {/* https://docs.nativebase.io/image */}
                        <Image source={{uri: provider.profile_picture}} size={20} borderRadius={20} />
                        <VStack px={2}>
                            <Text px={2}>{provider.fname} {provider.lname}</Text>
                            <HStack px={2}>
                                <Text fontSize="lg">{avg_rating}</Text>
                                <Feather name="star" size={24} color="black" />
                            </HStack>
                            <Text px={2}>Available: </Text>
                            <Text px={2}>{days}</Text>
                        </VStack>
                    </HStack>
                    <Center>

                        <Button
                            backgroundColor={color}
                            w="50%"
                            rounded="lg"
                            borderColor="#c4c4c4"
                            borderWidth="1"
                            shadow="2"
                            onPress={() =>
                                navigation.navigate("ServiceRequest",{
                                    provider:provider.user_id,
                                    service_id:service,
                                    user:user,
                                    available:avail,
                                    service_name:service_name,
                                })
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
                    <Center py={5}>
                    <Button
                        backgroundColor={color}
                        w="50%"
                        rounded="lg"
                        borderColor="#c4c4c4"
                        borderWidth="1"
                        shadow="2"
                        onPress={() =>
                            navigation.navigate("NewReview",{provider:provider.user_id,service_id:service,user:user})
                        }
                    >
                        <Text>Write Review</Text>
                    </Button>
                    </Center>
                </Box>
            </Center>
        </VStack>
    )
}

export default ProviderDetailView;