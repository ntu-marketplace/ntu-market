import React from "react";
import { Container } from "@chakra-ui/react";
import PhishingAlert from '../components/phishingalert';
import Categories from '../components/categories';
import FeaturedItems from '../components/FeaturedItems';
import Header from "../components/Header";
import Footer from "../components/Footer";
//might rename this to door
function House(){
    return(
      <>
      <Header/>
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
        <Footer/>
      </>
    )
}
export default House;