import * as React from "react";
import { VStack } from "@chakra-ui/react";
//maxWidth="980px" not needed for now
const Background = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
    bgGradient={[
      'linear(to-b, #313690, #7600bc)',
    ]}
    w='100%'
      color={isDarkBackground ? "white" : "black"}
    >
      <VStack minHeight="100vh" {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default Background;
