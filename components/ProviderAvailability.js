
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
import DateTimePicker from '@react-native-community/datetimepicker';


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
    const [services_list, setServicesList] = useState([])
    const [errorMessageMinPrice, setErrorMessageMinPrice] = useState('')
    const [date, setDate] = useState(new Date(1598051730000));
    const [mondayStart, setMondayStart] = useState(new Date(1598051730000));
    const [mondayEnd, setMondayEnd] = useState(new Date(1598051730000));
    const [tuesdayStart, setTuesdayStart] = useState(new Date(1598051730000));
    const [tuesdayEnd, setTuesdayEnd] = useState(new Date(1598051730000));
    const [wednesdayStart, setWednesdayStart] = useState(new Date(1598051730000));
    const [wednesdayEnd, setWednesdayEnd] = useState(new Date(1598051730000));
    const [thursdayStart, setThursdayStart] = useState(new Date(1598051730000));
    const [thursdayEnd, setThursdayEnd] = useState(new Date(1598051730000));
    const [fridayStart, setFridayStart] = useState(new Date(1598051730000));
    const [fridayEnd, setFridayEnd] = useState(new Date(1598051730000));
    const [saturdayStart, setSaturdayStart] = useState(new Date(1598051730000));
    const [saturdayEnd, setSaturdayEnd] = useState(new Date(1598051730000));
    const [sundayStart, setSundayStart] = useState(new Date(1598051730000));
    const [sundayEnd, setSundayEnd] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

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
    const handleMonday = (event, mondayStartSelect, mondayEndSelect) => {
        var end = mondayEndSelect || mondayEnd;
        setShow(Platform.OS === 'ios');
        setMondayEnd(end);
        end = String(end).substring(16,24);

        var start = mondayStartSelect || mondayStart;
        setShow(Platform.OS === 'ios');
        setMondayStart(start);
        start = String(start).substring(16,24);
        setMonday(start + "-" + end)
    }
    const handleTuesday = (event, tuesdayStartSelect, tuesdayEndSelect) => {
      var end = tuesdayEndSelect || tuesdayEnd;
      setShow(Platform.OS === 'ios');
      setTuesdayEnd(end);
      end = String(end).substring(16,24);

      var start = tuesdayStartSelect || tuesdayStart;
      setShow(Platform.OS === 'ios');
      setTuesdayStart(start);
      start = String(start).substring(16,24);
      setTuesday(start + "-" + end)
    }
    const handleWednesday = (event, wednesdayStartSelect, wednesdayEndSelect) => {
       var end = wednesdayEndSelect || wednesdayEnd;
       setShow(Platform.OS === 'ios');
       setWednesdayEnd(end);
       end = String(end).substring(16,24);

       var start = wednesdayStartSelect || wednesdayStart;
       setShow(Platform.OS === 'ios');
       setWednesdayStart(start);
       start = String(start).substring(16,24);
       setWednesday(start + "-" + end)
    }
    const handleThursday = (event, thursdayStartSelect, thursdayEndSelect) => {
      var end = thursdayEndSelect || thursdayEnd;
      setShow(Platform.OS === 'ios');
      setThursdayEnd(end);
      end = String(end).substring(16,24);

      var start = thursdayStartSelect || thursdayStart;
      setShow(Platform.OS === 'ios');
      setThursdayStart(start);
      start = String(start).substring(16,24);
      setThursday(start + "-" + end)
    }
    const handleFriday = (event, fridayStartSelect, fridayEndSelect) => {
        var end = fridayEndSelect || fridayEnd;
        setShow(Platform.OS === 'ios');
        setFridayEnd(end);
        end = String(end).substring(16,24);

        var start = fridayStartSelect || fridayStart;
        setShow(Platform.OS === 'ios');
        setFridayStart(start);
        start = String(start).substring(16,24);
        setFriday(start + "-" + end)
    }
    const handleSaturday = (event, saturdayStartSelect, saturdayEndSelect) => {
      var end = saturdayEndSelect || saturdayEnd;
      setShow(Platform.OS === 'ios');
      setSaturdayEnd(end);
      end = String(end).substring(16,24);

      var start = saturdayStartSelect || saturdayStart;
      setShow(Platform.OS === 'ios');
      setSaturdayStart(start);
      start = String(start).substring(16,24);
      setSaturday(start + "-" + end)
    }
    const handleSunday = (event, sundayStartSelect, sundayEndSelect) => {
        var end = sundayEndSelect || sundayEnd;
        setShow(Platform.OS === 'ios');
        setSundayEnd(end);
        end = String(end).substring(16,24);

        var start = sundayStartSelect || sundayStart;
        setShow(Platform.OS === 'ios');
        setSundayStart(start);
        start = String(start).substring(16,24);
        setSunday(start + "-" + end)
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
            let services_list = []
            for (var i in all_services["services"]) {
                let obj = {service_name: all_services["services"][i]["service_name"], service_id: all_services["services"][i]["service_id"]}
                services_list.push(obj)
            }
            setServicesList(services_list)
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
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };
    const showDatepicker = () => {
        showMode('date');
      };
    const showTimepicker = () => {
        showMode('time');
    };
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        var currentTime = String(currentDate).substring(16,24)
    };


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
                            {services_list.map((item) => (
                                 <Select.Item label={item.service_name} value={item.service_id} />
                            ))}
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
                        <Button
                            w="50%"
                            onPress={showTimepicker}
                        >
                            <Text>Start Time</Text>
                        </Button>
                        {show && (
                            <DateTimePicker
                              testID="mondayStart"
                              value={mondayStart}
                              mode={mode}
                              is24Hour={true}
                              display="default"
                              onChange={handleMonday}
                            />
                        )}
                        <Button
                            w="50%"
                            onPress={showTimepicker}
                        >
                            <Text>End Time</Text>
                        </Button>
                        {show && (
                            <DateTimePicker
                              testID="mondayEnd"
                              value={mondayEnd}
                              mode={mode}
                              is24Hour={true}
                              display="default"
                              onChange={handleMonday}
                            />
                        )}
                        <Text>Tuesday</Text>
                        <Button
                            w="50%"
                            onPress={showTimepicker}
                        >
                            <Text>Start Time</Text>
                        </Button>
                        {show && (
                            <DateTimePicker
                              testID="tuesdayStart"
                              value={tuesdayStart}
                              mode={mode}
                              is24Hour={true}
                              display="default"
                              onChange={handleTuesday}
                            />
                        )}
                        <Button
                            w="50%"
                            onPress={showTimepicker}
                        >
                            <Text>End Time</Text>
                        </Button>
                        {show && (
                            <DateTimePicker
                              testID="tuesdayEnd"
                              value={tuesdayEnd}
                              mode={mode}
                              is24Hour={true}
                              display="default"
                              onChange={handleTuesday}
                            />
                        )}
                        <Text>Wednesday</Text>
                        <Button
                            w="50%"
                            onPress={showTimepicker}
                        >
                            <Text>Start Time</Text>
                        </Button>
                        {show && (
                            <DateTimePicker
                              testID="wednesdayStart"
                              value={wednesdayStart}
                              mode={mode}
                              is24Hour={true}
                              display="default"
                              onChange={handleWednesday}
                            />
                        )}
                        <Button
                            w="50%"
                            onPress={showTimepicker}
                        >
                            <Text>End Time</Text>
                        </Button>
                        {show && (
                            <DateTimePicker
                              testID="wednesdayEnd"
                              value={wednesdayEnd}
                              mode={mode}
                              is24Hour={true}
                              display="default"
                              onChange={handleWednesday}
                            />
                        )}
                        <Text>Thursday</Text>
                        <Button
                            w="50%"
                            onPress={showTimepicker}
                        >
                            <Text>Start Time</Text>
                        </Button>
                        {show && (
                            <DateTimePicker
                              testID="thursdayStart"
                              value={thursdayStart}
                              mode={mode}
                              is24Hour={true}
                              display="default"
                              onChange={handleThursday}
                            />
                        )}
                        <Button
                            w="50%"
                            onPress={showTimepicker}
                        >
                            <Text>End Time</Text>
                        </Button>
                        {show && (
                            <DateTimePicker
                              testID="thursdayEnd"
                              value={thursdayEnd}
                              mode={mode}
                              is24Hour={true}
                              display="default"
                              onChange={handleThursday}
                            />
                        )}
                        <Text>Friday</Text>
                        <Button
                            w="50%"
                            onPress={showTimepicker}
                        >
                            <Text>Start Time</Text>
                        </Button>
                        {show && (
                            <DateTimePicker
                              testID="fridayStart"
                              value={fridayStart}
                              mode={mode}
                              is24Hour={true}
                              display="default"
                              onChange={handleFriday}
                            />
                        )}
                        <Button
                            w="50%"
                            onPress={showTimepicker}
                        >
                            <Text>End Time</Text>
                        </Button>
                        {show && (
                            <DateTimePicker
                              testID="fridayEnd"
                              value={fridayEnd}
                              mode={mode}
                              is24Hour={true}
                              display="default"
                              onChange={handleFriday}
                            />
                        )}
                        <Text>Saturday</Text>
                        <Button
                            w="50%"
                            onPress={showTimepicker}
                        >
                            <Text>Start Time</Text>
                        </Button>
                        {show && (
                            <DateTimePicker
                              testID="saturdayStart"
                              value={saturdayStart}
                              mode={mode}
                              is24Hour={true}
                              display="default"
                              onChange={handleSaturday}
                            />
                        )}
                        <Button
                            w="50%"
                            onPress={showTimepicker}
                        >
                            <Text>End Time</Text>
                        </Button>
                        {show && (
                            <DateTimePicker
                              testID="saturdayEnd"
                              value={saturdayEnd}
                              mode={mode}
                              is24Hour={true}
                              display="default"
                              onChange={handleSaturday}
                            />
                        )}
                        <Text>Sunday</Text>
                        <Button
                            w="50%"
                            onPress={showTimepicker}
                        >
                            <Text>Start Time</Text>
                        </Button>
                        {show && (
                            <DateTimePicker
                              testID="sundayStart"
                              value={sundayStart}
                              mode={mode}
                              is24Hour={true}
                              display="default"
                              onChange={handleSunday}
                            />
                        )}
                        <Button
                            w="50%"
                            onPress={showTimepicker}
                        >
                            <Text>End Time</Text>
                        </Button>
                        {show && (
                            <DateTimePicker
                              testID="sundayEnd"
                              value={sundayEnd}
                              mode={mode}
                              is24Hour={true}
                              display="default"
                              onChange={handleSunday}
                            />
                        )}
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