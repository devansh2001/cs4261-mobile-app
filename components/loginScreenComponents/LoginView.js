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
  Button,
} from "native-base";



const LoginView = ({navigation}) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleEmailChange = (e) => {
        console.log(e.target.value)
        setEmail(e.target.value)
    }
    
    const handlePasswordChange = (e) => {
        console.log(e.target.value)
        setPassword(e.target.value)
    }

    return (
        <Center flex={1} px='3'>
            <Heading>Login</Heading>
            <VStack>
                <VStack>
                    <Text>Email ID</Text>
                    <Input onChange={handleEmailChange} variant='rounded' placeholder='example@email.com' />
                </VStack>
                <VStack>
                    <Text>Password</Text>
                    <Input onChange={handlePasswordChange} type='password' variant='rounded' placeholder='P@$$w0rd' />
                </VStack>
                <Button
                    title="GO"
                    onPress={() =>
                        navigation.navigate('Services')
                    }
                />
            </VStack>
        </Center>
    )
}

export default LoginView;