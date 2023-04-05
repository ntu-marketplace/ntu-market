import { Text, Textarea } from "@chakra-ui/react";
import Background from "../components/Background";
import Footer from "../components/Footer";

function ErrorNotFound() {

  return (
    <>
    <Background
        justifyContent="center"
        alignItems="center"
        isDarkBackground
        >
        <Text>NOT FOUND 404</Text>
    </Background>
    
    <Footer/>
    </>
  );
}

export default ErrorNotFound;
