import { Heading, GridItem, Image, VStack} from "@chakra-ui/react";
import { StateContext } from '../pages/Home';
import { useContext, useState } from "react";

function Categories(props) {
    const listings = useContext(StateContext); // list of items from home
    const [query, setQuery] = useState(props.title);
    const handleSearch = (props) =>{
        setQuery(props.title);
    }
    function handleChange() { 
        const filteredListings = listings.filter((listing) => 
        listing.category.toLowerCase().includes(query.toLowerCase()));
        props.onChildStateChange(filteredListings);
      }
    return(
        <GridItem display='flex' alignItems='flex-start' paddingTop='0.5em'>
            <VStack>
                <Image
                    shadow='base'
                    borderRadius='full'
                    boxSize={['4em','6em','8em']}
                    src={props.src} 
                    onChange={handleSearch} 
                    onClick={handleChange}/>
                <Heading fontSize={['xs','md','lg']}>{props.title}</Heading>                          
            </VStack>
        </GridItem>
    )
}
export default Categories;