// Used this documentation: https://docs.nativebase.io/input, https://docs.nativebase.io/image,
// https://docs.nativebase.io/box

import React, { useRef, useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/core";
import validator from "validator"
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
    // https://stackoverflow.com/a/70110510
    var color = "#fff785"
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
                'screen': 'ServiceRequestView',
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

const { provider,service_id,user,available,service_name_prefilled } = route.params;

// https://stackoverflow.com/a/12795812
let serviceDate = new Date(Date.now() + 24 * 60 * 60 * 1000);
// console.log(serviceDate)
// console.log("is tomorrow");
const [service_name, setServiceName] = useState(route.params.service_name);
const [task_date, setTaskDate]= useState(serviceDate.getFullYear() + "-" + (serviceDate.getMonth() + 1) + '-' + serviceDate.getDate());
const [task_price, setTaskPrice]  = useState('');
const [errorMessageDate, setErrorMessageDate] = useState('')
const [errorMessagePrice, setErrorMessagePrice] = useState('')

const prefillMinPriceForService = async () => {
    console.log(provider + " and " + service_id)
    await fetch('https://cs4261-availability-service.herokuapp.com/get-min-price/' + provider + '/' + service_id)
        .then(data => data.json())
        .then(data => setTaskPrice(data['min_price']))
        .catch(error => console.log(error))

    console.log('executing fetch')
    console.log(task_price)
}

prefillMinPriceForService()

const handleServiceName = (e) => {
    setServiceName(e)    
}
const handleTaskDate = (e) => {
    if (validator.isDate(e)) {
        setTaskDate(e)
        setErrorMessageDate('')
    } else {
        setErrorMessageDate('Invalid Date!')
    }
}
const handleTaskPrice = (e) => {
    if (validator.isCurrency(e, {require_symbol: false, allow_negatives: false, digits_after_decimal: [2]})) {
        setTaskPrice(e)
        setErrorMessagePrice('')
    } else {
        setErrorMessagePrice('Invalid Price!')
    }
}





const newTask = async () => {
    if (!validator.isDate(task_date)) {
        alert('Invalid Date!')
    } else if (!validator.isCurrency(task_price, {require_symbol: false, allow_negatives: false, digits_after_decimal: [2]})) {
        alert('Invalid Price!')
    } else {
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
            'task_status': 'REQUESTED'
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
                    >
                        { service_name }
                    </Input>
                    <Text>Date</Text>
                    <Input
                        type="date"
                        onChangeText={handleTaskDate}
                        placeholder="YYYY-MM-DD"
                        w="100%"
                    >
                        { task_date }
                        
                    </Input>
                    <Box _text={{
                        bold: true
                    }}>
                        {errorMessageDate}
                    </Box>
                    <Text>Payment Offer</Text>
                    <Input
                        type="text"
                        onChangeText={handleTaskPrice}
                        placeholder="$20.00"
                        w="100%"
                    >
                        { task_price }
                    </Input>
                    <Box _text={{
                        bold: true
                    }}>
                        {errorMessagePrice}
                    </Box>
                    
                    <Text>Task Details (optional specific instructions)</Text>
                    <Input
                        type="text"
                        placeholder="Walk dogs"
                        w="100%"
                        // h="20%" //FIX THIS, TEXT DOES NOT WRAP
                    />
                    <Button
                        bg={color}
                        rounded="lg"
                        borderColor="#c4c4c4"
                        borderWidth="1"
                        shadow="2"
                        onPress={
                            newTask
                        }
                    >
                        Submit
                    </Button>
                    {/* <Container py={10}> */}
                    
                    {/* </Container> */}
                </VStack>
            </Center>
            
        </VStack>
        </ScrollView>
    )
}

export default ServiceRequestView;