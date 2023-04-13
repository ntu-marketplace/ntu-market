import { Text, VStack, Stack, HStack, Spacer } from "@chakra-ui/react";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import MyButton from "../components/MyButton";

function Typewriter({ text }) {
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

function ModalIntro({ history }) {
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
            frameborder="0"
            width="300px"
            height="400px"
          ></iframe>
        </VStack>
        <VStack>
          <Typewriter
            text={"You have gained +100 Greenpoints"}
          />
          <Spacer />
          {showButton && MyButton("/home", "Back to Home")}
        </VStack>
      </VStack>

      <Footer />
    </>
  );
}

export default ModalIntro;
