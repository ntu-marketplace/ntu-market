import { Avatar, Button, Img, HStack } from "@chakra-ui/react";
import Background from "../../components/Background";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MyButton from "../../components/MyButton";

function LoginSignUp() {

  return (
    <>
    <Background
        justifyContent="center"
        alignItems="center"
        isDarkBackground
        spacing={10}
        >
        <Img src ='/LOGO.png'></Img>
        <HStack color='white' textColor='black' spacing={5}>
        {MyButton('/login', 'Login')}
        {MyButton('/signUp', 'Sign Up')}
        </HStack>
        
    </Background>
    
    <Footer/>
    </>
  );
}

export default LoginSignUp;
