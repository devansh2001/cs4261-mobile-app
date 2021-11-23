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
const [filter_option, setFilterOption]= useState('');

const handleFilterOption = (e) => {
    setFilterOption(e)
}

const getData = async () => {
    let url = 'https://cs4261-availability-service.herokuapp.com/get-availability/';
     try {
      const response = await fetch(url + service);
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
                    <Select
                        selectedValue={filter_option}
                        accessibilityLabel="Choose Filter Option"
                        placeholder="Choose Filter Option"
                        _selectedItem={{
                            bg: "teal.600",
                            endIcon: <CheckIcon size="5" />,
                        }}
                        mt={1}
                        onValueChange={handleFilterOption}
                    >
                        <Select.Item label="None" value="None" />
                        <Select.Item label="Day" value="Day" />
                        <Select.Item label="Time" value="Time" />
                        <Select.Item label="Price" value="Price" />
                    </Select>
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