import { Img, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import Background from "../../components/Background";
import Footer from "../../components/Footer";
import MyButton from "../../components/MyButton";

function Login() {

  return (
    <>
    <Background
        justifyContent="center"
        alignItems="center"
        isDarkBackground
        >
        <Img src ='/LOGO.png'></Img>
        <FormControl>
            <FormLabel>Username</FormLabel>
            <Input type='username' />
            <FormLabel>Password</FormLabel>
            <Input type='password' />
        </FormControl>
        <Stack color='white' textColor='black'>
            {MyButton('home', 'Login')}
        </Stack>
        
    </Background>
    
    <Footer/>
    </>
  );
}

export default Login;
