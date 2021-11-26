
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
    const [mondayStartStr, setMondayStartStr] = useState('')
    const [mondayEndStr, setMondayEndStr] = useState('')
    const [tuesdayStart, setTuesdayStart] = useState(new Date(1598051730000));
    const [tuesdayEnd, setTuesdayEnd] = useState(new Date(1598051730000));
    const [tuesdayStartStr, setTuesdayStartStr] = useState('')
    const [tuesdayEndStr, setTuesdayEndStr] = useState('')
    const [wednesdayStart, setWednesdayStart] = useState(new Date(1598051730000));
    const [wednesdayEnd, setWednesdayEnd] = useState(new Date(1598051730000));
    const [wednesdayStartStr, setWednesdayStartStr] = useState('')
    const [wednesdayEndStr, setWednesdayEndStr] = useState('')
    const [thursdayStart, setThursdayStart] = useState(new Date(1598051730000));
    const [thursdayEnd, setThursdayEnd] = useState(new Date(1598051730000));
    const [thursdayStartStr, setThursdayStartStr] = useState('')
    const [thursdayEndStr, setThursdayEndStr] = useState('')
    const [fridayStart, setFridayStart] = useState(new Date(1598051730000));
    const [fridayEnd, setFridayEnd] = useState(new Date(1598051730000));
    const [fridayStartStr, setFridayStartStr] = useState('')
    const [fridayEndStr, setFridayEndStr] = useState('')
    const [saturdayStart, setSaturdayStart] = useState(new Date(1598051730000));
    const [saturdayEnd, setSaturdayEnd] = useState(new Date(1598051730000));
    const [saturdayStartStr, setSaturdayStartStr] = useState('')
    const [saturdayEndStr, setSaturdayEndStr] = useState('')
    const [sundayStart, setSundayStart] = useState(new Date(1598051730000));
    const [sundayEnd, setSundayEnd] = useState(new Date(1598051730000));
    const [sundayStartStr, setSundayStartStr] = useState('')
    const [sundayEndStr, setSundayEndStr] = useState('')
    const [mode, setMode] = useState('date');
    const [showMon, setShowMon] = useState(false);
    const [showTues, setShowTues] = useState(false);
    const [showWed, setShowWed] = useState(false);
    const [showThurs, setShowThurs] = useState(false);
    const [showFri, setShowFri] = useState(false);
    const [showSat, setShowSat] = useState(false);
    const [showSun, setShowSun] = useState(false);

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
    const handleMondayStart = (event, selectedDate) => {
        const currentDate = selectedDate || mondayStart;
        setMondayStart(currentDate);
        var currentTime = String(currentDate).substring(16,24);
        setMondayStartStr(currentTime);
        handleMonday();
    }
    const handleMondayEnd = (event, selectedDate) => {
        const currentDate = selectedDate || mondayEnd;
        setMondayEnd(currentDate);
        var currentTime = String(currentDate).substring(16,24);
        setMondayEndStr(currentTime);
        handleMonday();
    }
    const handleMonday = () => {
        setMonday(mondayStartStr + "-" + mondayEndStr)
    }
    const handleTuesdayStart = (event, selectedDate) => {
        const currentDate = selectedDate || tuesdayStart;
        setShow(Platform.OS === 'ios');
        setTuesdayStart(currentDate);
        var currentTime = String(currentDate).substring(16,24);
        setTuesdayStartStr(currentTime);
        handleTuesday();
    }
    const handleTuesdayEnd = (event, selectedDate) => {
        const currentDate = selectedDate || tuesdayEnd;
        setShow(Platform.OS === 'ios');
        setTuesdayEnd(currentDate);
        var currentTime = String(currentDate).substring(16,24);
        setTuesdayEndStr(currentTime);
        handleTuesday();
    }
    const handleTuesday = () => {
        setTuesday(tuesdayStartStr + "-" + tuesdayEndStr)
    }
    const handleWednesdayStart = (event, selectedDate) => {
        const currentDate = selectedDate || wednesdayStart;
        setShow(Platform.OS === 'ios');
        setWednesdayStart(currentDate);
        var currentTime = String(currentDate).substring(16,24);
        setWednesdayStartStr(currentTime);
        handleWednesday();
    }
    const handleWednesdayEnd = (event, selectedDate) => {
        const currentDate = selectedDate || wednesdayEnd;
        setShow(Platform.OS === 'ios');
        setWednesdayEnd(currentDate);
        var currentTime = String(currentDate).substring(16,24);
        setWednesdayEndStr(currentTime);
        handleWednesday();
    }
    const handleWednesday = () => {
        setWednesday(wednesdayStartStr + "-" + wednesdayEndStr)
    }
    const handleThursdayStart = (event, selectedDate) => {
        const currentDate = selectedDate || thursdayStart;
        setShow(Platform.OS === 'ios');
        setThursdayStart(currentDate);
        var currentTime = String(currentDate).substring(16,24);
        setThursdayStartStr(currentTime);
        handleThursday();
    }
    const handleThursdayEnd = (event, selectedDate) => {
        const currentDate = selectedDate || thursdayEnd;
        setShow(Platform.OS === 'ios');
        setThursdayEnd(currentDate);
        var currentTime = String(currentDate).substring(16,24);
        setThursdayEndStr(currentTime);
        handleThursday();
    }
    const handleThursday = () => {
        setThursday(thursdayStartStr + "-" + thursdayEndStr)
    }
    const handleFridayStart = (event, selectedDate) => {
        const currentDate = selectedDate || fridayStart;
        setShow(Platform.OS === 'ios');
        setFridayStart(currentDate);
        var currentTime = String(currentDate).substring(16,24);
        setFridayStartStr(currentTime);
        handleFriday();
    }
    const handleFridayEnd = (event, selectedDate) => {
        const currentDate = selectedDate || fridayEnd;
        setShow(Platform.OS === 'ios');
        setFridayEnd(currentDate);
        var currentTime = String(currentDate).substring(16,24);
        setFridayEndStr(currentTime);
        handleFriday();
    }
    const handleFriday = () => {
        setFriday(fridayStartStr + "-" + fridayEndStr)
    }
    const handleSaturdayStart = (event, selectedDate) => {
        const currentDate = selectedDate || saturdayStart;
        setShow(Platform.OS === 'ios');
        setSaturdayStart(currentDate);
        var currentTime = String(currentDate).substring(16,24);
        setSaturdayStartStr(currentTime);
        handleSaturday();
    }
    const handleSaturdayEnd = (event, selectedDate) => {
        const currentDate = selectedDate || saturdayEnd;
        setShow(Platform.OS === 'ios');
        setSaturdayEnd(currentDate);
        var currentTime = String(currentDate).substring(16,24);
        setSaturdayEndStr(currentTime);
        handleSaturday();
    }
    const handleSaturday = () => {
        setSaturday(saturdayStartStr + "-" + saturdayEndStr)
    }
    const handleSundayStart = (event, selectedDate) => {
        const currentDate = selectedDate || sundayStart;
        setShow(Platform.OS === 'ios');
        setSundayStart(currentDate);
        var currentTime = String(currentDate).substring(16,24);
        setSundayStartStr(currentTime);
        handleSunday();
    }
    const handleSundayEnd = (event, selectedDate) => {
        const currentDate = selectedDate || sundayEnd;
        setShow(Platform.OS === 'ios');
        setSundayEnd(currentDate);
        var currentTime = String(currentDate).substring(16,24);
        setSundayEndStr(currentTime);
        handleSunday();
    }
    const handleSunday = () => {
        setSunday(sundayStartStr + "-" + sundayEndStr)
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
    const showTimepickerMon = () => {
        showModeMon('time');
    };
    const showModeMon = (currentMode) => {
        setShowMon(true);
        setMode(currentMode);
    };
    const showTimepickerTues = () => {
        showModeTues('time');
    };
    const showModeTues = (currentMode) => {
        setShowTues(true);
        setMode(currentMode);
    };
    const showTimepickerWed = () => {
        showModeWed('time');
    };
    const showModeWed = (currentMode) => {
        setShowWed(true);
        setMode(currentMode);
    };
    const showTimepickerThurs = () => {
        showModeThurs('time');
    };
    const showModeThurs = (currentMode) => {
        setShowThurs(true);
        setMode(currentMode);
    };
    const showTimepickerFri = () => {
        showModeFri('time');
    };
    const showModeFri = (currentMode) => {
        setShowFri(true);
        setMode(currentMode);
    };
    const showTimepickerSat = () => {
        showModeSat('time');
    };
    const showModeSat = (currentMode) => {
        setShowSat(true);
        setMode(currentMode);
    };
    const showTimepickerSun = () => {
        showModeSun('time');
    };
    const showModeSun = (currentMode) => {
        setShowSun(true);
        setMode(currentMode);
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
                                 <Select.Item key={item.service_id} label={item.service_name} value={item.service_id} />
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
                            onPress={showTimepickerMon}
                        >
                            <Text>Start Time</Text>
                        </Button>
                        {showMon && (
                            <DateTimePicker
                              testID="mondayStart"
                              value={mondayStart}
                              mode={mode}
                              is24Hour={true}
                              display="default"
                              onChange={handleMondayStart}
                              minuteInterval={15}
                            />
                        )}
                        <Button
                            w="50%"
                            onPress={showTimepickerMon}
                        >
                            <Text>End Time</Text>
                        </Button>
                        {showMon && (
                            <DateTimePicker
                              testID="mondayEnd"
                              value={mondayEnd}
                              mode={mode}
                              is24Hour={true}
                              display="default"
                              onChange={handleMondayEnd}
                              minuteInterval={15}
                            />
                        )}
                        <Text>Tuesday</Text>
                        <Button
                            w="50%"
                            onPress={showTimepickerTues}
                        >
                            <Text>Start Time</Text>
                        </Button>
                        {showTues && (
                            <DateTimePicker
                              testID="tuesdayStart"
                              value={tuesdayStart}
                              mode={mode}
                              is24Hour={true}
                              display="default"
                              onChange={handleTuesdayStart}
                              minuteInterval={15}
                            />
                        )}
                        <Button
                            w="50%"
                            onPress={showTimepickerTues}
                        >
                            <Text>End Time</Text>
                        </Button>
                        {showTues && (
                            <DateTimePicker
                              testID="tuesdayEnd"
                              value={tuesdayEnd}
                              mode={mode}
                              is24Hour={true}
                              display="default"
                              onChange={handleTuesdayEnd}
                              minuteInterval={15}
                            />
                        )}
                        <Text>Wednesday</Text>
                        <Button
                            w="50%"
                            onPress={showTimepickerWed}
                        >
                            <Text>Start Time</Text>
                        </Button>
                        {showWed && (
                            <DateTimePicker
                              testID="wednesdayStart"
                              value={wednesdayStart}
                              mode={mode}
                              is24Hour={true}
                              display="default"
                              onChange={handleWednesdayStart}
                              minuteInterval={15}
                            />
                        )}
                        <Button
                            w="50%"
                            onPress={showTimepickerWed}
                        >
                            <Text>End Time</Text>
                        </Button>
                        {showWed && (
                            <DateTimePicker
                              testID="wednesdayEnd"
                              value={wednesdayEnd}
                              mode={mode}
                              is24Hour={true}
                              display="default"
                              onChange={handleWednesdayEnd}
                              minuteInterval={15}
                            />
                        )}
                        <Text>Thursday</Text>
                        <Button
                            w="50%"
                            onPress={showTimepickerThurs}
                        >
                            <Text>Start Time</Text>
                        </Button>
                        {showThurs && (
                            <DateTimePicker
                              testID="thursdayStart"
                              value={thursdayStart}
                              mode={mode}
                              is24Hour={true}
                              display="default"
                              onChange={handleThursdayStart}
                              minuteInterval={15}
                            />
                        )}
                        <Button
                            w="50%"
                            onPress={showTimepickerThurs}
                        >
                            <Text>End Time</Text>
                        </Button>
                        {showThurs && (
                            <DateTimePicker
                              testID="thursdayEnd"
                              value={thursdayEnd}
                              mode={mode}
                              is24Hour={true}
                              display="default"
                              onChange={handleThursdayEnd}
                              minuteInterval={15}
                            />
                        )}
                        <Text>Friday</Text>
                        <Button
                            w="50%"
                            onPress={showTimepickerFri}
                        >
                            <Text>Start Time</Text>
                        </Button>
                        {showFri && (
                            <DateTimePicker
                              testID="fridayStart"
                              value={fridayStart}
                              mode={mode}
                              is24Hour={true}
                              display="default"
                              onChange={handleFridayStart}
                              minuteInterval={15}
                            />
                        )}
                        <Button
                            w="50%"
                            onPress={showTimepickerFri}
                        >
                            <Text>End Time</Text>
                        </Button>
                        {showFri && (
                            <DateTimePicker
                              testID="fridayEnd"
                              value={fridayEnd}
                              mode={mode}
                              is24Hour={true}
                              display="default"
                              onChange={handleFridayEnd}
                              minuteInterval={15}
                            />
                        )}
                        <Text>Saturday</Text>
                        <Button
                            w="50%"
                            onPress={showTimepickerSat}
                        >
                            <Text>Start Time</Text>
                        </Button>
                        {showSat && (
                            <DateTimePicker
                              testID="saturdayStart"
                              value={saturdayStart}
                              mode={mode}
                              is24Hour={true}
                              display="default"
                              onChange={handleSaturdayStart}
                              minuteInterval={15}
                            />
                        )}
                        <Button
                            w="50%"
                            onPress={showTimepickerSat}
                        >
                            <Text>End Time</Text>
                        </Button>
                        {showSat && (
                            <DateTimePicker
                              testID="saturdayEnd"
                              value={saturdayEnd}
                              mode={mode}
                              is24Hour={true}
                              display="default"
                              onChange={handleSaturdayEnd}
                              minuteInterval={15}
                            />
                        )}
                        <Text>Sunday</Text>
                        <Button
                            w="50%"
                            onPress={showTimepickerSun}
                        >
                            <Text>Start Time</Text>
                        </Button>
                        {showSun && (
                            <DateTimePicker
                              testID="sundayStart"
                              value={sundayStart}
                              mode={mode}
                              is24Hour={true}
                              display="default"
                              onChange={handleSundayStart}
                              minuteInterval={15}
                            />
                        )}
                        <Button
                            w="50%"
                            onPress={showTimepickerSun}
                        >
                            <Text>End Time</Text>
                        </Button>
                        {showSun && (
                            <DateTimePicker
                              testID="sundayEnd"
                              value={sundayEnd}
                              mode={mode}
                              is24Hour={true}
                              display="default"
                              onChange={handleSundayEnd}
                              minuteInterval={15}
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