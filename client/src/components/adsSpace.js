import { Image, AspectRatio } from "@chakra-ui/react";
function AdsSpace(props) {
    return(
        <>
            <AspectRatio maxW='100vw' maxH='300px' ratio={21/9}>
                <Image src={props.src} />
            </AspectRatio>
        </>
    )
}

export default AdsSpace;
