import { Box, Card, CardBody, Image, Stack, Text, Divider, CardFooter, Button, ButtonGroup, Heading, AspectRatio, GridItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { StarIcon, DeleteIcon } from '@chakra-ui/icons';
import '../App.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
const server = "https://marketdb.herokuapp.com";

function ListingCard(props) {    
    const [isDeleteButton, setIsDeleteButton] = useState(false);
    const [isFavourited, setIsFavourited] = useState(false);
    const [isSold, setIsSold] = useState(false);
    const navigate = useNavigate();

    const handleDeleteItems = async (listingId) => { 
        try{
            return await axios.delete(`${server}/delete-item/${listingId}`);
          } catch (e){
            console.log("Error in deleting why sia", e);
          }
    }

    const updateFavourites = async (listingId) =>{
        var value = 0;
        if(props.isFav === 0){
            value = 1 ;
        }
        else{
            value=0;
        }
        const update = {isFavourited: value}
        try{
            return await axios.patch(`${server}/patch-item/${listingId}`, update)
            .then(response=>console.log(response.data));
          } catch (e){
            console.log("Error in updating why sia", e);
          }
    }
    const check = () => {
        if(props.isFav === 1){
            setIsFavourited(true);
        }
        else{
            setIsFavourited(false);
        }
        if(props.isBought === 1){
            setIsSold(true);
        }
        else{
            setIsSold(false);
        }
        if(localStorage.getItem('isSuperAdmin') ==='true'){
            setIsDeleteButton(true);
            return;
        }
        else{
            setIsDeleteButton(false)
        }
        return;
    }

    const handleChatBuyer = async () => {
        if (props.seller._id !== localStorage.getItem("_id")) {
            props.setCurrentChat(props.seller);
            const myContactData = await fetch(server + "/contact", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    _id: localStorage.getItem("_id")
                })
            })
            const sellerContactData = await fetch(server + "/contact", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    _id: props.seller._id
                })
            })

            let myContact = await myContactData.json();
            if (myContact.length > 0) myContact = myContact[0].contacts;
            let sellerContact = await sellerContactData.json();
            if (sellerContact.length > 0) sellerContact = sellerContact[0].contacts;
            
            console.log(myContact)
            const newMyContact = !myContact.includes(props.seller._id) ? [...myContact, props.seller._id] : myContact
            const newSellerContact = !sellerContact.includes(localStorage.getItem("_id")) ? [...sellerContact, localStorage.getItem("_id")] : sellerContact
            console.log(newMyContact)
            await fetch(server + "/update-contact", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    _id: localStorage.getItem("_id"),
                    contacts: newMyContact
                })
            })
    
            await fetch(server + "/update-contact", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    _id: props.seller._id,
                    contacts: newSellerContact
                })
            })
            navigate('/myChats');
        } else {
            alert("You can't chat to yourself.")
        }
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
                        <Box position='absolute' top='186px' left='20px' width='30%' height='10%'
                            backgroundColor='blue.500' opacity='0.8' display='flex' justifyContent='center'
                            alignItems='center' 
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
                <Divider />
                <CardFooter>
                    <ButtonGroup className={isSold ? "grey-filter": ""}>
                        <Button onClick={handleChatBuyer} variant='solid' colorScheme='blue'>
                            Chat
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