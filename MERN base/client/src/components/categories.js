import React from "react";
import { Box, Heading, Divider, Grid, GridItem, SimpleGrid, Text, Image, VStack} from "@chakra-ui/react";
import sports from '../media/sports.jpg'

function Categories() {
    return(
        <center>
            <Heading mb={4} size='lg' >Categories</Heading>
            <Divider w='40%'></Divider>
            <Grid 
                autoFlow='column'
                autoColumns={['21%', '21%','15%']}
                w='90vw'
                overflowX='auto'
                overflowY='hidden'
                gap={3}
                mt='1.5em'
                mb='1.5em'
                sx={{
                    '&::-webkit-scrollbar': {
                        display : 'hidden'
                    }
                }} >
                    <GridItem display='flex' alignItems='flex-start' paddingTop='0.5em'>
                        <VStack>
                            <Image
                                shadow='base'
                                borderRadius='full'
                                boxSize={['4em','5em','6em']}
                                src={sports} >
                                </Image>
                            <Heading fontSize={['xs','xs','small']}>Sports & Lifestyle</Heading>                          
                        </VStack>
                    </GridItem>
                    <GridItem display='flex' alignItems='flex-start' paddingTop='0.5em'> 
                        <VStack>
                            <Image
                                shadow='base'
                                borderRadius='full'
                                boxSize={['4em','5em','6em']}
                                src={sports} >
                                </Image>
                            <Heading fontSize={['xs','xs','small']}>Electronics</Heading>                          
                        </VStack>
                    </GridItem>
                    <GridItem display='flex' alignItems='flex-start' paddingTop='0.5em'>
                        <VStack>
                            <Image
                                shadow='base'
                                borderRadius='full'
                                boxSize={['4em','5em','6em']}
                                src={sports} >
                                </Image>
                            <Heading fontSize={['xs','xs','small']}>Home Appliances</Heading>                          
                        </VStack>
                    </GridItem>
                    <GridItem display='flex' alignItems='flex-start' paddingTop='0.5em'>
                        <VStack>
                            <Image
                                shadow='base'
                                borderRadius='full'
                                boxSize={['4em','5em','6em']}
                                src={sports} >
                                </Image>
                            <Heading fontSize={['xs','xs','small']}>Fashion</Heading>                          
                        </VStack>
                    </GridItem>
                    <GridItem display='flex' alignItems='flex-start' paddingTop='0.5em'>
                        <VStack>
                            <Image
                                shadow='base'
                                borderRadius='full'
                                boxSize={['4em','5em','6em']}
                                src={sports} >
                                </Image>
                            <Heading fontSize={['xs','xs','small']}>Vehicles</Heading>                          
                        </VStack>
                    </GridItem>
                    <GridItem display='flex' alignItems='flex-start' paddingTop='0.5em'>
                        <VStack>
                            <Image
                                shadow='base'
                                borderRadius='full'
                                boxSize={['4em','5em','6em']}
                                src={sports} >
                                </Image>
                            <Heading fontSize={['xs','xs','small']}>Skincare</Heading>                          
                        </VStack>
                    </GridItem>
                    <GridItem display='flex' alignItems='flex-start' paddingTop='0.5em'>
                        <VStack>
                            <Image
                                shadow='base'
                                borderRadius='full'
                                boxSize={['4em','5em','6em']}
                                src={sports} >
                                </Image>
                            <Heading fontSize={['xs','xs','small']}>Decoration & Furniture</Heading>                          
                        </VStack>
                    </GridItem>
                    <GridItem display='flex' alignItems='flex-start' paddingTop='0.5em'>
                        <VStack>
                            <Image
                                shadow='base'
                                borderRadius='full'
                                boxSize={['4em','5em','6em']}
                                src={sports} >
                                </Image>
                            <Heading fontSize={['xs','xs','small']}>Study Material</Heading>                          
                        </VStack>
                    </GridItem>
                    <GridItem display='flex' alignItems='flex-start' paddingTop='0.5em'>
                        <VStack>
                            <Image
                                shadow='base'
                                borderRadius='full'
                                boxSize={['4em','5em','6em']}
                                src={sports} >
                                </Image>
                            <Heading fontSize={['xs','xs','small']}>Gaming</Heading>                          
                        </VStack>
                    </GridItem>
                    <GridItem display='flex' alignItems='flex-start' paddingTop='0.5em'>
                        <VStack>
                            <Image
                                shadow='base'
                                borderRadius='full'
                                boxSize={['4em','5em','6em']}
                                src={sports} >
                                </Image>
                            <Heading fontSize={['xs','xs','small']}>Services</Heading>                          
                        </VStack>
                    </GridItem>
                    
                    
            </Grid>
        </center>
    )
}
export default Categories;