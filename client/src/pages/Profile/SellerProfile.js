import { StarIcon } from "@chakra-ui/icons";
import { Button, Container , Heading, Tab, Tabs, TabList, TabPanel, TabPanels, Flex, Avatar, Box, Center, VStack, HStack, Text, Divider} from "@chakra-ui/react";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import Background from "../../components/Background";
import Listings from "../../components/listings";
import Navbar from "../../components/navbar";
import Reviews from "../../components/reviews";

function SellerProfile(){
    return(
        <>
        <Navbar/>
        <Background>
            <Box h='20vh' bg=''></Box>
            <Flex flexDirection="row" minW='94vw'>
                <Container maxW="20vw" mr='7'>
                    <Flex
                        flexDirection="column"
                        alignItems="Center">
                            <VStack>
                                <Avatar boxSize="12em" ></Avatar>
                                <Heading color="white">Eren Yaegar</Heading>
                                <Heading size="sm" color="white">@aotisbest</Heading>
                                <br/>
                                <HStack>
                                    <Text color="white">5.0</Text>
                                    <StarIcon color="gold"></StarIcon>
                                    <StarIcon color="gold"></StarIcon>
                                    <StarIcon color="gold"></StarIcon>
                                    <StarIcon color="gold"></StarIcon>
                                    <StarIcon color="gold"></StarIcon>
                                    <Text color="white">(12)</Text>
                                </HStack>
                                <br/>
                                <Text color="white">An anime nerd who sells his old anime toys and used phones. I usually deal in Tampines or Somerset depending on timing.</Text>
                            </VStack>                     
                    </Flex>
                </Container>
                <Divider orientation="vertical" h="100vh"></Divider>
                <Container maxW="80vw" m='0' overflow="hidden" overflowY="auto">
                    <Tabs colorScheme='blue'>
                        <TabList>
                            <Tab color='white'>Listings</Tab>
                            <Tab color="white">Reviews</Tab>
                        </TabList>

                        <TabPanels overflow="hidden">
                            <TabPanel overflow="hidden">
                                <Listings/>
                            </TabPanel>
                            <TabPanel>
                                <Reviews/>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Container>    
            </Flex>
        </Background>    
        </>
    )
}
export default SellerProfile;