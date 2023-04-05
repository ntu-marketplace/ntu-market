import { Avatar, Stack, Img } from "@chakra-ui/react";
import Background from "../components/Background";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import MyButton from "../components/MyButton";

function ModalIntro() {
  localStorage.setItem('user', 'false'); // init local storage
  console.log(localStorage)
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3000);
    return () => clearTimeout(timer);
  },[]);

  return (
    <>
    <Background
        justifyContent="center"
        alignItems="center"
        isDarkBackground
        spacing={5}
        >
        <Img src ='/LOGO.png'></Img>
        <Stack textColor='black'>
        {showButton && (
        MyButton('/home', 'Enter')
        )}
        </Stack>
        
    </Background>
    
    <Footer/>
    </>
  );
}

export default ModalIntro;
