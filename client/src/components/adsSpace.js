import React, { useState, useEffect } from "react";
import { Box, Text, Heading, Flex } from "@chakra-ui/react";
function AdsSpace(props) {
    return(
        <>
            <Flex justify='center' mt='0' paddingTop='1em' paddingBottom={'1em'}>
                <HStack >
                    <Image src={props.imageSrc}>

                    </Image>

                </HStack>
            </Flex>
        </>
    )
}

export default AdsSpace;
