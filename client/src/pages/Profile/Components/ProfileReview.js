import { Accordion, Text, Grid, GridItem, HStack } from "@chakra-ui/react";
import {StarIcon} from "@chakra-ui/icons";
import Description from "./Description";
import Review from"./Review";
import { useState, useEffect } from "react";

function ProfileReview(){
    const reviewItems = [
        {
            name: "Jeremy",
            stars: 5,
            description:
            "Very Responsive",
            getImageSrc: () => require("../../../media/anyone.jpg"),
        },
        {
            name: "Bhar",
            stars: 4,
            description:
            "Very Fast",
            getImageSrc: () => require("../../../media/anyone.jpg"),
        },

    ]
    const profileItems = 
        {
            userId: localStorage.getItem('_id'),
            name: localStorage.getItem('username'),
            description: "Just a broke uni student trying to make an extra buck and reducing waste.",

        };
    return(
        <>
        <Grid
            templateAreas={`"nav main"
            "nav main"`}
            gridTemplateRows={'50px 1fr 30px'}
            gridTemplateColumns={'150px 1fr'}
            h='800px'
            gap='10'
            color='blackAlpha.700'
            fontWeight='bold'
            >
            <Text align="left" fontSize="lg" fontFamily="sans-serif" >Review</Text>
            <GridItem pl='3' bg='white.300' area={'nav'}>
                <Description
                    name = {profileItems.name}
                    description = {profileItems.description}/>
            </GridItem>
            <Accordion allowMultiple>
                
                {reviewItems.map((reviewItem)=>(
                    
                    <Review
                    src={reviewItem.getImageSrc()}
                    name={reviewItem.name}
                    value={reviewItem.stars}
                    description={reviewItem.description}
                    />

                ))}
            </Accordion>
        </Grid>
        
        </>


    )


}
export default ProfileReview;