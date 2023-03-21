import { Text } from "@chakra-ui/react";
import { useState } from "react";
function Description(props){

    return(
        <>
            <Text> {props.name} </Text>
            <Text>
                {props.description}
            </Text>

        </>


    )


}
export default Description;