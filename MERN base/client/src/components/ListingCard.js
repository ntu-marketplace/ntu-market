import { Card, CardBody, Image, Stack, Text, Divider, CardFooter, Button, ButtonGroup, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
function ListingCard(props) {    
    const [isEmptyButtons, setIsEmptyButtons] = useState(false);
    const check = () => {
        setIsEmptyButtons(props.buyer)
    }
    useEffect(()=>{
        check();
    });
    return(
        <>
        <Card maxW='sm'>
            <CardBody>
                <Image
                src={props.imageSrc}
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                <Heading size='md'>{props.title}</Heading>
                <Text>
                    {props.description}
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                    {props.price}
                </Text>
                </Stack>
            </CardBody>
            {isEmptyButtons && <Divider />}
            <CardFooter>
                <ButtonGroup spacing='2'>
                {props.buyer && <Button variant='solid' colorScheme='blue'>
                    Chat with buyer
                </Button>}
                {!props.favourited && <Button variant='ghost' colorScheme='blue'>
                    Add to Favourites
                </Button>}
                </ButtonGroup>
            </CardFooter>
        </Card>
        </>
    )
}

export default ListingCard;