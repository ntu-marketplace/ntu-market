import { Box, Tab, Tabs, TabList, TabPanel, TabPanels, Grid, GridItem, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Description from "./Description";
import Listing from "./Listing";
import Review from "./ProfileReview";

function ProfileBody(){
    return(
        <>
        <br/>
        <br/>
        <br/>
            <Tabs align='center' size='sm' variant='enclosed'>
                <TabList>
                    <Tab >
                        Listings
                    </Tab>
                    <Tab >
                        Reviews
                    </Tab>
                </TabList>
                <TabPanels>
                <TabPanel>
                    <Listing/>
                </TabPanel>
                <TabPanel>
                    <Review/>
                </TabPanel>
            </TabPanels>
            </Tabs>

        </>


    )


}
export default ProfileBody;