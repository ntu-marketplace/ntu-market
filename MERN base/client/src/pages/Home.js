import React from "react";
import { Container } from "@chakra-ui/react";
import PhishingAlert from '../components/PhishingAlert';
import Categories from '../components/Categories';
import FeaturedItems from '../components/FeaturedItems';
import Navbar from "../components/Navbar";

function Home(){
    return(
      <>
      <Navbar/>
        <Container
        mt='0'
        mb='0'
        ml='0'
        mr='0'
        minWidth='100%'
          >
          <PhishingAlert/>
          <Categories/>
          <FeaturedItems/>
        </Container>
      </>
    )
}
export default Home;