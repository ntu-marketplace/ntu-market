import { Container, Stat, StatGroup,StatLabel,StatNumber,StatHelpText,StatArrow } from "@chakra-ui/react";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";

function Notifications(){
    return(
        <>
        {/* Need to know what this is for. Can show stats. */}
        <Navbar />
        <Container>

        <StatGroup>
            <Stat>
                <StatLabel>Sent</StatLabel>
                <StatNumber>345,670</StatNumber>
                <StatHelpText>
                <StatArrow type='increase' />
                23.36%
                </StatHelpText>
            </Stat>

            <Stat>
                <StatLabel>Clicked</StatLabel>
                <StatNumber>45</StatNumber>
                <StatHelpText>
                <StatArrow type='decrease' />
                9.05%
                </StatHelpText>
            </Stat>
            </StatGroup>
        </Container>
        <Footer />
        </>
    )
}
export default Notifications;