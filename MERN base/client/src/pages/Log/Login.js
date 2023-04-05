import { Img, FormControl, FormLabel, Input, Stack, Button, Link as ChakraLink } from "@chakra-ui/react";
import Background from "../../components/Background";
import Footer from "../../components/Footer";
import MyButton from "../../components/MyButton";
import { useState, useEffect } from "react";
import { AppContextProvider, useAppContext } from "../../AppContext";
const Login = () => {
  // const {isLoggedIn, login, logout} = useAppContext();
  const [reDirect, setReDirect] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  console.log(localStorage)

  // useEffect(()=>{
  //   if(isLoggedIn == false ){
  //     console.log("hjere")
  //     setIsLoggedIn(true);
  //     localStorage.setItem('user', 'true');
  //   }
  // },[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await fetch("https://marketdb.herokuapp.com/find-user", {
        method: "POST",
        headers : {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if(response.ok){
        // console.log(response)
        console.log("Form data posted successfully!");
        setReDirect(true);
        localStorage.setItem('user', "true")
      } else {
        console.error("Error")
      }
      
    }catch (error) {
      console.log("Dk wtf happen: ", error)
    }
  };
  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }
  return (
    < >
    <Background
        justifyContent="center"
        alignItems="center"
        isDarkBackground
        >
        <Img src ='/LOGO.png'></Img>
        {!reDirect && <form onSubmit={handleSubmit}>
          <FormControl>
              <FormLabel>Username</FormLabel>
              <Input type='text' name='username' value={formData.username} onChange={handleChange}/>
              <FormLabel>Password</FormLabel>
              <Input type='password' name='password' value={formData.password} onChange={handleChange}/>
          </FormControl>
          <br/>
          <Stack color='white' alignItems='center' textColor='black'>
              <Button type="submit" label="login">Login</Button>
          </Stack>
        </form>}
      {reDirect && <>
      <Stack color='white' textColor='black'>
        <br/>
        {/* <ChakraLink href="/home">
          <Button size='md' onClick={() => setIsLoggedIn(true)}>Go to Home Page</Button>
        </ChakraLink> */}
        {MyButton('/home', 'Go to Home')}

      </Stack>
      </> }
        
    </Background>
    
    <Footer/>
    </>
  );
}

export default Login;
