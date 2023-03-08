import { Avatar, Button, Img } from "@chakra-ui/react";
import Background from "../../components/Background";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MyButton from "../../components/MyButton";

function Authentication() {

  return (
    <>
    <Background
        justifyContent="center"
        alignItems="center"
        isDarkBackground
        >
        
    </Background>
    
    <Footer/>
    </>
  );
}

export default Authentication;
