import { useState, useEffect, createContext } from "react";
import { Container, Show, Heading, Divider, Grid, SimpleGrid, list} from "@chakra-ui/react";
import PhishingAlert from '../components/phishingalert';
import Navbar from "../components/navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Categories from "../components/categories";
import axios from "axios";
import { AppContextProvider, useAppContext } from "../AppContext";
import AdsSpace from "../components/adsSpace";
import ListingCard from "../components/ListingCard";

export const StateContext = createContext();
export const FavContext = createContext();

function Home(){
  const [isLogged, setIsLogged] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const [pAIndex, setPAIndex] = useState(0);
  const [aIndex, setAIndex] = useState(0);
  const [favouriteListings, setFavouriteListings] = useState([]);
  const [listings, setListings] = useState([]);
  // Changed getListings to sort based on whether an item has been bought before.
  const getListings = async () => {
    try{
      const res = await axios.get('https://marketdb.herokuapp.com/get-items')
      .then((response)=>{
        const sortedListings = response.data.sort((x,y)=>{
          if(x.isBought && !y.isBought){
            return 1;
          }
          if(!x.isBought && y.isBought){
            return -1;
          }
          return 0;
        });
        setListings(sortedListings)
      })
    } catch (e){
      console.log("Sian why sia", e);
    }
  };
    
  useEffect(()=>{
    getAds();
    getAlerts();
    getCategories();
    getListings();
    checkLoggedIn();
  },[isLogged]);
  
  const checkLoggedIn =() =>{
    if(localStorage.getItem("user") == 'false'){
      setIsLogged(false);
      return;
    }
    else{
      setIsLogged(true);
    }
    return;
  }
  const [ads, setAds] = useState();
  const getAds = async () => {
    try{
      const res = await axios.get('https://marketdb.herokuapp.com/get-ads')
      .then((response) => {
        setAds(response.data)
      })
    } catch(e) {
      console.log("Why sia?", e);
    }
  }
  function updateSearched(didSearched){
    setIsSearched(didSearched);
  }
  function updateListings(filteredListings){
    setListings(filteredListings);
  }
  function updateFav(favListings){
    setFavouriteListings(favListings);
  }
  const [alerts, setAlerts] = useState();
  const getAlerts = async () => {
    try{
      const res = await axios.get('https://marketdb.herokuapp.com/get-alerts')
      .then((response)=>{
        setAlerts(response.data)
      })
    } catch (e){
      console.log("Sian why sia", e);
    }
  };
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    try{
      const res = await axios.get('https://marketdb.herokuapp.com/get-categories')
      .then((response)=>{
        setCategories(response.data)
      })
    } catch (e){
      console.log("Sian why sia", e);
    }
  };
  useEffect(()=>{
    const adsId = setInterval(()=>{
      setAIndex((aIndex+1)%2);
    }, 8000);
    return () => {
      clearInterval(adsId);
    };
  });

  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setPAIndex((pAIndex + 1)%4);
    },10000);
    
    return () => {
      clearInterval(intervalId);
    };
  });
    return(
      <AppContextProvider>
      {isLogged ? 
      <StateContext.Provider value={{listings, isSearched}}>
        <Navbar onChildStateChange={updateListings} onSearchedState={updateSearched}/>
      </StateContext.Provider>
      : <Header />}

        <Container
        mt='0'
        mb='0'
        ml='0'
        mr='0'
        minWidth='100%'
        backgroundColor="#F5F5F5"
          >
        {!isSearched && <PhishingAlert 
        title={ alerts && alerts.length > 0 ? alerts[pAIndex].title : "" } 
        content={ alerts && alerts.length > 0 ? alerts[pAIndex].content : "" } /> }

        {!isSearched && <Heading mb={1} size='lg'> Categories </Heading>}
        <Grid 
          autoFlow='column'
          autoColumns={['21%', '21%','15%']}
          w='90vw'
          overflowX='auto'
          overflowY='hidden'
          gap={3}
          mt='1.5em'
          mb='1.5em'
          sx={{
              '&::-webkit-scrollbar': {
                  display : 'hidden'
              }
          }} >
          { !isSearched && <StateContext.Provider value={listings}>
          {categories.map((category)=>(
            <Categories
            title={categories && categories.length>0 ? category.title : ""}
            src={categories && categories.length > 0? category.imageSrc : ""}
            onChildStateChange={updateListings}
            />
          ))}
        </StateContext.Provider>}
        </Grid>

        {!isSearched && <AdsSpace src={ ads && ads.length > 0 ? ads[aIndex].imageSrc : "" }/> }
        <br/>
        <Heading>Featured Items</Heading>
        <FavContext.Provider value={favouriteListings}>
          <Show above='sm'>
            <SimpleGrid 
              onChildStateChange={updateFav}          
              maxWidth='90vw'
              minChildWidth="30%">
              {listings.map((list)=>(
                <ListingCard 
                id = {listings && listings.length>0 ? list._id : ""}
                title={listings && listings.length>0 ? list.productTitle : ""}
                src={listings && listings.length>0 ? list.imageSrc : ""} 
                description={listings && listings.length>0 ? list.productInfo : ""}
                price={listings && listings.length>0 ? list.price : ""}
                isFav = {listings && listings.length>0 ? list.isFavourited : ""}
                isBought= {listings && listings.length>0 ? list.isBought : ""}
                />
              ))}
            </SimpleGrid>
          </Show>
          <Show below='sm'>
            <SimpleGrid   
              onChildStateChange={updateFav}   
              maxWidth='100vw'>
              {listings.map((list)=>(
                <ListingCard     
                id = {listings && listings.length>0 ? list._id : ""}
                title={listings && listings.length>0 ? list.productTitle : ""}
                src={listings && listings.length>0 ? list.imageSrc : ""} 
                description={listings && listings.length>0 ? list.productInfo : ""}
                price={listings && listings.length>0 ? list.price : ""}
                isFav = {listings && listings.length>0 ? list.isFavourited : ""}
                isBought= {listings && listings.length>0 ? list.isBought : ""}
                />
              ))}
            </SimpleGrid>
          </Show>
        </FavContext.Provider>

        </Container>
      <br/><br/>
      <Footer/>
      </AppContextProvider>
    )
}
export default Home;