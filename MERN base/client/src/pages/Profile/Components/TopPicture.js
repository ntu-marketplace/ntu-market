import { Box, Image, Text } from '@chakra-ui/react';

function TopPicture({ imageUrl, profileImageUrl }) {
  return (
    <>
    <Box
      bgImage={`url(${imageUrl})`}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
      h="180px"
      position="relative"
    >
      <Box
        bg="rgba(0, 0, 0, 0.5)"
        bottom={0}
        h="100%"
        left={0}
        position="absolute"
        right={0}
        top={0}
        zIndex={1}
      />
      <Box
        position="absolute"
        top="50%"
        left="50%"
        paddingLeft="50px"
        paddingTop="200px"
        transform="translate(-50%, -50%)"
        w="100%"
        zIndex={2}
        textAlign="center"
      >
        <Image
          src={profileImageUrl}
          alt="Profile"
          boxSize="150px"
          objectFit="cover"
          borderRadius="full"
          borderWidth="2px"
          borderColor="white"
          boxShadow="0 0 5px rgba(0, 0, 0, 0.3)"
        />
        <Text
          color="white"
          fontSize="24px"
          fontWeight="bold"
          mt={4}
          textShadow="1px 1px 2px rgba(0, 0, 0, 0.5)"
        >
        </Text>
      </Box>
    </Box>
    </>
  );
}

export default TopPicture;