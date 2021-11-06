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

const ProviderRequests = ({navigation, route}) => {
    const { user_id } = route.params;
    const [requestedData, setRequestedData] = useState([]);
    const [scheduledData, setScheduledData] = useState([]);
    const getRequestedData = async () => {
        let url = 'https://cs4261-task-service.herokuapp.com/get-tasks-by-status/';
        try {
            const response = await fetch(url + user_id + '/REQUESTED');
            console.log(user_id)
            console.log(url + user_id + '/REQUESTED')
            const json = await response.json();
            console.log(json)
            setRequestedData(json.task);
        } catch (error) {
            console.error(error);
        }
        console.log(requestedData)
    }
    const getScheduledData = async () => {
        let url = 'https://cs4261-task-service.herokuapp.com/get-tasks-by-status/';
        try {
            const response = await fetch(url + user_id + '/SCHEDULED');
            const json = await response.json();
            console.log(json)
            setScheduledData(json.task);
        } catch (error) {
            console.error(error);
        }
        console.log(scheduledData)
    }
    const changeTaskStatus = async (item, status) => {
        let task_id = item.task_id;
        let url = 'https://cs4261-task-service.herokuapp.com/change-task-status/';
        const headers = new Headers();
        headers.append('Access-Control-Allow-Origin', 'http://localhost')
        headers.append('Content-Type', 'application/json')
        await fetch(url + task_id.toString() + "/" + status, {
            method: 'POST',
            headers: headers
        })
            .then(data => data.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
        getScheduledData()
        getRequestedData()
    }
    useEffect(() => {
        getRequestedData();
        getScheduledData();
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
                        data={requestedData}
                        renderItem={({ item }) => (
                            <div>
                                <HStack space={3}>
                                    <Text>{item.task_date_time}</Text>
                                    <Text>{item.service_name}</Text>
                                    <Text>{item.task_status}</Text>
                                </HStack>
                                <Button
                                    w="100%"
                                    borderWidth="1"
                                    borderColor="#c4c4c4"
                                    bg="white"
                                    rounded="xs"
                                    onPress={() =>
                                        changeTaskStatus(item, 'SCHEDULED')
                                    }
                                >
                                    Accept
                                </Button>
                            </div>
                        )}
                        keyExtractor={(item) => item.service_id}
                    />
                    <Heading>Scheduled Tasks Status</Heading>
                    <FlatList
                        w="100%"
                        space={1}
                        data={scheduledData}
                        renderItem={({ item }) => (
                            <div>
                                <HStack space={3}>
                                    <Text>{item.task_date_time}</Text>
                                    <Text>{item.service_name}</Text>
                                    <Text>{item.task_status}</Text>
                                </HStack>
                                <Button
                                    w="100%"
                                    borderWidth="1"
                                    borderColor="#c4c4c4"
                                    bg="white"
                                    rounded="xs"
                                    onPress={() =>
                                        changeTaskStatus(item, 'COMPLETED')
                                    }
                                >
                                    Completed
                                </Button>
                            </div>
                        )}
                        keyExtractor={(item) => item.service_id}
                    />
                </Center>
            </Center>
        </VStack>
    )
}

export default ProviderRequests;