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

    return (
        <Center flex={1} px='3'>
            <ScrollView margin="10">
            <Heading >Sign Up</Heading>
            <VStack space="10" margin="10">
                <VStack>
                    <Text>First Name</Text>
                    <Input onChange={handleFirstNameChange} variant='rounded' placeholder='George' />
                </VStack>
                <VStack>
                    <Text>Last Name</Text>
                    <Input onChange={handleLastNameChange} variant='rounded' placeholder='Burdell' />
                </VStack>
                <VStack>
                    <Text>Phone Number</Text>
                    <Input onChange={handlePhoneNumberChange} variant='rounded' placeholder='123456789' />
                </VStack>
                <VStack>
                    <Text>Venmo ID</Text>
                    <Input onChange={handleVenmoIDChange} variant='rounded' placeholder='@venmo' />
                </VStack>
                <VStack>
                    <Text>Email ID</Text>
                    <Input onChange={handleEmailChange} variant='rounded' placeholder='example@email.com' />
                </VStack>
                <VStack>
                    <Text>Password</Text>
                    <Input onChange={handlePasswordChange} type='password' variant='rounded' placeholder='P@$$w0rd' />
                </VStack>
                <Button>
                    Sign Me Up!
                </Button>

                <VStack>
                    <Text>Already have an account?</Text>
                    <Button>Log In instead</Button>
                </VStack>
            </VStack>
            </ScrollView>
        </Center>
    )
}

export default SignUpView;