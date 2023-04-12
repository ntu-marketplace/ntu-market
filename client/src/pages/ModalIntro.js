import { Avatar, VStack, Stack } from "@chakra-ui/react";
import Background from "../components/Background";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import MyButton from "../components/MyButton";
// import { SplineViewer } from '@splinetool/viewer';


function ModalIntro() {
  localStorage.setItem('user', 'false'); // init local storage
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3000);
    return () => clearTimeout(timer);
  },[]);

  return (
    <>
    {/* <iframe src='https://my.spline.design/dip3deffectslogo-5e0f6c79aacf5977851cfcea80201db3/'width='100%' height='100%'></iframe>
    <Background
        justifyContent="center"
        alignItems="center"
        isDarkBackground
        spacing={5}
        >
        <Stack textColor='black'>
        {showButton && (
        MyButton('/home', 'Enter')
        )}
        </Stack>
        
    </Background> */}
    <VStack
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgGradient={[
        'linear(to-b, #313690, #7600bc)',
      ]}
      w='100%'
    >
      <br/>
      <VStack  >
        <Stack>
          <iframe src='https://my.spline.design/dip3deffectslogo-5e0f6c79aacf5977851cfcea80201db3/'></iframe>

        </Stack>
        <Stack textColor='black'>
        {showButton && (
        MyButton('/home', 'Enter')
        )}
        </Stack>
      </VStack>
    </VStack>
    
    <Footer/>
    </>
  );
}

export default ModalIntro;
