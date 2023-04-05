import { StarIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/layout";
import Rating from "./Rating";
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Avatar, Grid, GridItem, HStack } from "@chakra-ui/react";
function Review(props) {
    console.log(props)
  return (
    <>
        <AccordionItem>
            <HStack p={3}>
            <Avatar src={props.getImageSrc} />
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                {props.name}
                <Rating value={props.value}/>
                </Box>
                
                <AccordionIcon />
            </AccordionButton>
            </HStack>
            <AccordionPanel pb={4}>
                {props.description}
            </AccordionPanel>
        </AccordionItem>
    </>
  );
}

export default Review;