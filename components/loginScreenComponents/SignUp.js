// Used this documentation: https://docs.nativebase.io/input

import React, { useRef, useState } from "react";
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
  ScrollView,
  Button
} from "native-base";


const SignUpView = () => {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [venmoID, setVenmoID] = useState('');
    const [userType, setUserType] = useState('');

    const handleFirstNameChange = (e) => {
        setFName(e.target.value);
    }

    const handleLastNameChange = (e) => {
        setLName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    }

    const handleVenmoIDChange = (e) => {
        setVenmoID(e.target.value);
    }

    const handleUserTypeChange = (e) => {
        setUserType(e.target.value);
    }


    const handleSignup = async () => {
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
            <ScrollView margin="10">
                <Center>
                    <Heading>Sign Up</Heading>
                </Center>
            
                <VStack space="5" margin="10">
                    <VStack>
                        <Center>
                            <Text margin='2'>First Name</Text>
                        </Center>
                        <Input onChange={handleFirstNameChange} variant='rounded' placeholder='George' />
                    </VStack>
                    <VStack>
                        <Center>
                            <Text margin='2'>Last Name</Text>
                        </Center>
                        <Input onChange={handleLastNameChange} variant='rounded' placeholder='Burdell' />
                    </VStack>
                    <VStack>
                        <Center>
                            <Text margin='2'>Phone Number</Text>
                        </Center>
                        <Input onChange={handlePhoneNumberChange} variant='rounded' placeholder='123456789' />
                    </VStack>
                    <VStack>
                        <Center>
                            <Text margin='2'>Venmo ID</Text>
                        </Center>
                        <Input onChange={handleVenmoIDChange} variant='rounded' placeholder='@venmo' />
                    </VStack>
                    <VStack>
                        <Center>
                            <Text margin='2'>Email ID</Text>
                        </Center>
                        <Input onChange={handleEmailChange} variant='rounded' placeholder='example@email.com' />
                    </VStack>
                    <VStack>
                        <Center>
                            <Text margin='2'>Password</Text>
                        </Center>
                        <Input onChange={handlePasswordChange} type='password' variant='rounded' placeholder='P@$$w0rd' />
                    </VStack>
                    
                    <Button onPress={handleSignup} backgroundColor='#fff9a1' shadow='5' _text={{color: 'black'}}>
                        Sign Me Up!
                    </Button>

                    <VStack>
                        <Text>Already have an account?</Text>
                        <Button backgroundColor='#fff9a1' shadow='5' _text={{color: 'black'}}>Log In instead</Button>
                    </VStack>
                </VStack>
            </ScrollView>
        </Center>
    )
}

export default SignUpView;