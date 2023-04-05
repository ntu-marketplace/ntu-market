import { Container, Heading, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Payment(){
    return(
        <>
        <Container w='full' h='full' bg='green.400'>
        <Heading>Payment Page</Heading>
            <br />
            <br />
            <Link to='/details/confirmationBuy'>
                <Button>Pay</Button>
            </Link>
        </Container>
        </>
    )
}
export default Payment;