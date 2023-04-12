import { Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
function Description(props){

    return(
        <>
            <Heading size="lg"> {props.name} </Heading>
            <br/>
            <Text>
                {props.description}
            </Text>

        </>


    )


}
export default Description;