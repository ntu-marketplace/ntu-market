import { Button, Container , Heading} from "@chakra-ui/react";
import React from "react";
import { Link, Outlet } from "react-router-dom";

function SellerProfile(){
    return(
        <>
        <></>
        <Container w='full' h='full' bg='green.300'>
            <Heading>Seller Profile Page</Heading>
            <br /><br />
            <Link to='listings'>
                <Button>Listings</Button>
            </Link>
            <Link to='reviews'>
                <Button>Reviews</Button>
            </Link>
        </Container>
        <Outlet/>
        </>
    )
}
export default SellerProfile;