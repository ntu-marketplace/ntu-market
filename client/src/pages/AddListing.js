import React, { useState, useEffect } from 'react';
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputLeftElement,
  Image,
  Grid,
  Stack,
  Text,
} from '@chakra-ui/react';

import { useToast } from '@chakra-ui/react';
import Background from '../components/Background';
import Navbar from '../components/navbar';
import { Link } from 'react-router-dom';
import { CloseIcon } from '@chakra-ui/icons';
import { useAppContext } from '../AppContext';
import Header from '../components/Header';


const Form1 = () => {
  
  const [selectedImages, setSelectedImage] = useState([])
  const OnSelectFile = (event) => {
    if(event.target.files){
      const imageArray = Array.from(event.target.files).map((file)=>URL.createObjectURL(file))

      setSelectedImage((prevImages)=>prevImages.concat(imageArray))
      Array.from(event.target.files).map(
        (file)=>URL.revokeObjectURL(file)
      )
    }
  }
  const previewImages = (source) =>{
    return source.map((image)=>{
      return (
      <GridItem
      position='relative'>
          <Image 
          src={image} 
          key={image} 
          boxSize="15em" 
          borderRadius="3px"
          objectFit="cover"></Image>
          <Button
            colorScheme="blackAlpha"
            position='absolute'
            right='1'
            top='1' 
            borderRadius='10'
            onClick={() => setSelectedImage(selectedImages.filter((e) => e !== image))}>
              <CloseIcon color='white' boxSize={2}></CloseIcon>
            </Button>        
      </GridItem>
      )
    })
  }
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Upload some photos
      </Heading>
      
        <Box
        borderRadius="5"
        height="25em"
        background="#3b409c"
        overflowX="auto"
        overflowY="hidden" 
        padding="1"
        display="flex"
        alignItems="center"
        justifyContent="center"> 
          <Stack p="8" textAlign="center" spacing="1">
            <Grid 
              autoFlow='column'
              autoColumns={['21%', '21%','28%']}
              overflowX='auto'
              overflowY='hidden'
              gap="2"
              mt='1.5em'
              mb="0.7em"
              sx={{
                  '&::-webkit-scrollbar': {
                      display : 'hidden'
                  }
              }}>
              {previewImages(selectedImages)}
            </Grid>
            <Box 
              position='relative'
              width='100%'
              border="1px dashed grey"
              paddingTop="3"
              paddingBottom="3"
              borderRadius="5">
              <Heading fontSize="lg" color="white" fontWeight="bold">
                Click to upload
              </Heading>
              <Text fontWeight="light" color="grey.100">or drop images here</Text>
              <Input
                height="100%"
                width="100%"
                position="absolute"
                top="0"
                bottom="0"
                left="0"
                opacity="0"
                aria-hidden="true"
                type="file"
                name="Listing Images"
                multiple
                onChange={OnSelectFile}
                accept="image/*">
              </Input>
            </Box>
          </Stack>      
        </Box>
    </>
  );
};

const Form2 = () => {
  return (
    <>
    <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Tell us more!
      </Heading>
      <Input variant="filled" background="#3b409c" placeholder='What are you selling?' />
      <Select 
      mt="3"
      variant="filled"
      placeholder='Category'
      background="#3b409c"
      mb="3"
      color='gray.300' >
        <option value='option1'>Electronics</option>
        <option value='option2'>Home Appliances</option>
        <option value='option3'>School Items</option>
        <option value='option4'>Skincare</option>
        <option value='option5'>Fashion</option>
        <option value='option6'>Food & Cooking</option>
      </Select>
      <InputGroup>
        <InputLeftElement
          pointerEvents='none'
          color='gray.300'
          fontSize='1.2em'
          children='$'
        />
        <Input variant="filled" background="#3b409c" placeholder='Enter amount' />
      </InputGroup>
      <Textarea
       placeholder='Give us some details about your product'
       variant="filled"
       background="#3b409c"
       size="md"
       isRequired
       mt='3'
       resize="vertical"
       overflowY="auto"
       overflowX="hidden"
       sx={{
        '&::-webkit-scrollbar': {
            display : 'hidden'
        }
    }} />
    </>
  );
};

const Form3 = () => {
  
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal">
        Almost Done!
      </Heading>
      <Select 
      mt="3"
      variant="filled"
      placeholder='How do you want to deal?'
      background="#3b409c"
      color='gray.300' >
        <option value='option1'>Meet Up</option>
        <option value='option2'>Postage</option>
        <option value='option2'>Meet Up & Postage</option>
      </Select>
      <Textarea background="#3b409c" variant="filled" placeholder='Where do you want to meet?' mt="3"></Textarea>
    </>
  );
};

export default function AddListing() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const[isLogged, setIsLogged] = useState(false);
  console.log(localStorage)

  useEffect(()=>{
      check();
  },[isLogged]);

  const check =() =>{
      if(localStorage.getItem("user") == 'false'){
        setIsLogged(false);
        return;
      }
      else{
        setIsLogged(true);
      }
      return;
    }
  return (
    <>
    {isLogged ? <Navbar/>: <Header />}
    <Background>
      
      <Box
        background="#181C62"
        color="white"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form">
        <Progress
          value={progress}
          mb="5%"
          mx="5%"
          size="sm"
          isAnimated></Progress>
        {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="blue"
                variant="solid"
                w="7rem"
                mr="5%">
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="blue"
                variant="solid">
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Link to="/myProfile">
                <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  toast({
                    title: 'Listing Added.',
                    description: "You can check it out under My Listings.",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  });
                }}>
                Add Listing
              </Button>
              </Link>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </Background>  
    </>
  );
}