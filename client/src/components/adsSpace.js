import { Image, AspectRatio } from "@chakra-ui/react";
function AdsSpace(props) {
    return(
        <>
            <AspectRatio maxW='100vw' maxH='250px' ratio={4/3}>
                <Image src={props.src} />
            </AspectRatio>
        </>
    )
}

export default AdsSpace;
