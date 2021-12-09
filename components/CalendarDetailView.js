// Used this documentation: https://docs.nativebase.io/input, https://docs.nativebase.io/image,
// https://docs.nativebase.io/box

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
import { useNavigation } from "@react-navigation/native";

const CalendarDetailView = (props) => {
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
            'screen': 'CalendarDetailView',
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
const user = props.route.params.userId;
const item = props.route.params.item;

const [data, setData] = useState([]);
const getData = async () => {
    let url = 'https://cs4261-users-service.herokuapp.com/get-user/';
     try {
      const response = await fetch(url + item.task_provider);
      const json = await response.json();
      console.log(json)
      setData(json.user);
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
                <Box h="95%" w="100%">
                    <Center>
                    <Heading>Appointment Details</Heading>
                    <Text>Service: {item.service_name}</Text>
                    <Text>Status: {item.task_status}</Text>
                    <Text>Scheduled on: {item.task_date_time}</Text>
                    <Text>Provider: {data.fname} {data.lname}</Text>
                    <Text>Contact Info: {data.phone_number}</Text>
                    <Text>Venmo: {data.venmo_id}</Text>
                    </Center>
                </Box>
            </Center>
        </VStack>
    )
}

export default CalendarDetailView;