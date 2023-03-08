import { Tab, Tabs, TabList, TabPanel, TabPanels, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import Description from "./Description";
//API to populate reviews
function Review(){
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
                <Description/>
            </GridItem>
            <GridItem pl='3' bg='white.300' area={'main'}>
                TODO
            </GridItem>
        </Grid>
        
        </>


    )


}
export default Review;