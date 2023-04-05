import { Container, Heading } from "@chakra-ui/react";
import {React, useEffect} from "react";
import { useNavigate } from "react-router-dom";

function Confirmation(){
    const navigate = useNavigate()
    useEffect(() =>{
        setTimeout(() =>{
            navigate('/')
        }, 1000)
    })
    return(
        <>
        <Container w='full' h='full' bg='green.400'>
           <Heading>Buy Confirmation Page</Heading>
        </Container>
        
        </>
    )
}
export default Confirmation;