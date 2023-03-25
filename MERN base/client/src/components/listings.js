import { Center, Container, Heading, Avatar, Text, CardBody, VStack, HStack, Card, Link, GridItem, Image, SimpleGrid } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import iphone from "../media/iphone.png"
import React from "react";

function Listings(){
    return(
        <>
        <Center>
        <SimpleGrid
                maxWidth='90%'
               // templateColumns={['repeat(2,1fr)','repeat(3,1fr)','repeat(5,1fr)']}
                mt='1.5em'
                mb='1em'
                minChildWidth="30%"
                gap={6}
                h="100%"
                overflow="hidden"
                overflowY="auto"
            >
                <GridItem>
                    <Link to='/details'>
                        <Card>
                            <CardBody display='flex' flexDirection='column' alignItems='center'>
                                <Image src={iphone} h='8em' w='8em' mb='5'></Image>
                                <VStack display='flex' alignItems='flex-start'>
                                    <Heading size='xs'>Iphone 14 Pro 256GB</Heading>
                                    <HStack spacing={5} display='flex' align='center'>
                                        <Heading size='sm' color='#e75425'>$1269</Heading>
                                        <Text fontSize='xs' color='grey'>Brand New</Text>
                                        <StarIcon size='1em' color='#3c3c3c'></StarIcon>
                                    </HStack>
                                    <HStack>
                                        <Avatar size='xs'></Avatar>
                                        <Text fontSize='xs' color='grey'>Username1234</Text>
                                    </HStack>                                  
                                </VStack>
                            </CardBody>
                        </Card>
                    </Link>
                </GridItem>
                <GridItem>
                    <Link to='/details'>
                        <Card>
                            <CardBody display='flex' flexDirection='column' alignItems='center'>
                                <Image src={iphone} h='8em' w='8em' mb='5'></Image>
                                <VStack display='flex' alignItems='flex-start'>
                                    <Heading size='xs'>Iphone 14 Pro 256GB</Heading>
                                    <HStack spacing={5} display='flex' align='center'>
                                        <Heading size='sm' color='#e75425'>$1269</Heading>
                                        <Text fontSize='xs' color='grey'>Brand New</Text>
                                        <StarIcon size='1em' color='#3c3c3c'></StarIcon>
                                    </HStack>
                                    <HStack>
                                        <Avatar size='xs'></Avatar>
                                        <Text fontSize='xs' color='grey'>Username1234</Text>
                                    </HStack>                                  
                                </VStack>
                            </CardBody>
                        </Card>
                    </Link>
                </GridItem>
                <GridItem>
                    <Link to='/details'>
                        <Card>
                            <CardBody display='flex' flexDirection='column' alignItems='center'>
                                <Image src={iphone} h='8em' w='8em' mb='5'></Image>
                                <VStack display='flex' alignItems='flex-start'>
                                    <Heading size='xs'>Iphone 14 Pro 256GB</Heading>
                                    <HStack spacing={5} display='flex' align='center'>
                                        <Heading size='sm' color='#e75425'>$1269</Heading>
                                        <Text fontSize='xs' color='grey'>Brand New</Text>
                                        <StarIcon size='1em' color='#3c3c3c'></StarIcon>
                                    </HStack>
                                    <HStack>
                                        <Avatar size='xs'></Avatar>
                                        <Text fontSize='xs' color='grey'>Username1234</Text>
                                    </HStack>                                  
                                </VStack>
                            </CardBody>
                        </Card>
                    </Link>
                </GridItem>
                <GridItem>
                    <Link to='/details'>
                        <Card>
                            <CardBody display='flex' flexDirection='column' alignItems='center'>
                                <Image src={iphone} h='8em' w='8em' mb='5'></Image>
                                <VStack display='flex' alignItems='flex-start'>
                                    <Heading size='xs'>Iphone 14 Pro 256GB</Heading>
                                    <HStack spacing={5} display='flex' align='center'>
                                        <Heading size='sm' color='#e75425'>$1269</Heading>
                                        <Text fontSize='xs' color='grey'>Brand New</Text>
                                        <StarIcon size='1em' color='#3c3c3c'></StarIcon>
                                    </HStack>
                                    <HStack>
                                        <Avatar size='xs'></Avatar>
                                        <Text fontSize='xs' color='grey'>Username1234</Text>
                                    </HStack>                                  
                                </VStack>
                            </CardBody>
                        </Card>
                    </Link>
                </GridItem>
                <GridItem>
                    <Link to='/details'>
                        <Card>
                            <CardBody display='flex' flexDirection='column' alignItems='center'>
                                <Image src={iphone} h='8em' w='8em' mb='5'></Image>
                                <VStack display='flex' alignItems='flex-start'>
                                    <Heading size='xs'>Iphone 14 Pro 256GB</Heading>
                                    <HStack spacing={5} display='flex' align='center'>
                                        <Heading size='sm' color='#e75425'>$1269</Heading>
                                        <Text fontSize='xs' color='grey'>Brand New</Text>
                                        <StarIcon size='1em' color='#3c3c3c'></StarIcon>
                                    </HStack>
                                    <HStack>
                                        <Avatar size='xs'></Avatar>
                                        <Text fontSize='xs' color='grey'>Username1234</Text>
                                    </HStack>                                  
                                </VStack>
                            </CardBody>
                        </Card>
                    </Link>
                </GridItem>
                <GridItem>
                    <Link to='/details'>
                        <Card>
                            <CardBody display='flex' flexDirection='column' alignItems='center'>
                                <Image src={iphone} h='8em' w='8em' mb='5'></Image>
                                <VStack display='flex' alignItems='flex-start'>
                                    <Heading size='xs'>Iphone 14 Pro 256GB</Heading>
                                    <HStack spacing={5} display='flex' align='center'>
                                        <Heading size='sm' color='#e75425'>$1269</Heading>
                                        <Text fontSize='xs' color='grey'>Brand New</Text>
                                        <StarIcon size='1em' color='#3c3c3c'></StarIcon>
                                    </HStack>
                                    <HStack>
                                        <Avatar size='xs'></Avatar>
                                        <Text fontSize='xs' color='grey'>Username1234</Text>
                                    </HStack>                                  
                                </VStack>
                            </CardBody>
                        </Card>
                    </Link>
                </GridItem>
                <GridItem>
                    <Link to='/details'>
                        <Card>
                            <CardBody display='flex' flexDirection='column' alignItems='center'>
                                <Image src={iphone} h='8em' w='8em' mb='5'></Image>
                                <VStack display='flex' alignItems='flex-start'>
                                    <Heading size='xs'>Iphone 14 Pro 256GB</Heading>
                                    <HStack spacing={5} display='flex' align='center'>
                                        <Heading size='sm' color='#e75425'>$1269</Heading>
                                        <Text fontSize='xs' color='grey'>Brand New</Text>
                                        <StarIcon size='1em' color='#3c3c3c'></StarIcon>
                                    </HStack>
                                    <HStack>
                                        <Avatar size='xs'></Avatar>
                                        <Text fontSize='xs' color='grey'>Username1234</Text>
                                    </HStack>                                  
                                </VStack>
                            </CardBody>
                        </Card>
                    </Link>
                </GridItem>
                <GridItem>
                    <Link to='/details'>
                        <Card>
                            <CardBody display='flex' flexDirection='column' alignItems='center'>
                                <Image src={iphone} h='8em' w='8em' mb='5'></Image>
                                <VStack display='flex' alignItems='flex-start'>
                                    <Heading size='xs'>Iphone 14 Pro 256GB</Heading>
                                    <HStack spacing={5} display='flex' align='center'>
                                        <Heading size='sm' color='#e75425'>$1269</Heading>
                                        <Text fontSize='xs' color='grey'>Brand New</Text>
                                        <StarIcon size='1em' color='#3c3c3c'></StarIcon>
                                    </HStack>
                                    <HStack>
                                        <Avatar size='xs'></Avatar>
                                        <Text fontSize='xs' color='grey'>Username1234</Text>
                                    </HStack>                                  
                                </VStack>
                            </CardBody>
                        </Card>
                    </Link>
                </GridItem>
                <GridItem>
                    <Link to='/details'>
                        <Card>
                            <CardBody display='flex' flexDirection='column' alignItems='center'>
                                <Image src={iphone} h='8em' w='8em' mb='5'></Image>
                                <VStack display='flex' alignItems='flex-start'>
                                    <Heading size='xs'>Iphone 14 Pro 256GB</Heading>
                                    <HStack spacing={5} display='flex' align='center'>
                                        <Heading size='sm' color='#e75425'>$1269</Heading>
                                        <Text fontSize='xs' color='grey'>Brand New</Text>
                                        <StarIcon size='1em' color='#3c3c3c'></StarIcon>
                                    </HStack>
                                    <HStack>
                                        <Avatar size='xs'></Avatar>
                                        <Text fontSize='xs' color='grey'>Username1234</Text>
                                    </HStack>                                  
                                </VStack>
                            </CardBody>
                        </Card>
                    </Link>
                </GridItem>
                <GridItem>
                    <Link to='/details'>
                        <Card>
                            <CardBody display='flex' flexDirection='column' alignItems='center'>
                                <Image src={iphone} h='8em' w='8em' mb='5'></Image>
                                <VStack display='flex' alignItems='flex-start'>
                                    <Heading size='xs'>Iphone 14 Pro 256GB</Heading>
                                    <HStack spacing={5} display='flex' align='center'>
                                        <Heading size='sm' color='#e75425'>$1269</Heading>
                                        <Text fontSize='xs' color='grey'>Brand New</Text>
                                        <StarIcon size='1em' color='#3c3c3c'></StarIcon>
                                    </HStack>
                                    <HStack>
                                        <Avatar size='xs'></Avatar>
                                        <Text fontSize='xs' color='grey'>Username1234</Text>
                                    </HStack>                                  
                                </VStack>
                            </CardBody>
                        </Card>
                    </Link>
                </GridItem>
                <GridItem>
                    <Link to='/details'>
                        <Card>
                            <CardBody display='flex' flexDirection='column' alignItems='center'>
                                <Image src={iphone} h='8em' w='8em' mb='5'></Image>
                                <VStack display='flex' alignItems='flex-start'>
                                    <Heading size='xs'>Iphone 14 Pro 256GB</Heading>
                                    <HStack spacing={5} display='flex' align='center'>
                                        <Heading size='sm' color='#e75425'>$1269</Heading>
                                        <Text fontSize='xs' color='grey'>Brand New</Text>
                                        <StarIcon size='1em' color='#3c3c3c'></StarIcon>
                                    </HStack>
                                    <HStack>
                                        <Avatar size='xs'></Avatar>
                                        <Text fontSize='xs' color='grey'>Username1234</Text>
                                    </HStack>                                  
                                </VStack>
                            </CardBody>
                        </Card>
                    </Link>
                </GridItem>
                <GridItem>
                    <Link to='/details'>
                        <Card>
                            <CardBody display='flex' flexDirection='column' alignItems='center'>
                                <Image src={iphone} h='8em' w='8em' mb='5'></Image>
                                <VStack display='flex' alignItems='flex-start'>
                                    <Heading size='xs'>Iphone 14 Pro 256GB</Heading>
                                    <HStack spacing={5} display='flex' align='center'>
                                        <Heading size='sm' color='#e75425'>$1269</Heading>
                                        <Text fontSize='xs' color='grey'>Brand New</Text>
                                        <StarIcon size='1em' color='#3c3c3c'></StarIcon>
                                    </HStack>
                                    <HStack>
                                        <Avatar size='xs'></Avatar>
                                        <Text fontSize='xs' color='grey'>Username1234</Text>
                                    </HStack>                                  
                                </VStack>
                            </CardBody>
                        </Card>
                    </Link>
                </GridItem>
                <GridItem>
                    <Link to='/details'>
                        <Card>
                            <CardBody display='flex' flexDirection='column' alignItems='center'>
                                <Image src={iphone} h='8em' w='8em' mb='5'></Image>
                                <VStack display='flex' alignItems='flex-start'>
                                    <Heading size='xs'>Iphone 14 Pro 256GB</Heading>
                                    <HStack spacing={5} display='flex' align='center'>
                                        <Heading size='sm' color='#e75425'>$1269</Heading>
                                        <Text fontSize='xs' color='grey'>Brand New</Text>
                                        <StarIcon size='1em' color='#3c3c3c'></StarIcon>
                                    </HStack>
                                    <HStack>
                                        <Avatar size='xs'></Avatar>
                                        <Text fontSize='xs' color='grey'>Username1234</Text>
                                    </HStack>                                  
                                </VStack>
                            </CardBody>
                        </Card>
                    </Link>
                </GridItem>
                <GridItem>
                    <Link to='/details'>
                        <Card>
                            <CardBody display='flex' flexDirection='column' alignItems='center'>
                                <Image src={iphone} h='8em' w='8em' mb='5'></Image>
                                <VStack display='flex' alignItems='flex-start'>
                                    <Heading size='xs'>Iphone 14 Pro 256GB</Heading>
                                    <HStack spacing={5} display='flex' align='center'>
                                        <Heading size='sm' color='#e75425'>$1269</Heading>
                                        <Text fontSize='xs' color='grey'>Brand New</Text>
                                        <StarIcon size='1em' color='#3c3c3c'></StarIcon>
                                    </HStack>
                                    <HStack>
                                        <Avatar size='xs'></Avatar>
                                        <Text fontSize='xs' color='grey'>Username1234</Text>
                                    </HStack>                                  
                                </VStack>
                            </CardBody>
                        </Card>
                    </Link>
                </GridItem>
                <GridItem>
                    <Link to='/details'>
                        <Card>
                            <CardBody display='flex' flexDirection='column' alignItems='center'>
                                <Image src={iphone} h='8em' w='8em' mb='5'></Image>
                                <VStack display='flex' alignItems='flex-start'>
                                    <Heading size='xs'>Iphone 14 Pro 256GB</Heading>
                                    <HStack spacing={5} display='flex' align='center'>
                                        <Heading size='sm' color='#e75425'>$1269</Heading>
                                        <Text fontSize='xs' color='grey'>Brand New</Text>
                                        <StarIcon size='1em' color='#3c3c3c'></StarIcon>
                                    </HStack>
                                    <HStack>
                                        <Avatar size='xs'></Avatar>
                                        <Text fontSize='xs' color='grey'>Username1234</Text>
                                    </HStack>                                  
                                </VStack>
                            </CardBody>
                        </Card>
                    </Link>
                </GridItem>
                <GridItem>
                    <Link to='/details'>
                        <Card>
                            <CardBody display='flex' flexDirection='column' alignItems='center'>
                                <Image src={iphone} h='8em' w='8em' mb='5'></Image>
                                <VStack display='flex' alignItems='flex-start'>
                                    <Heading size='xs'>Iphone 14 Pro 256GB</Heading>
                                    <HStack spacing={5} display='flex' align='center'>
                                        <Heading size='sm' color='#e75425'>$1269</Heading>
                                        <Text fontSize='xs' color='grey'>Brand New</Text>
                                        <StarIcon size='1em' color='#3c3c3c'></StarIcon>
                                    </HStack>
                                    <HStack>
                                        <Avatar size='xs'></Avatar>
                                        <Text fontSize='xs' color='grey'>Username1234</Text>
                                    </HStack>                                  
                                </VStack>
                            </CardBody>
                        </Card>
                    </Link>
                </GridItem>
                <GridItem>
                    <Link to='/details'>
                        <Card>
                            <CardBody display='flex' flexDirection='column' alignItems='center'>
                                <Image src={iphone} h='8em' w='8em' mb='5'></Image>
                                <VStack display='flex' alignItems='flex-start'>
                                    <Heading size='xs'>Iphone 14 Pro 256GB</Heading>
                                    <HStack spacing={5} display='flex' align='center'>
                                        <Heading size='sm' color='#e75425'>$1269</Heading>
                                        <Text fontSize='xs' color='grey'>Brand New</Text>
                                        <StarIcon size='1em' color='#3c3c3c'></StarIcon>
                                    </HStack>
                                    <HStack>
                                        <Avatar size='xs'></Avatar>
                                        <Text fontSize='xs' color='grey'>Username1234</Text>
                                    </HStack>                                  
                                </VStack>
                            </CardBody>
                        </Card>
                    </Link>
                </GridItem>
                <GridItem>
                    <Link to='/details'>
                        <Card>
                            <CardBody display='flex' flexDirection='column' alignItems='center'>
                                <Image src={iphone} h='8em' w='8em' mb='5'></Image>
                                <VStack display='flex' alignItems='flex-start'>
                                    <Heading size='xs'>Iphone 14 Pro 256GB</Heading>
                                    <HStack spacing={5} display='flex' align='center'>
                                        <Heading size='sm' color='#e75425'>$1269</Heading>
                                        <Text fontSize='xs' color='grey'>Brand New</Text>
                                        <StarIcon size='1em' color='#3c3c3c'></StarIcon>
                                    </HStack>
                                    <HStack>
                                        <Avatar size='xs'></Avatar>
                                        <Text fontSize='xs' color='grey'>Username1234</Text>
                                    </HStack>                                  
                                </VStack>
                            </CardBody>
                        </Card>
                    </Link>
                </GridItem>
            </SimpleGrid>
        </Center>
        </>
    )
}
export default Listings;