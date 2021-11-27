// Used this documentation: https://docs.nativebase.io/input, https://docs.nativebase.io/image,
// https://docs.nativebase.io/box, https://docs.nativebase.io/flat-list

import React, { useRef, useEffect, useState } from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Input,
  Heading,
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
  Divider,
  Button,
  Select,
} from "native-base";
import BottomBar from "./sharedComponents/BottomBar";
import TopBar from "./sharedComponents/TopBar";
import { Ionicons } from '@expo/vector-icons';



const ProvidersView = ({navigation, route}) => {

const vdata = [
//replace this with data from database
    {
        service_id: "57",
        service_name: "Dog Walking",
        user_id: "45",
        fname: "FirstName",
        lname: "LastName",
        minimum_price: "$20",
    },
    {
        service_id: "57",
        service_name: "Dog Walking",
        user_id: "45",
        fname: "FirstName",
        lname: "LastName",
        minimum_price: "$20",
    },
    {
        service_id: "57",
        service_name: "Dog Walking",
        user_id: "45",
        fname: "FirstName",
        lname: "LastName",
        minimum_price: "$20",
    },
]
const { service, user_id } = route.params;
const [data, setData] = useState([]);
const [day_filter_option, setDayFilterOption]= useState('');
const [price_filter_option, setPriceFilterOption]= useState('');
const [start_time_filter_option, setStartTimeFilterOption]= useState('');
const [end_time_filter_option, setEndTimeFilterOption]= useState('');

const handleDayFilterOption = (e) => {
    setDayFilterOption(e)
    getData()
}

const handlePriceFilterOption = (e) => {
    setPriceFilterOption(e)
    getData()
}

const handleStartTimeFilterOption = (e) => {
    setStartTimeFilterOption(e)
    getData()
}

const handleEndTimeFilterOption = (e) => {
    setEndTimeFilterOption(e)
    getData()
}

const getData = async () => {
    // /get-filtered-availability/service_id/min_price/day/start_time/end_time
    console.log("Price Filter Option: " + price_filter_option)
    console.log("Day Filter Option: " + day_filter_option)
    console.log("Start Time Filter Option: " + start_time_filter_option)
    console.log("End Filter Option: " + end_time_filter_option)

    let url = 'https://cs4261-availability-service.herokuapp.com/get-filtered-availability/' + service
    if (price_filter_option === '') {
        url = url + "/*";
    } else {
        url = url + "/" + price_filter_option;
    }
    if (day_filter_option === '') {
        url = url + "/*";
    } else {
        url = url + "/" + day_filter_option;
    }
    if (start_time_filter_option === '') {
        url = url + "/*";
    } else {
        url = url + "/" + start_time_filter_option;
    }
    if (end_time_filter_option === '') {
        url = url + "/*";
    } else {
        url = url + "/" + end_time_filter_option;
    }
    console.log("URL: " + url)

    try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json.availability);
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
                <Center h="95%" w="100%" py={2}>
                    <Heading>Providers</Heading>

                    <HStack h="100%" w="100%">
                        <Select
                            selectedValue={day_filter_option}
                            accessibilityLabel="Filter By Day"
                            placeholder="Filter By Day"
                            _selectedItem={{
                                bg: "teal.600",
                                endIcon: <CheckIcon size="5" />,
                            }}
                            mt={1}
                            onValueChange={handleDayFilterOption}
                        >
                            <Select.Item label="Sunday" value="sunday" />
                            <Select.Item label="Monday" value="monday" />
                            <Select.Item label="Tuesday" value="tuesday" />
                            <Select.Item label="Wednesday" value="wednesday" />
                            <Select.Item label="Thursday" value="thursday" />
                            <Select.Item label="Friday" value="friday" />
                            <Select.Item label="Saturday" value="saturday" />
                            <Select.Item label="None" value="*" />
                        </Select>

                        <Select
                            selectedValue={price_filter_option}
                            accessibilityLabel="Filter By Price"
                            placeholder="Filter By Price"
                            _selectedItem={{
                                bg: "teal.600",
                                endIcon: <CheckIcon size="5" />,
                            }}
                            mt={1}
                            onValueChange={handlePriceFilterOption}
                        >
                            <Select.Item label="< $20" value="20" />
                            <Select.Item label="< $40" value="40" />
                            <Select.Item label="< $60" value="60" />
                            <Select.Item label="< $80" value="80" />
                            <Select.Item label="< $100" value="100" />
                            <Select.Item label="None" value="*" />
                        </Select>

                        <Select
                            selectedValue={start_time_filter_option}
                            accessibilityLabel="Filter By Start Time"
                            placeholder="Filter By Start Time"
                            _selectedItem={{
                                bg: "teal.600",
                                endIcon: <CheckIcon size="5" />,
                            }}
                            mt={1}
                            onValueChange={handleStartTimeFilterOption}
                        >
                            <Select.Item label="12 AM" value="0" />
                            <Select.Item label="1 AM" value="1" />
                            <Select.Item label="2 AM" value="2" />
                            <Select.Item label="3 AM" value="3" />
                            <Select.Item label="4 AM" value="4" />
                            <Select.Item label="5 AM" value="5" />
                            <Select.Item label="6 AM" value="6" />
                            <Select.Item label="7 AM" value="7" />
                            <Select.Item label="8 AM" value="8" />
                            <Select.Item label="9 AM" value="9" />
                            <Select.Item label="10 AM" value="10" />
                            <Select.Item label="11 AM" value="11" />
                            <Select.Item label="12 PM" value="12" />
                            <Select.Item label="1 PM" value="13" />
                            <Select.Item label="2 PM" value="14" />
                            <Select.Item label="3 PM" value="15" />
                            <Select.Item label="4 PM" value="16" />
                            <Select.Item label="5 PM" value="17" />
                            <Select.Item label="6 PM" value="18" />
                            <Select.Item label="7 PM" value="19" />
                            <Select.Item label="8 PM" value="20" />
                            <Select.Item label="9 PM" value="21" />
                            <Select.Item label="10 PM" value="22" />
                            <Select.Item label="11 PM" value="23" />
                            <Select.Item label="None" value="*" />
                        </Select>

                        <Select
                            selectedValue={end_time_filter_option}
                            accessibilityLabel="Filter By End Time"
                            placeholder="Filter By End Time"
                            _selectedItem={{
                                bg: "teal.600",
                                endIcon: <CheckIcon size="5" />,
                            }}
                            mt={1}
                            onValueChange={handleEndTimeFilterOption}
                        >
                            <Select.Item label="12 AM" value="0" />
                            <Select.Item label="1 AM" value="1" />
                            <Select.Item label="2 AM" value="2" />
                            <Select.Item label="3 AM" value="3" />
                            <Select.Item label="4 AM" value="4" />
                            <Select.Item label="5 AM" value="5" />
                            <Select.Item label="6 AM" value="6" />
                            <Select.Item label="7 AM" value="7" />
                            <Select.Item label="8 AM" value="8" />
                            <Select.Item label="9 AM" value="9" />
                            <Select.Item label="10 AM" value="10" />
                            <Select.Item label="11 AM" value="11" />
                            <Select.Item label="12 PM" value="12" />
                            <Select.Item label="1 PM" value="13" />
                            <Select.Item label="2 PM" value="14" />
                            <Select.Item label="3 PM" value="15" />
                            <Select.Item label="4 PM" value="16" />
                            <Select.Item label="5 PM" value="17" />
                            <Select.Item label="6 PM" value="18" />
                            <Select.Item label="7 PM" value="19" />
                            <Select.Item label="8 PM" value="20" />
                            <Select.Item label="9 PM" value="21" />
                            <Select.Item label="10 PM" value="22" />
                            <Select.Item label="11 PM" value="23" />
                            <Select.Item label="None" value="*" />
                        </Select>
                    </HStack>

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
                                navigation.navigate('ProviderDetail',{provider:item,service:service,user:user_id})
                            }
                            >
                                <HStack w="100%">
                                    {/* <Ionicons name="person-circle-outline" size={40} color="black" /> */}
                                    {/* https://docs.nativebase.io/image */}
                                    <Image source={{uri: item.profile_picture}} size={10} borderRadius={20} />
                                <VStack>
                                    <Text>{item.fname} {item.lname}</Text>
                                </VStack>
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

export default ProvidersView;