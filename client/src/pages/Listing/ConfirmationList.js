import { Container, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ConfirmationList(){
    const navigate = useNavigate()
    useEffect(() =>{
        setTimeout(() =>{
            navigate('/myProfile/myListings')
        }, 1000)
    })
    return(
        <>
        <Container w='full' h='full' bg='green.400'>
            <Heading>Listing Posted</Heading>
            <br /><br />
        </Container>
        </>
    )
}
export default ConfirmationList;