// Used this documentation: https://docs.nativebase.io/input, https://docs.nativebase.io/image,
// https://docs.nativebase.io/box

import React, { useRef,useEffect,useState, useCallback } from "react";
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
import BottomBar from "./sharedComponents/BottomBar";
import TopBar from "./sharedComponents/TopBar";



const PaymentHistoryView = ({navigation, route}) => {
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
                'screen': 'PaymentHistoryView',
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
const { user_id } = route.params;

const [data, setData] = useState([]);
const getData = async () => {
    let url = 'https://cs4261-task-service.herokuapp.com/get-tasks-by-status/';
     try {
      const response = await fetch(url + user_id + '/COMPLETED');
      const json = await response.json();
      console.log(json)
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
                <Box h="95%" w="100%">
                    <Center>
                        <Heading>Payment History</Heading>
                    </Center>
                    <FlatList
                        w="100%"
                        space={1}
                        data={data}
                        renderItem={({ item }) => (
                            <Box
                                w="100%"
                                borderColor="#c4c4c4"
                                borderWidth={1}
                            >
                                <HStack space={3} px={1}>
                                    <Text>${item.task_price}</Text>
                                    <Text>{item.service_name}</Text>
                                    <Text>Status: {item.task_status}</Text>
                                </HStack>
                            </Box>
                        )}
                        keyExtractor={(item) => item.service_id}
                    />
                </Box>
            </Center>
        </VStack>
    )
}

export default PaymentHistoryView;