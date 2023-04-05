import { Button, Container, Heading } from "@chakra-ui/react";
import React from "react";
import { Link, Outlet } from "react-router-dom";

function Listing(){
    return(
        <>
        <Container w='full' h='full' bg='green.400'>
            <Heading>New Listing</Heading>
            <br /><br />
            <Link to='confirmation'>
                <Button>
                    Post Listing
                </Button>
            </Link>
        </Container>
        <Outlet/>
        </>
    )
}
export default Listing;