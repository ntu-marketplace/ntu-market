import { Grid, GridItem, Card, CardBody, Image, Stack, Text, Divider, CardFooter, Button, ButtonGroup, HStack, filter, SimpleGrid, Show } from "@chakra-ui/react";
import Description from "./Description";
import ListingCard from "../../../components/ListingCard";
import { useEffect, useState } from "react";
import axios from "axios";
function ProfileSection(props) {
    const [listings, setListings] = useState("")

    useEffect(() => {
        const getListings = async () => {
            const {data} = await axios.get('https://marketdb.herokuapp.com/get-items')
            const filteredData = data.filter(listing => listing.sellerUsername === localStorage.getItem("username"))
            console.log(filteredData)
            setListings(filteredData) 
        }
        getListings();
    },[])

    const profileItems = 
        {
            userId: localStorage.getItem("_id"),
            name: localStorage.getItem("username"),
            description: "Just a broke uni student trying to make an extra buck and reducing waste.",

        }

    
    return(
        <>
        <Grid
            templateAreas={`"nav main"
                            "nav main"`}
            gridTemplateRows={'50px 1fr 30px'}
            gridTemplateColumns={'150px 1fr'}
            h='800px'
            gap='1'
            color='blackAlpha.700'
            fontWeight='bold'
            >
            <GridItem pl='3' bg='white.300' area={'nav'}>
                <Description
                name = {profileItems.name}
                description = {profileItems.description}/>
            </GridItem>
            <GridItem pl='3' bg='white.300' area={'main'}>
            <Show above='sm'>
            <SimpleGrid          
              maxWidth='80vw'
              minChildWidth="30%">
              {listings && listings.map((list)=>(
                <ListingCard 
                id = {list._id}
                title={list.productTitle}
                src={list.imageSrc} 
                description={list.productInfo}
                price={list.price}
                isFav = {list.isFavourited}
                isBought= {list.isBought}
                />
              ))}
            </SimpleGrid>
          </Show>
          <Show below='sm'>
            <SimpleGrid     
              maxWidth='100vw'>
              {listings && listings.map((list)=>(
                <ListingCard     
                id = {list._id}
                title={list.productTitle}
                src={list.imageSrc} 
                description={list.productInfo}
                price={list.price}
                isFav = {list.isFavourited}
                isBought= {list.isBought}
                />
              ))}
            </SimpleGrid>
            </Show>
            </GridItem>
        </Grid>
        
        </>
    )
}

export default ProfileSection;