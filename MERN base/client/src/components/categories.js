import React from "react";
import { Box, Heading, Divider, Grid, GridItem, SimpleGrid, Text, Image, VStack} from "@chakra-ui/react";
import sports from '../media/sports.jpg'

function Categories(props) {
    return(
        <GridItem display='flex' alignItems='flex-start' paddingTop='0.5em'>
            <VStack>
                <Image
                    shadow='base'
                    borderRadius='full'
                    boxSize={['4em','5em','6em']}
                    src={props.src} />
                <Heading fontSize={['xs','xs','small']}>{props.title}</Heading>                          
            </VStack>
        </GridItem>
    )
}
export default Categories;