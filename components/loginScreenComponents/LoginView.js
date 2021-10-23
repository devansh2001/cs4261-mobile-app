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
} from "native-base";
import { Alert, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";



const LoginView = (props) => {
    // https://reactnavigation.org/docs/use-navigation/
    const navigation = useNavigation();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [userInfo, setUserInfo] = React.useState('');

    const handleEmailChange = (e) => {
        // console.log(e)
        setEmail(e)
    }
    
    const handlePasswordChange = (e) => {
        setPassword(e)
    }


    const handleLogin = async () => {
        let apiResponse = null;
        console.log(email)
        console.log(password)
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
            console.log(apiResponse)
            console.log('Please try again')
            // https://reactnative.dev/docs/alert
            // https://aboutreact.com/react-native-alert/
            alert(
                'Please try to login again with a valid email ID and password!'
            )
        } else {
            console.log(apiResponse)
            setUserInfo(apiResponse['user'])
            // props.route.params.setUserId(apiResponse['user']['user_id'])
            navigation.navigate("TabBar", {userId: apiResponse['user']['user_id']})
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
                        <Input onChangeText={handleEmailChange} variant='rounded' placeholder='example@email.com' />
                    </VStack>
                    <VStack>
                        <Center>
                            <Text margin='5'>Password</Text>
                        </Center>
                        <Input onChangeText={handlePasswordChange} type='password' variant='rounded' placeholder='P@$$w0rd' />
                    </VStack>
                    {/* https://docs.nativebase.io/button */}
                    <Button backgroundColor='#fff9a1' shadow='5' _text={{color: 'black'}} onPress={handleLogin}>
                        Log Me In!
                    </Button>

                    {/* https://docs.nativebase.io/button */}
                    <VStack>
                        <Text>Don't have an account?</Text>
                        <Button
                        backgroundColor='#fff9a1'
                        shadow='5'
                        _text={{color: 'black'}}
                        onPress={() =>
                            navigation.navigate("SignUp")
                        }
                    >
                        Sign Up instead
                    </Button>
                    </VStack>
                </VStack>
            </ScrollView>
        </Center>
    )
}

export default LoginView;