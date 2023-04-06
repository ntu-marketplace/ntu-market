import { Card, CardBody, Image, Stack, Text, Divider, CardFooter, Button, ButtonGroup, Heading, AspectRatio, GridItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from 'axios';
function ListingCard(props) {    
    const [isEmptyButtons, setIsEmptyButtons] = useState(false);
    const check = () => {
        setIsEmptyButtons(props.buyer)
    }
    useEffect(()=>{
        check();
    });
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
                    <Heading size='md'>{props.title}</Heading>
                    <AspectRatio maxH='50px'>
                    <Text leftAlign>
                        {props.description}
                    </Text>

                    </AspectRatio>
                    <Text color='blue.600' fontSize='2xl'>
                        {props.price}
                    </Text>
                    </Stack>
                </CardBody>
                {isEmptyButtons && <Divider />}
                <CardFooter>
                    <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                        Chat with buyer
                    </Button>
                    <Button variant='ghost' colorScheme='blue'>
                        Add to Favourites
                    </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </GridItem>
    )
}

export default ListingCard;