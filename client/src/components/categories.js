import { Heading, GridItem, Image, VStack} from "@chakra-ui/react";

function Categories(props) {
    return(
        <GridItem display='flex' alignItems='flex-start' paddingTop='0.5em'>
            <VStack>
                <Image
                    shadow='base'
                    borderRadius='full'
                    boxSize={['4em','6em','8em']}
                    src={props.src} />
                <Heading fontSize={['xs','md','lg']}>{props.title}</Heading>                          
            </VStack>
        </GridItem>
    )
}
export default Categories;