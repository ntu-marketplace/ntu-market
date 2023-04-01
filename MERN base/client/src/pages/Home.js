import { useState, useEffect } from "react";
import { Container, HStack, Heading, Divider, Grid} from "@chakra-ui/react";
import PhishingAlert from '../components/phishingalert';
import ListingCard from '../components/ListingCard';
import Navbar from "../components/navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Categories from "../components/categories";
function Home(){
  const [pAIndex, setPAIndex] = useState(1);
  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setPAIndex((pAIndex + 1)%4);
    },10000);
    return () => {
      clearInterval(intervalId);
    };
  })
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  
  const alerts = [
    {
      title:"Protect yourself from phishing scams!",
      content:"Do not enter your contact, banking details or OTP to receive payment."
    },
    {
      title:"Always check that the items are up to your standards!",
      content:"You deserve the best and the best only."
    },
    {
      title:"Flagged anonymous or suspicious users to admin!",
      content:"We all have a responsibility to keep NTU Marketplace safe."
    },
    {
      title:"Be careful not to exchange personal or private details with sellers!",
      content:"Keep a level of anonymity in order to prevent yourself from being stalked."
    },
  ];

  const[item,setItem] = useState(alerts[0]);
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
  const categoriesItems = [
    {
      title: "Electronics",
      getImageSrc: () => require("../../src/media/iphone.png"),
    },
    {
      title: "Sports",
      getImageSrc: () => require("../../src/media/sports.jpg"),
    },
    {
      title: "Furnitures",
      getImageSrc: () => require("../../src/media/any.jpg"),
    },
    {
      title: "Furnitures",
      getImageSrc: () => require("../../src/media/any.jpg"),
    },
    {
      title: "Furnitures",
      getImageSrc: () => require("../../src/media/any.jpg"),
    },
  ]
    return(
      <>
      {isLoggedIn && <Navbar/>}
      {!isLoggedIn && <Header />}
        <Container
        mt='0'
        mb='0'
        ml='0'
        mr='0'
        minWidth='100%'
          >
        <PhishingAlert title={alerts[pAIndex].title} content={alerts[pAIndex].content} /> 

        <Heading mb={4} size='lg' >Categories</Heading>
        <Divider w='40%'></Divider>
        <Grid 
              autoFlow='column'
              autoColumns={['21%', '21%','15%']}
              w='90vw'
              overflowX='auto'
              overflowY='hidden'
              gap={3}
              mt='1.5em'
              mb='1.5em'
              sx={{
                  '&::-webkit-scrollbar': {
                      display : 'hidden'
                  }
              }} >
        {categoriesItems.map((categoriesItem)=>(
          <Categories
          key={categoriesItem.title}
          title={categoriesItem.title}
          src={categoriesItem.getImageSrc()}
          />
        ))}

        </Grid>
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