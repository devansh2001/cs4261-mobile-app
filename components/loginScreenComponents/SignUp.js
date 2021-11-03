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
  Button,
  Radio
} from "native-base";


const SignUpView = ({navigation}) => {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [venmoID, setVenmoID] = useState('');
    const [profilePicture, setProfilePicture] = useState('');
    const [userType, setUserType] = useState('consumer');

    const handleFirstNameChange = (e) => {
        setFName(e);
    }

    const handleLastNameChange = (e) => {
        setLName(e);
    }

    const handleEmailChange = (e) => {
        setEmail(e);
    }

    const handlePasswordChange = (e) => {
        setPassword(e);
    }

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e);
    }

    const handleVenmoIDChange = (e) => {
        setVenmoID(e);
    }

    const handleProfilePictureChange = (e) => {
        setProfilePicture(e);
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
        headers.append('Access-Control-Allow-Origin', 'http://localhost')
        headers.append('Content-Type', 'application/json')

        const body = {
            'fname': fName,
            'lname': lName,
            'phone_number': phoneNumber,
            'email': email,
            'password': password,
            'venmo_id': venmoID,
            'user_type': userType,
            'profile_picture': profilePicture,
            'user_location': '0'
        }

        await fetch('https://cs4261-users-service.herokuapp.com/create-user', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
        })
        .then(data => data.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
        navigation.navigate("TabBar")
        // if (apiResponse['status'] !== 200) {
        //     console.log('Please try again')
        // } else {
        //     console.log('User created!')
        // }
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
                        <Input onChangeText={handleFirstNameChange} variant='rounded' placeholder='George' />
                    </VStack>
                    <VStack>
                        <Center>
                            <Text margin='2'>Last Name</Text>
                        </Center>
                        <Input onChangeText={handleLastNameChange} variant='rounded' placeholder='Burdell' />
                    </VStack>
                    <VStack>
                        <Center>
                            <Text margin='2'>Phone Number</Text>
                        </Center>
                        <Input onChangeText={handlePhoneNumberChange} variant='rounded' placeholder='123456789' />
                    </VStack>
                    <VStack>
                        <Center>
                            <Text margin='2'>Venmo ID</Text>
                        </Center>
                        <Input onChangeText={handleVenmoIDChange} variant='rounded' placeholder='@venmo' />
                    </VStack>
                    <VStack>
                        <Center>
                            <Text margin='2'>Email ID</Text>
                        </Center>
                        <Input onChangeText={handleEmailChange} variant='rounded' placeholder='example@email.com' />
                    </VStack>
                    <VStack>
                        <Center>
                            <Text margin='2'>Password</Text>
                        </Center>
                        <Input onChangeText={handlePasswordChange} type='password' variant='rounded' placeholder='P@$$w0rd' />
                    </VStack>

                    <VStack>
                        <Center>
                            <Text margin='2'>Account Type</Text>
                        </Center>
                        {/* https://docs.nativebase.io/radio */}
                        <Radio.Group
                            name="myRadioGroup"
                            accessibilityLabel="favorite number"
                            value={userType}
                            onChange={(nextValue) => {
                                setUserType(nextValue)
                            }}
                        >
                            <HStack>
                                <Radio value="consumer" my={1} margin='10px'>
                                    <Text margin='1'>Consumer</Text>
                                </Radio>
                                <Radio value="provider" my={1}>
                                    <Text margin='1'>Provider</Text>
                                </Radio>
                            </HStack>
                        </Radio.Group>
                    </VStack>

                    <VStack>
                        <Center>
                            <Text margin='2'>Profile Picture</Text>
                        </Center>
                        <Input onChangeText={handleProfilePictureChange} variant='rounded' placeholder='https://link-to-profile-picture.com/image.png' />
                    </VStack>
                    
                    <Button onPress={handleSignup} backgroundColor='#fff9a1' shadow='5' _text={{color: 'black'}}>
                        Sign Me Up!
                    </Button>

                    <VStack>
                        <Text>Already have an account?</Text>
                        <Button
                            backgroundColor='#fff9a1'
                            shadow='5'
                            _text={{color: 'black'}}
                            onPress={() =>
                                navigation.navigate("Login")
                            }
                        >
                            Log In instead
                        </Button>
                    </VStack>
                </VStack>
            </ScrollView>
        </Center>
    )
}

export default SignUpView;