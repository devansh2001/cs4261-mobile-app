// Used this documentation: https://docs.nativebase.io/input, https://docs.nativebase.io/image,
// https://docs.nativebase.io/box

import React, { useRef, useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/core";
import {
  Text,
  Link,
  HStack,
  Center,
  Input,
  Heading,
  Select,
  CheckIcon,
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
import TopBar from "./sharedComponents/TopBar";
import { ScrollView } from "react-native";

const ServiceCreateNew = ({navigation, route}) => {
    var color = "#fff785"
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
                'screen': 'ServiceCreateNew',
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

const [service_name, setServiceName] = useState('');
const [service_category, setServiceCategory]= useState('');
const [service_description, setServiceDescription]  = useState('');

const handleServiceName = (e) => {
    setServiceName(e)
}
const handleServiceCategory = (e) => {
    setServiceCategory(e)
}
const handleServiceDescription = (e) => {
    setServiceDescription(e)
}

const {user_id} = route.params;

const newService = async () => {
    let apiResponse = null;
    const headers = new Headers();
    var service_cat =  service_category == "" ? "OTHER" : service_category
    // https://stackoverflow.com/a/52936747
    headers.append('Access-Control-Allow-Origin', 'http://localhost')
    headers.append('Content-Type', 'application/json')
    const body = {
        'service_name': service_name,
        'service_category': service_cat,
        'service_description': service_description
    }
    let url = 'https://cs4261-services-service.herokuapp.com/create-services';
    await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
    })
    .then(data => data.json())
    .then(data => apiResponse = data)
    .catch(err => console.log(err))

    if (apiResponse['status'] !== 201 || apiResponse['service_id'] == null) {
        console.log(apiResponse)
        console.log('Please try again')
        // https://reactnative.dev/docs/alert
        // https://aboutreact.com/react-native-alert/
        alert('Service Create Failed!')
    } else {
        console.log(apiResponse)
        alert('Service Create Successful!')
        navigation.navigate("Categories")
    }
  }

    return (
        <ScrollView>
        <VStack h="100%" w="100%">
            <Center h="100%" w="100%">
                <TopBar/>
                <VStack h="95%" w="100%" py={2} px={2} space={3}>
                    <Heading>Create New Service</Heading>
                    <Text>Service Name</Text>
                    <Input
                        type="text"
                        onChangeText={handleServiceName}
                        placeholder="Service Name"
                        w="100%"
                    />
                    <Text>Service Category</Text>
                    <Select
                        selectedValue={service_category}
                        accessibilityLabel="Choose Service"
                        placeholder="Choose Service"
                        _selectedItem={{
                            bg: "teal.600",
                            endIcon: <CheckIcon size="5" />,
                        }}
                        mt={1}
                        onValueChange={handleServiceCategory}
                    >
                        <Select.Item label="Cleaning" value="CLEANING" />
                        <Select.Item label="Pet" value="PET" />
                        <Select.Item label="Plumbing" value="PLUMBING" />
                        <Select.Item label="Electrical" value="ELECTRICAL" />
                        <Select.Item label="Assembly" value="BUILD" />
                        <Select.Item label="Technology" value="COMPUTER" />
                        <Select.Item label="Landscaping" value="LAWN" />
                        <Select.Item label="Home" value="HOME" />
                        <Select.Item label="Other" value="OTHER" />
                    </Select>
                    <Text>Service Description</Text>
                    <Input
                        type="text"
                        onChangeText={handleServiceDescription}
                        placeholder="Fixing broken pipes"
                        w="100%"
                    />
                    <Container py={10}>
                    <Button
                        bg={color}
                        rounded="lg"
                        borderColor="#c4c4c4"
                        borderWidth="1"
                        shadow="2"
                        onPress={
                            newService
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

export default ServiceCreateNew;