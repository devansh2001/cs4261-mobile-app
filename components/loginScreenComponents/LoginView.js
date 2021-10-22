// Used this documentation: https://docs.nativebase.io/input

import React, { useEffect, useRef } from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Button,
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
import { ScrollView } from "react-native";



const LoginView = ({navigation}) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [userInfo, setUserInfo] = React.useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }


    const handleLogin = async () => {
        let apiResponse = null;
        
        const headers = new Headers();
        headers.append('email', email)
        headers.append('password', password)
        // https://stackoverflow.com/a/52936747
        headers.append('Access-Control-Allow-Origin', 'https://localhost')
        headers.append('Content-Type', 'application/json')

        await fetch('https://cs4261-users-service.herokuapp.com/authenticate', {
            method: 'GET',
            headers: headers
        })
        .then(data => data.json())
        .then(data => apiResponse = data)
        .catch(err => console.log(err))

        if (apiResponse['status'] !== 200) {
            console.log('Please try again')
        } else {
            setUserInfo(apiResponse['user'])
        }        
    }

    return (
        
        <Center flex={1} px='3'>
            <ScrollView>
                <VStack mt="50">
                    <Center>
                        <Heading>Login to get started!</Heading>
                    </Center>
                </VStack>
            
                <VStack space="10" mt="10">
                    <VStack>
                        <Center>
                            <Text margin='5'>Email ID</Text>
                        </Center>
                        <Input onChange={handleEmailChange} variant='rounded' placeholder='example@email.com' />
                    </VStack>
                    <VStack>
                        <Center>
                            <Text margin='5'>Password</Text>
                        </Center>
                        <Input onChange={handlePasswordChange} type='password' variant='rounded' placeholder='P@$$w0rd' />
                    </VStack>
                    {/* https://docs.nativebase.io/button */}
                    <Button backgroundColor='#fff9a1' shadow='5' _text={{color: 'black'}} onPress={handleLogin}>
                        Log Me In!
                    </Button>

                    {/* https://docs.nativebase.io/button */}
                    <VStack>
                        <Text>Don't have an account?</Text>
                        <Button backgroundColor='#fff9a1' shadow='5' _text={{color: 'black'}}>Sign Up instead</Button>
                    </VStack>
                </VStack>
            </ScrollView>
        </Center>
    )
}

export default LoginView;