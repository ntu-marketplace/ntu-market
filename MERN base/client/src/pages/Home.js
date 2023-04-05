import { useState, useEffect } from "react";
import { Container, HStack, Heading, Divider, Grid} from "@chakra-ui/react";
import PhishingAlert from '../components/phishingalert';
import Navbar from "../components/navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Categories from "../components/categories";
import FeaturedItems from "../components/FeaturedItems";
import axios from "axios";
import { AppContextProvider, useAppContext } from "../AppContext";

function Home(){
  const[isLogged, setIsLogged] = useState(false);
  const [pAIndex, setPAIndex] = useState(0);

  useEffect(()=>{
    getAlerts();
    getCategories();
    check(); // check with every get call
  },[isLogged]);
  
  const check =() =>{
    if(localStorage.getItem("user") == 'false'){
      setIsLogged(false);
      return;
    }
    else{
      setIsLogged(true);
    }
    return;
  }
  
  const [alerts, setAlerts] = useState();
  const getAlerts = async () => {
    try{
      const res = await axios.get('https://marketdb.herokuapp.com/get-alerts')
      .then((response)=>{
        setAlerts(response.data)
        console.log(alerts)
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
        console.log(categories)
      })
    } catch (e){
      console.log("Sian why sia", e);
    }
  };
  console.log(categories)

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
      {isLogged ? <Navbar/>: <Header />}
        <Container
        mt='0'
        mb='0'
        ml='0'
        mr='0'
        minWidth='100%'
          >
        <PhishingAlert 
        title={ alerts && alerts.length > 0 ? alerts[pAIndex].title : "" } 
        content={ alerts && alerts.length > 0 ? alerts[pAIndex].content : "" } /> 

        <Heading mb={4} size='lg' >Categories</Heading>
        <Divider w='40%'></Divider>
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
        
        {categories.map((category)=>(
          <Categories
          title={categories && categories.length>0 ? category.title : ""}
          src={categories && categories.length > 0? category.imageSrc : ""}
          />
        ))}

        </Grid>
        <FeaturedItems/>
        </Container>
      <br/><br/>
      <Footer/>
      </AppContextProvider>
    )
}
export default Home;