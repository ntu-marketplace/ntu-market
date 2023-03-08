import React from "react";
import { Box, Text, Heading, Flex } from "@chakra-ui/react";
// bhar to make this loop through a bunch of messages and not just one
function PhishingAlert() {
    return(
        <Flex justify='center' mt='0' paddingTop='1em' paddingBottom={'1em'}>
            <Box 
                bg='#fffafa' 
                borderWidth='1px' 
                borderRadius='1em' 
                w='90vw' 
                borderColor='#c53045'
                padding='0.8em'
                >
                    <Heading size={['sm','sm','md']} marginBottom='1' >Protect yourself from phishing scams!</Heading>
                    <Text>Do not enter your contact, banking details or OTP to receive payment.</Text>

            </Box>
        </Flex>
    )
}

export default PhishingAlert;