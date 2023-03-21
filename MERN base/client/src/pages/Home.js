import React from "react";
import { Container, HStack } from "@chakra-ui/react";
import PhishingAlert from '../components/phishingalert';
import ListingCard from '../components/ListingCard';
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import Background from "../components/Background";
function Home(){
  //fetch this as a json response. @ Jeremy
  const items = [
    {
        title: "Living Room Sofa",
        price: "$450",
        description:
          "This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.",
        getImageSrc: () => require("../../src/media/any.jpg"),
        favourited: false,
        buyer: true,
    },
    {
      title: "Living Room Sofa",
      price: "$450",
      description:
        "This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.",
      getImageSrc: () => require("../../src/media/any.jpg"),
      favourited: false,
      buyer: true,
    },

]
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
        <HStack>
          {items.map((item) => (
            <ListingCard
              key = {item.title}
              title = {item.title}
              price = {item.price}
              description = {item.description}
              buyer = {item.buyer}
              favourited = {item.favourited}
              imageSrc={item.getImageSrc()}
            />
          ))}
        </HStack>

        </Container>
        
      <Footer/>
      </>
    )
}
export default Home;