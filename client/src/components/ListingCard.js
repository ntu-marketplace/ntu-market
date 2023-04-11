import { Box, Card, CardBody, Image, Stack, Text, Divider, CardFooter, Button, ButtonGroup, Heading, AspectRatio, GridItem, Flex } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { StarIcon, DeleteIcon } from '@chakra-ui/icons';
import '../App.css'
import axios from "axios";

function ListingCard(props) {    
    const [isDeleteButton, setIsDeleteButton] = useState(false);
    const [isFavourited, setIsFavourited] = useState(false);
    const [isSold, setIsSold] = useState(false);

    const handleDeleteItems = async (listingId) => { 
        try{
            const res = await axios.delete(`https://marketdb.herokuapp.com/delete-item/${listingId}`);
          } catch (e){
            console.log("Error in deleting why sia", e);
          }
    }
    console.log(props)
    const toggleFavourite = () => {
        setIsFavourited(!isFavourited);
      };

    const updateFavourites = async (listingId) =>{
        var value = 0;
        if(props.isFav == 0){
            value = 1 ;
        }
        else{
            value=0;
        }
        const update = {isFavourited: value}
        try{
            const res = await axios.patch(`https://marketdb.herokuapp.com/patch-item/${listingId}`, update)
            .then(response=>console.log(response.data));
          } catch (e){
            console.log("Error in updating why sia", e);
          }
    }
    const check = () => {
        if(props.isFav == 1){
            setIsFavourited(true);
        }
        else{
            setIsFavourited(false);
        }
        if(props.isBought == 1){
            setIsSold(true);
        }
        else{
            setIsSold(false);
        }
        if(localStorage.getItem('isSuperAdmin')=='true'){
            setIsDeleteButton(true);
            return;
        }
        else{
            setIsDeleteButton(false)
        }
        return;
    }

    useEffect(()=>{
        check();
    },[isDeleteButton]);
    return(
        <GridItem color={"greenyellow"} paddingY={4}>
            <Card maxW='sm' borderRadius={"3xl"}>
                <CardBody>
                    <AspectRatio maxW='100vw' maxH='230px' ratio={4/3}>
                        <Image
                        src={props.src}>
                        </Image>
                    </AspectRatio>
                    
                    <Stack mt='6' spacing='3'>
                    <Heading size='md' fontFamily="sans-serif">
                        {props.title}
                        <Button align="right" variant='ghost' colorScheme='blue' onClick={() =>{
                            updateFavourites(props.id);
                            }}>
                            <StarIcon color={isFavourited? "yellow.500" : "gray.500"} ></StarIcon>
                        </Button>
                    </Heading>
                    
                    <AspectRatio maxH='50px'>
                    <Text lineHeight="1.2" fontFamily="sans-serif" fontSize="xl" textAlign="left">
                        {props.description}
                    </Text>

                    </AspectRatio>
                    {isSold && (
                        <Box
                            position='absolute'
                            top='186px'
                            left='20px'
                            width='30%'
                            height='10%'
                            backgroundColor='blue.500'
                            opacity='0.8'
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                            flexDirection='column'
                        >
                            <Text color='white' fontWeight='bold' fontSize='lg'>
                                Sold
                            </Text>
                        </Box>
                    )}
                    <Text color='blue.600' fontSize='2xl'>
                        $ {props.price}
                    </Text>
                    </Stack>
                </CardBody>
                {<Divider />}
                <CardFooter>
                    <ButtonGroup className={isSold ? "grey-filter": ""}>
                        <Button variant='solid' colorScheme='blue'>
                            Chat with buyer
                        </Button>
                        { isDeleteButton && 
                        <Button variant='solid' colorScheme='red' onClick={() => handleDeleteItems(props.id)}>
                            <DeleteIcon/>
                        </Button>}
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </GridItem>
    )
}

export default ListingCard;