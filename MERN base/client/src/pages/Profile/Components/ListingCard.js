import { Grid, GridItem, Card, CardBody, Image, Stack, Text, Divider, CardFooter, Button, ButtonGroup, Heading } from "@chakra-ui/react";
import Description from "./Description";
function ListingCard(props) {
    return(
        <>
        <Grid
            templateAreas={`"nav main"
                            "nav main"`}
            gridTemplateRows={'50px 1fr 30px'}
            gridTemplateColumns={'150px 1fr'}
            h='800px'
            gap='1'
            color='blackAlpha.700'
            fontWeight='bold'
            >
            <GridItem pl='3' bg='white.300' area={'nav'}>
                <Description/>
            </GridItem>
            <GridItem pl='3' bg='white.300' area={'main'}>
            <Card maxW='sm'>
            <CardBody>
                <Image
                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                <Heading size='md'>Living room Sofa</Heading>
                <Text>
                    This sofa is perfect for modern tropical spaces, baroque inspired
                    spaces, earthy toned spaces and for people who love a chic design with a
                    sprinkle of vintage design.
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                    $450
                </Text>
                </Stack>
            </CardBody>
            <Divider />
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
        </Grid>
        
        </>
    )
}

export default ListingCard;