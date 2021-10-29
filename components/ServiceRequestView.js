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
    let apiResponse = null;
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
    .then(data => apiResponse = data)
    .catch(err => console.log(err))

    if (apiResponse['status'] !== 201 || apiResponse['task_id'] == null) {
        console.log(apiResponse)
        console.log('Please try again')
        // https://reactnative.dev/docs/alert
        // https://aboutreact.com/react-native-alert/
        alert('Task Request Failed!')
    } else {
        console.log(apiResponse)
        alert('Task Request Successful!')
        navigation.navigate("Calendar")
    }
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
                        type="text"
                        onChangeText={handleServiceName}
                        placeholder="Task Name"
                        w="100%"
                    />
                    <Text>Date</Text>
                    <Input
                        type="date"
                        onChangeText={handleTaskDate}
                        placeholder="2021-10-25"
                        w="100%"
                    />
                    <Text>Payment Offer</Text>
                    <Input
                        type="text"
                        pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
                        data-type="currency"
                        onChangeText={handleTaskPrice}
                        placeholder="$20.00"
                        w="100%"
                    />
                    <Text>Task Details</Text>
                    <Input
                        type="text"
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