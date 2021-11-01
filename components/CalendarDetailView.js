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
import { useNavigation } from "@react-navigation/native";

const CalendarView = (props) => {

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

export default CalendarView;