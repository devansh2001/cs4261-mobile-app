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

const CalendarView = (props) => {
    
const navigation = useNavigation()
const user = props.route.params.userId;
console.log("User id in calendar")
console.log(user)
const [data, setData] = useState([]);
const getData = async () => {
    let url = 'https://cs4261-task-service.herokuapp.com/get-tasks-by-status/';
     try {
      const response = await fetch(url + user + '/REQUESTED');
      const json = await response.json();
      console.log(json)
      setData(json.task);
    } catch (error) {
      console.error(error);
    }
    console.log(data)
  }
 useEffect(() => {
     getData();
 }, []);


    return (
        <VStack h="100%" w="100%">
            <Center h="100%" w="100%">
                <TopBar/>
                <Center h="95%" w="100%">
                    <Heading>Requested Tasks Status</Heading>
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
                                    navigation.navigate("CalendarDetail",{item: item})
                                }
                            >
                                <HStack space={3}>
                                    <Text>{item.task_date_time}</Text>
                                    <Text>{item.service_name}</Text>
                                    <Text>{item.task_status}</Text>
                                </HStack>
                            </Button>
                        )}
                        keyExtractor={(item) => item.task_id}
                    />
                </Center>
            </Center>
        </VStack>
    )
}

export default CalendarView;