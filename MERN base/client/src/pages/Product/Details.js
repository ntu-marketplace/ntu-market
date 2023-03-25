import { Button, Container, Heading } from "@chakra-ui/react";
import React from "react";
import { Link, Outlet } from "react-router-dom";

function Details(){
    return(
        <>
        <Container w='full' h='full' bg='green.400'>
            <Heading>Details Page</Heading>
            <br />
            <br />
            <Link to='chat'>
                <Button> Chat With Buyer</Button>
            </Link>
            <Link to='/sellerProfile'>
                <Button> Seller Profile</Button>
            </Link>
        </Container>
        <Outlet/>
        </>
    )
}
export default Details;