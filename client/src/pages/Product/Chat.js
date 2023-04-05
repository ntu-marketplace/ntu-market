import { Container, Heading, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Chat(){
    return(
        <>
        <Container w='full' h='full' bg='green.400'>
        <Heading>Chat Page</Heading>
            <br />
            <br />
            <Link to='/details/payment'>
                <Button>Confirm Offer</Button>
            </Link>
        </Container>
        </>
    )
}
export default Chat;