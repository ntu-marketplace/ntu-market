import { Container, HStack } from "@chakra-ui/react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import ListingCard from "../components/ListingCard";

function Wishlist(){
    const wishes = [
        {
            title: "Microsoft Computer",
            price: "$200",
            description:
              "Any Description goes .",
            getImageSrc: () => require("../../src/media/anything.jpg"),
            favourited: true,
            buyer: true,
        },
        {
            title: "Microsoft Computer",
            price: "$200",
            description:
              "Any Description goes .",
            getImageSrc: () => require("../../src/media/anything.jpg"),
            favourited: true,
            buyer: true,
        },
        {
            title: "Microsoft Computer",
            price: "$200",
            description:
              "Any Description goes .",
            getImageSrc: () => require("../../src/media/anything.jpg"),
            favourited: true,
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
                <HStack>
                    {wishes.map((wish) => (
                    <ListingCard
                    key = {wish.title}
                    title = {wish.title}
                    price = {wish.price}
                    description = {wish.description}
                    imageSrc={wish.getImageSrc()}
                    favourited = {wish.favourited}
                    buyer={wish.buyer}
                    />))}
                </HStack>
            </Container>
          
        <Footer/>
        </>
    )
}
export default Wishlist;