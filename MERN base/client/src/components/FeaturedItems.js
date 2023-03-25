import React from "react";
import { 
        SimpleGrid, 
        Card, 
        Text, 
        Heading, 
        GridItem, 
        CardBody,  
        Image, 
        VStack, 
        HStack, 
        Avatar, 
        Divider
        } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import axios from "axios";

export default class FeaturedItems extends React.Component {
    state = {
        listings: []
      }
    componentDidMount() {
        axios.get(`http://localhost:8080/get-items`)
          .then(res => {
            const listings = res.data;
            // console.log(listings);
            this.setState({ listings });
          })
      }
      render() {
        return (
          <center>
            <Heading mb={4} size={['lg']}>Featured Items</Heading>
            <Divider width='40%'/>
            <SimpleGrid
              maxWidth='90vw'
              // templateColumns={['repeat(2,1fr)','repeat(3,1fr)','repeat(5,1fr)']}
              mt='1.5em'
              mb='1em'
              minChildWidth="30%"
              gap={6}
            >
              {
                this.state.listings
                .map(listing =>
                  <GridItem>
                    <Link to='/details'>
                      <Card>
                        <CardBody display='flex' flexDirection='column' alignItems='center'>
                          <Image src={listing.imageSrc[0]} h='8em' w='8em' mb='5'></Image>
                          <VStack display='flex' alignItems='flex-start'>
                              <Heading size='xs'>{listing.productTitle}</Heading>
                              <HStack spacing={5} display='flex' align='center'>
                                  <Heading size='sm' color='#e75425'>{listing.price}</Heading>
                                  <Text fontSize='xs' color='grey'>Brand New</Text>
                                  <StarIcon size='1em' color='#3c3c3c'></StarIcon>
                              </HStack>
                              <HStack>
                                  <Avatar size='xs'></Avatar>
                                  <Text fontSize='xs' color='grey'>{listing.sellerUsername}</Text>
                              </HStack>                                  
                          </VStack>
                        </CardBody>
                      </Card>
                    </Link>
                  </GridItem>
                )
              }
            </SimpleGrid>
          </center>
        )
      }
}
// keeping as a reference for bhar
//                 <GridItem>
//                     <Link to='/details'>
//                         <Card>
//                             <CardBody display='flex' flexDirection='column' alignItems='center'>
//                                 <Image src={iphone} h='8em' w='8em' mb='5'></Image>
//                                 <VStack display='flex' alignItems='flex-start'>
//                                     <Heading size='xs'>Iphone 14 Pro 256GB</Heading>
//                                     <HStack spacing={5} display='flex' align='center'>
//                                         <Heading size='sm' color='#e75425'>$1269</Heading>
//                                         <Text fontSize='xs' color='grey'>Brand New</Text>
//                                         <StarIcon size='1em' color='#3c3c3c'></StarIcon>
//                                     </HStack>
//                                     <HStack>
//                                         <Avatar size='xs'></Avatar>
//                                         <Text fontSize='xs' color='grey'>Username1234</Text>
//                                     </HStack>                                  
//                                 </VStack>
//                             </CardBody>
//                         </Card>
//                     </Link>
//                 </GridItem>