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
                'screen': 'CalendarView',
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
console.log("User id in calendar")
console.log(user)
const [data, setData] = useState([]);
const getData = async () => {
    let url = 'https://cs4261-task-service.herokuapp.com/get-tasks-by-status/';
     try {
      const response = await fetch(url + user + '/SCHEDULED');
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
                                    navigation.navigate("CalendarDetail",{item: item})
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
                    <Button
                        w="50%"
                        borderWidth="1"
                        borderColor="#c4c4c4"
                        bg="#FFF9A1"
                        rounded="xs"
                        onPress={() =>
                            navigation.navigate("RequestStatus")
                        }
                    >
                        <Text>Requested Tasks Status</Text>
                    </Button>
                </Center>
            </Center>
        </VStack>
    )
}

export default CalendarView;