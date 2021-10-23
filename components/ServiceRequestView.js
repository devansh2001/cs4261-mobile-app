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
import { ScrollView } from "react-native";




const ServiceRequestView = ({navigation, route}) => {

const [service_name, setServiceName] = useState('');
const [task_date, setTaskDate]= useState('');
const [task_price, setTaskPrice]  = useState('');

const handleServiceName = (e) => {
    setServiceName(e)
}
const handleTaskDate = (e) => {
    setTaskDate(e)
}
const handleTaskPrice = (e) => {
    setTaskPrice(e)
}

const { provider,service_id, user } = route.params;

const newTask = async () => {
    const headers = new Headers();
    // https://stackoverflow.com/a/52936747
    headers.append('Access-Control-Allow-Origin', 'http://localhost')
    headers.append('Content-Type', 'application/json')
    const body = {
        'service_id': service_id,
        'task_date_time': task_date,
        'task_price': task_price,
        'task_consumer': user,
        'task_provider': provider,
        'task_status': 'SCHEDULED'
    }
    let url = 'https://cs4261-task-service.herokuapp.com/create-task';
    await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
    })
    .then(data => data.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }

    return (
        <ScrollView>
        <VStack h="100%" w="100%">
            <Center h="100%" w="100%">
                <TopBar/>
                <VStack h="95%" w="100%" py={2} px={2} space={3}>
                    <Heading>Service Request</Heading>
                    <Text>Service Name</Text>
                    <Input
                        onChangeText={handleServiceName}
                        placeholder="Task Name"
                        w="100%"
                    />
                    <Text>Date</Text>
                    <Input
                        onChangeText={handleTaskDate}
                        placeholder="1/1/2021"
                        w="100%"
                    />
                    <Text>Payment Offer</Text>
                    <Input
                        onChangeText={handleTaskPrice}
                        placeholder="$20"
                        w="100%"
                    />
                    <Text>Task Details</Text>
                    <Input
                        placeholder="Walk dogs"
                        w="100%"
                        h="20%" //FIX THIS, TEXT DOES NOT WRAP
                    />
                    <Container py={10}>
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
                    </Container>
                </VStack>
            </Center>
            
        </VStack>
        </ScrollView>
    )
}

export default ServiceRequestView;