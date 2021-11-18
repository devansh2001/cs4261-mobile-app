
// Used this documentation: https://docs.nativebase.io/input, https://docs.nativebase.io/image,
// https://docs.nativebase.io/box

import React, { useRef, useEffect, useState } from "react";
import validator from "validator"
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
import BottomBar from "./sharedComponents/BottomBar";
import TopBar from "./sharedComponents/TopBar";
import { ScrollView } from "react-native";

const ProviderAvailability = ({navigation, route}) => {
    const [service_id, setServiceID] = useState('');
    const [min_price, setMinPrice]= useState('');
    const [monday, setMonday] = useState([])
    const [tuesday, setTuesday] = useState([])
    const [wednesday, setWednesday] = useState([])
    const [thursday, setThursday] = useState([])
    const [friday, setFriday] = useState([])
    const [saturday, setSaturday] = useState([])
    const [sunday, setSunday] = useState([])
    const [service_name_list, setServiceNameList] = useState([])
    const [service_id_list, setServiceIDList] = useState([])
    const [errorMessageMinPrice, setErrorMessageMinPrice] = useState('')

    const handleServiceID = (e) => {
        setServiceID(e)
    }
    const handleMinPrice = (e) => {
        if (validator.isCurrency(e, {require_symbol: false, allow_negatives: false, digits_after_decimal: [2]})) {
            setMinPrice(e)
            setErrorMessageMinPrice('')
        } else {
            setErrorMessageMinPrice('Invalid Price!')
        }
    }
    const handleMonday = (e) => {
        setMonday(e)
    }
    const handleTuesday = (e) => {
        setTuesday(e)
    }
    const handleWednesday = (e) => {
        setWednesday(e)
    }
    const handleThursday = (e) => {
        setThursday(e)
    }
    const handleFriday = (e) => {
        setFriday(e)
    }
    const handleSaturday = (e) => {
        setSaturday(e)
    }
    const handleSunday = (e) => {
        setSunday(e)
    }

    const {user_id} = route.params;

    const getAllServices = async () => {
        let all_services = null;
        const headers = new Headers();
        headers.append('Access-Control-Allow-Origin', 'http://localhost')
        headers.append('Content-Type', 'application/json')
        let url = 'https://cs4261-services-service.herokuapp.com/get-all-services';
        await fetch(url, {
            method: 'GET',
            headers: headers
        })
        .then(data => data.json())
        .then(data => all_services = data)
        .catch(err => console.log(err))

        if (all_services == null) {
            console.log(all_services)
            console.log('Please try again')
            // https://reactnative.dev/docs/alert
            // https://aboutreact.com/react-native-alert/
        } else {
            console.log(all_services)
            let service_name_list = []
            let service_id_list = []
            for (var i in all_services["services"]) {
                service_name_list.push(all_services["services"][i]["service_name"])
                service_id_list.push(all_services["services"][i]["service_id"])
            }
            setServiceNameList(service_name_list)
            setServiceIDList(service_id_list)
        }
    }
    useEffect(() => {
     getAllServices();
    }, []);

    const newAvailability = async () => {
        let apiResponse = null;
        const headers = new Headers();
        // https://stackoverflow.com/a/52936747
        headers.append('Access-Control-Allow-Origin', 'http://localhost')
        headers.append('Content-Type', 'application/json')
        const body = {
            'service_id': service_id,
            'user_id': user_id,
            'minimum_price': min_price,
            'availability': {
                "monday": monday,
                "tuesday": tuesday,
                "wednesday": wednesday,
                "thursday": thursday,
                "friday": friday,
                "saturday": saturday,
                "sunday": sunday
            }
        }
        let url = 'https://cs4261-availability-service.herokuapp.com/availability/add-availabilty';
        console.log(body)
        await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
        })
            .then(data => data.json())
            .then(data => apiResponse = data)
            .catch(err => console.log(err))
        console.log(apiResponse)

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
                        <Heading>Enter New Availability</Heading>
                        <Text>Service Name</Text>
                        <Select
                            selectedValue={service_id}
                            accessibilityLabel="Choose Service"
                            placeholder="Service Name"
                            _selectedItem={{
                                bg: "teal.600",
                                endIcon: <CheckIcon size="5" />,
                            }}
                            mt={1}
                            onValueChange={handleServiceID}
                        >
                            <Select.Item label={service_name_list[0]} value={service_id_list[0]} />
                            <Select.Item label={service_name_list[1]} value={service_id_list[1]} />
                            <Select.Item label={service_name_list[2]} value={service_id_list[2]} />
                            <Select.Item label={service_name_list[3]} value={service_id_list[3]} />
                            <Select.Item label={service_name_list[4]} value={service_id_list[4]} />
                        </Select>
                        <Text>Minimum Price</Text>
                        <Input
                            type="number"
                            onChangeText={handleMinPrice}
                            placeholder="0"
                            w="100%"
                        />
                        <Box _text={{
                            bold: true
                        }}>
                            {errorMessageMinPrice}
                        </Box>
                        <Heading>Enter Availability For Each Day</Heading>
                        <Text>Monday</Text>
                        <Input
                            type="text"
                            onChangeText={handleMonday}
                            placeholder="1-2"
                            w="100%"
                        />
                        <Text>Tuesday</Text>
                        <Input
                            type="text"
                            onChangeText={handleTuesday}
                            placeholder="1-2"
                            w="100%"
                        />
                        <Text>Wednesday</Text>
                        <Input
                            type="text"
                            onChangeText={handleWednesday}
                            placeholder="1-2"
                            w="100%"
                        />
                        <Text>Thursday</Text>
                        <Input
                            type="text"
                            onChangeText={handleThursday}
                            placeholder="1-2"
                            w="100%"
                        />
                        <Text>Friday</Text>
                        <Input
                            type="text"
                            onChangeText={handleFriday}
                            placeholder="1-2"
                            w="100%"
                        />
                        <Text>Saturday</Text>
                        <Input
                            type="text"
                            onChangeText={handleSaturday}
                            placeholder="1-2"
                            w="100%"
                        />
                        <Text>Sunday</Text>
                        <Input
                            type="text"
                            onChangeText={handleSunday}
                            placeholder="1-2"
                            w="100%"
                        />
                        <Container py={10}>
                            <Button
                                bg="#FFF9A1"
                                rounded="lg"
                                borderColor="#c4c4c4"
                                borderWidth="1"
                                shadow="2"
                                onPress={
                                    newAvailability
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

export default ProviderAvailability;