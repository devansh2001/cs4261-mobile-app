// Used this documentation: https://docs.nativebase.io/input, https://docs.nativebase.io/image,
// https://docs.nativebase.io/box

import React, { useRef, useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/core";
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
  Button,
} from "native-base";
import TopBar from "./sharedComponents/TopBar";
import { ScrollView } from "react-native";




const NewReviewView = ({navigation, route}) => {

const [review_text, setReview] = useState('');
const [review_rating, setRating]= useState('');

const handleReview = (e) => {
    setReview(e)
}
const handleRating = (e) => {
    setRating(e)
}

const { provider,service_id, user } = route.params;

const newReview = async () => {

    const headers = new Headers();
    // https://stackoverflow.com/a/52936747
    headers.append('Access-Control-Allow-Origin', 'http://localhost')
    headers.append('Content-Type', 'application/json')
    const body = {
        'review_text': review_text,
        'review_rating': review_rating,
        'provider_id': provider,
        'consumer_id': user
    }
    let url = 'https://cs4261-reviews-service.herokuapp.com/create-review';
    await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
    })
    .then(data => data.json())
    .then(data => console.log(data))
    .then(() => alert('Review submitted successfully'))
    .then(() => navigation.navigate('Providers'))
    .catch(err => console.log(err))
  }

    var color = "#fff785"
    // https://stackoverflow.com/a/70110510
    useFocusEffect(
        useCallback(() => {
            const startTime = Date.now();
    
          return async () => {
            const endTime = Date.now();

            const timeTaken = endTime - startTime
            
            // send time taken to server
            const headers = new Headers();
            headers.append('Access-Control-Allow-Origin', 'https://localhost')
            headers.append('Content-Type', 'application/json')

            const body = {
                'screen': 'NewReviewView',
                'timeTaken': timeTaken
            };
            
            await fetch('https://cs4261-usage-metrics-service.herokuapp.com/time-on-screen', {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(body)
            })
            .then(data => data.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
            };
        }, [])
    );

    return (
        <ScrollView>
        <VStack h="100%" w="100%">
            <Center h="100%" w="100%">
                <TopBar/>
                <VStack h="95%" w="100%" py={2} px={2} space={3}>
                    <Heading>New Review</Heading>
                    <Text>Star Rating (5 is best)</Text>
                    <Input
                        onChangeText={handleRating}
                        placeholder="1 to 5"
                        w="100%"
                    />
                    <Text>Review</Text>
                    <Input
                        placeholder="Great job!"
                        w="100%"
                        h="20%" //FIX THIS, TEXT DOES NOT WRAP
                        onChangeText={handleReview}
                    />
                    <Container py={10}>
                    <Button
                        bg={color}
                        rounded="lg"
                        borderColor="#c4c4c4"
                        borderWidth="1"
                        shadow="2"
                        onPress={
                            newReview
                        }
                    >
                        <Text>Submit</Text>
                    </Button>
                    </Container>
                </VStack>
            </Center>

        </VStack>
        </ScrollView>
    )
}

export default NewReviewView;