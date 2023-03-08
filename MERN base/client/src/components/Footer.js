import React from "react";
import {Box, Flex} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box 
      as="footer" 
      position="fixed" 
      bottom="0" 
      left="0" 
      w="100%" 
      backgroundColor="#18181b"
      >
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          height={16}
        >
          <p>Ntu Marketplace • © 2023</p>
        </Flex>
    </Box>
  );
};
export default Footer;