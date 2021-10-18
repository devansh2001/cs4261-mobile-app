// Used this documentation: https://docs.nativebase.io/input, https://docs.nativebase.io/image,
// https://docs.nativebase.io/box

import React, { useRef } from "react";
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
import { Ionicons } from '@expo/vector-icons';



const ProvidersView = ({navigation, route}) => {

const data = [
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


    return (
        <VStack h="100%" w="100%">
            <Center h="100%" w="100%">
                <TopBar/>
                <Center h="90%" w="100%" py={2}>
                    <Heading>Services</Heading>
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
                                navigation.navigate('ProviderDetail')
                            }
                            >
                                <HStack w="100%">
                                    <Ionicons name="person-circle-outline" size={40} color="black" />
                                <VStack>
                                    <Text>{item.service_name}</Text>
                                    <Text>{item.fname} {item.lname}</Text>
                                </VStack>
                                </HStack>
                            </Button>
                        )}
                        keyExtractor={(item) => item.service_id}
                    />
                </Center>
                <BottomBar/>
            </Center>
        </VStack>
    )
}

export default ProvidersView;