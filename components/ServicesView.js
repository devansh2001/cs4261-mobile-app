// Used this documentation: https://docs.nativebase.io/input, https://docs.nativebase.io/image,
// https://docs.nativebase.io/box https://docs.nativebase.io/flat-list

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
  ScrollView,
} from "native-base";
import TopBar from "./sharedComponents/TopBar";
import { Ionicons } from '@expo/vector-icons';



const ServicesView = ({navigation, route}) => {
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
                'screen': 'ServicesView',
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
                                    navigation.navigate('Providers',{service:item.service_id,user_id:userId,service_name:item.service_name})
                                }
                            >
                                <Text>{item.service_name}</Text>
                            </Button>
                        )}
                        keyExtractor={(item) => item.service_id}
                    />
                    <Button
                        margin="20px"
                        bg={color}
                        borderColor="#c4c4c4"
                        borderWidth="1"
                        shadow="0"
                        onPress={() =>
                            navigation.navigate('ServiceCreateNew',{userId:userId})
                        }
                    >
                        <Text>Add another service</Text>
                    </Button>
                </Center>
            </Center>
        </VStack>
    )
}

export default ServicesView;