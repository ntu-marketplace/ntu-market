import { Box, Tab, Tabs, TabList, TabPanel, TabPanels, Grid, GridItem, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Description from "./Description";
import Listing from "./Listing";
import Review from "./ProfileReview";
//Toggling states can be dropped, handled by CHAKRAUI in TABS
function ProfileBody(){
    return(
        <>
        <br/>
        <br/>
        <br/>
            <Tabs align='center' size='lg' variant='enclosed'>
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