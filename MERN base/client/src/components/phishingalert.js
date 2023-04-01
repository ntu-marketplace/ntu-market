import React, { useState, useEffect } from "react";
import { Box, Text, Heading, Flex } from "@chakra-ui/react";
function PhishingAlert(props) {
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
                    <Heading size={['sm','sm','md']} marginBottom='1' >{props.title}</Heading>
                    <Text>{props.content}</Text>

            </Box>
        </Flex>
    )
}

export default PhishingAlert;
