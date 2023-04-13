import { Text, VStack, Button, Link as ChakraLink , HStack, Spacer } from "@chakra-ui/react";
import Footer from "../components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
const server = "https://marketdb.herokuapp.com";

function Typewriter({ text }) { // i think this is not too good but idk how else
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((index) => index + 1);
    }, 100);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <Text fontFamily={"sans-serif"} fontSize="xl" color="White">
      {text.substring(0, index)}
    </Text>
  );
}
const updatePoints = async () =>{
    try{
        return await axios.patch("http://localhost:8080/patch-points", {})
        .then(response=>console.log(response.data));
      } catch (e){
        console.log("Error in updating why sia", e);
      }
}

function Checkout() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <VStack
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        bgGradient={["linear(to-b, #313690, #7600bc)"]}
        w="100%"
      >
        <VStack>
          <iframe
            src="https://my.spline.design/untitled-6d26593e9b4eb0641fb0429aa8dbc545/"
            width="300px"
            height="400px"
          ></iframe>
        </VStack>
        <VStack>
            <Typewriter
                text={"You have gained +100 Greenpoints"}
            />
            <Spacer />
            {/*  */}
            {showButton &&     
            <ChakraLink href={"/home"}>
                <Button onClick={updatePoints} size='md'>Back to Home</Button>
            </ChakraLink>}  
        </VStack>
      </VStack>

      <Footer />
    </>
  );
}

export default Checkout;
