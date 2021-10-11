// Used this documentation: https://docs.nativebase.io/input

import React, { useRef } from "react";
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
                    <Button backgroundColor='#fff9a1' shadow='5' _text={{color: 'black'}}>
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