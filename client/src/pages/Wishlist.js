import { SimpleGrid, Show } from "@chakra-ui/react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import ListingCard from "../components/ListingCard";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import axios from "axios";

function Wishlist(){
    const[isLogged, setIsLogged] = useState(false);
    console.log(localStorage)
    const check =() =>{
      if(localStorage.getItem("user") == 'false'){
        setIsLogged(false);
        return;
      }
      else{
        setIsLogged(true);
      }
      return;
    }
    useEffect(()=>{
      getListings();
      check();
    },[isLogged]);
    const [listings, setListings] = useState([]);
    const getListings = async () => {
      try{
        const res = await axios.get('https://marketdb.herokuapp.com/get-items')
        .then((response)=>{
          setListings(response.data)
        })
      } catch (e){
        console.log("Sian why sia", e);
      }
    };
    const favouritedListings = listings.filter(listing=>listing.isFavourited == 1);
    console.log(favouritedListings)
    return(
        <>
            {isLogged ? <Navbar/>: <Header/>}
            <Show above='sm'>
            <SimpleGrid          
              maxWidth='90vw'
              minChildWidth="30%">
              {favouritedListings.map((list)=>(
                <ListingCard 
                id = {favouritedListings && favouritedListings.length>0 ? list._id : ""}
                title={favouritedListings && favouritedListings.length>0 ? list.productTitle : ""}
                src={favouritedListings && favouritedListings.length>0 ? list.imageSrc : ""} 
                description={favouritedListings && favouritedListings.length>0 ? list.productInfo : ""}
                price={favouritedListings && favouritedListings.length>0 ? list.price : ""}
                isFav = {favouritedListings && favouritedListings.length>0 ? list.isFavourited : ""}
                />
              ))}
            </SimpleGrid>
          </Show>
          <Show below='sm'>
            <SimpleGrid    
              maxWidth='100vw'>
              {favouritedListings.map((list)=>(
                <ListingCard     
                id = {favouritedListings && favouritedListings.length>0 ? list._id : ""}
                title={favouritedListings && favouritedListings.length>0 ? list.productTitle : ""}
                src={favouritedListings && favouritedListings.length>0 ? list.imageSrc : ""} 
                description={favouritedListings && favouritedListings.length>0 ? list.productInfo : ""}
                price={favouritedListings && favouritedListings.length>0 ? list.price : ""}
                isFav = {favouritedListings && favouritedListings.length>0 ? list.isFavourited : ""}
                />
              ))}
            </SimpleGrid>
          </Show>
          
        <Footer/>
        </>
    )
}
export default Wishlist;