import { Card, CardBody, Image, Stack, Text, Divider, CardFooter, Button, ButtonGroup, Heading, AspectRatio, GridItem, Flex } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { StarIcon, DeleteIcon } from '@chakra-ui/icons';
import axios from "axios";
function ListingCard(props) {    
    const [isDeleteButton, setIsDeleteButton] = useState(false);
    const [isFavourited, setIsFavourited] = useState(false);

    const handleDeleteItems = async (listingId) => { 
        try{
            const res = await axios.delete(`https://marketdb.herokuapp.com/delete-item/${listingId}`);
          } catch (e){
            console.log("Error in deleting why sia", e);
          }
    }

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
                        src={props.src}
                        />
                    </AspectRatio>
                    <Stack mt='6' spacing='3'>
                    <Heading size='md' fontFamily="sans-serif">
                        {props.title}
                        <Button align="right" variant='ghost' colorScheme='blue' onClick={() =>{
                            // toggleFavourite();
                            updateFavourites(props.id);
                            // addToFav();
                            }}>
                            <StarIcon color={isFavourited? "yellow.500" : "gray.500"} ></StarIcon>
                        </Button>
                    </Heading>
                    
                    <AspectRatio maxH='50px'>
                    <Text leftAlign fontFamily="serif" fontSize="xl">
                        {props.description}
                    </Text>

                    </AspectRatio>
                    <Text color='blue.600' fontSize='2xl'>
                        $ {props.price}
                    </Text>
                    </Stack>
                </CardBody>
                {<Divider />}
                <CardFooter>
                    <ButtonGroup >
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