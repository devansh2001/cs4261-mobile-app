// Used this documentation: https://docs.nativebase.io/input, https://docs.nativebase.io/image,
// https://docs.nativebase.io/box

import React, { useRef, useState } from "react";
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
  Button,
} from "native-base";
import BottomBar from "./sharedComponents/BottomBar";
import TopBar from "./sharedComponents/TopBar";




const ServiceRequestView = ({navigation, route}) => {

const [service_name, setServiceName] = useState('');
const [task_date, setTaskDate]= useState('');
const [task_price, setTaskPrice]  = useState('');

const handleServiceName = (e) => {
    setServiceName(e.target.value)
}
const handleTaskDate = (e) => {
    setTaskDate(e.target.value)
}
const handleTaskPrice = (e) => {
    setTaskPrice(e.target.value)
}

const { provider,service_id, user } = route.params;

const newTask = async () => {
    const body = {
        'service_id': service_id,
        'task_date_time': task_date,
        'task_price': task_price,
        'task_consumer': user,
        'task_provider': provider,
        'task_status': 'SCHEDULED'
    }
    let url = 'https://cs4261-task-service.herokuapp.com/create-task';
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body)
      });
  }

    return (
        <VStack h="100%" w="100%">
            <Center h="100%" w="100%">
                <TopBar/>
                <VStack h="95%" w="100%" py={2} px={2} space={3}>
                    <Heading>Service Request</Heading>
                    <Text>Service Name</Text>
                    <Input
                        onChange={handleServiceName}
                        placeholder="Task Name"
                        w="100%"
                    />
                    <Text>Date</Text>
                    <Input
                        onChange={handleTaskDate}
                        placeholder="1/1/2021"
                        w="100%"
                    />
                    <Text>Payment Offer</Text>
                    <Input
                        onChange={handleTaskPrice}
                        placeholder="$20"
                        w="100%"
                    />
                    <Text>Task Details</Text>
                    <Input
                        placeholder="Walk dogs"
                        w="100%"
                        h="20%" //FIX THIS, TEXT DOES NOT WRAP
                    />
                    <Button
                        bg="#FFF9A1"
                        rounded="lg"
                        borderColor="#c4c4c4"
                        borderWidth="1"
                        shadow="2"
                        onPress={
                            newTask
                        }
                    >
                        <Text>Submit</Text>
                    </Button>
                </VStack>
            </Center>
        </VStack>
    )
}

export default ServiceRequestView;