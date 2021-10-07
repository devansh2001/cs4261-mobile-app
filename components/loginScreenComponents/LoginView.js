// Used this documentation: https://docs.nativebase.io/input

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
} from "native-base";
import { ScrollView } from "react-native";



const LoginView = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    return (
        // <Center flex={1} px='3'>
            <ScrollView>
                <VStack mt="50">
                    <Heading>Login</Heading>
                </VStack>
            
                <VStack space="10" mt="10">
                    <VStack>
                        <Text>Email ID</Text>
                        <Input onChange={handleEmailChange} variant='rounded' placeholder='example@email.com' />
                    </VStack>
                    <VStack>
                        <Text>Password</Text>
                        <Input onChange={handlePasswordChange} type='password' variant='rounded' placeholder='P@$$w0rd' />
                    </VStack>
                </VStack>
            </ScrollView>
        // </Center>
    )
}

export default LoginView;