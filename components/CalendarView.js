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

const CalendarView = ({navigation, route}) => {

const user = '50c77f60-4089-447a-b0e9-6a07c984c6bb';
const [data, setData] = useState([]);
const getData = async () => {
    let url = 'https://cs4261-task-service.herokuapp.com/get-tasks-by-status/';
     try {
      const response = await fetch(url + user + '/SCHEDULED');
      const json = await response.json();
      setData(json.task);
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
                    <Heading>Calendar</Heading>
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
                                    navigation.navigate('ProviderDetail',{user:item.task_provider})
                                }
                            >
                                <HStack space={3}>
                                    <Text>{item.task_date_time}</Text>
                                    <Text>{item.service_name}</Text>
                                </HStack>
                            </Button>
                        )}
                        keyExtractor={(item) => item.service_id}
                    />
                </Center>
            </Center>
        </VStack>
    )
}

export default CalendarView;