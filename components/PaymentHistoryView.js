// Used this documentation: https://docs.nativebase.io/input, https://docs.nativebase.io/image,
// https://docs.nativebase.io/box

import React, { useRef,useEffect,useState } from "react";
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


const user = '50c77f60-4089-447a-b0e9-6a07c984c6bb';
const [data, setData] = useState([]);
const getData = async () => {
    let url = 'https://cs4261-task-service.herokuapp.com/get-tasks-by-status/';
     try {
      const response = await fetch(url + user + '/COMPLETED');
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
                <Heading>Payment History</Heading>
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
            </Center>
        </VStack>
    )
}

export default PaymentHistoryView;