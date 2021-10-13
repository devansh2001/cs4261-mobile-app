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
} from "native-base";
import BottomBar from "./sharedComponents/BottomBar";


const ServiceRequestView = ({navigation, route}) => {
const data = [
//replace this with data from database
    {
      service_id: "57",
      service_name: "Dog Walking",
      service_description: "Walk dogs!",
      service_category: "Pet",
    },
    {
          service_id: "57",
          service_name: "Cat sitting",
          service_description: "Walk dogs!",
          service_category: "Pet",
        },
    ]



    return (
        <VStack>
            <Center>
                <Text>Service Request</Text>
                <Text>Time Estimate</Text>
                <Input
                    mx="3"
                    placeholder="1 hour"
                    w={{
                        base: "70%",
                        md: "25%",
                    }}
                />
                <Text>Payment Offer</Text>
                <Input
                    mx="3"
                    placeholder="$20"
                    w={{
                        base: "70%",
                        md: "25%",
                    }}
                />
                <Text>Task Details</Text>
                <Input
                    mx="3"
                    placeholder="Walk dogs"
                    w={{
                        base: "70%",
                        md: "25%",
                    }}
                />
                <BottomBar/>
            </Center>
        </VStack>
    )
}

export default ServiceRequestView;