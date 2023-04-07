import React, { useState, useEffect } from "react";
import { Box, Image, HStack, Flex, Container, AspectRatio } from "@chakra-ui/react";
function AdsSpace(props) {
    return(
        <>
            {/* <Flex justify='center' mt='0' paddingTop='1em' paddingBottom={'1em'}> */}
                <AspectRatio maxW='100vw' maxH='250px' ratio={4/3}>
                    <Image src={props.src}>

                    </Image>

                </AspectRatio>
            {/* </Flex> */}
        </>
    )
}

export default AdsSpace;
