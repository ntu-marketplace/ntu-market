import { ViewIcon, ViewOffIcon, WarningTwoIcon } from "@chakra-ui/icons";
import { Alert, 
         AlertDescription, 
         Box, 
         Button, 
         Center, 
         CircularProgress, 
         Flex, 
         FormControl, 
         FormLabel, 
         HStack, 
         Image, 
         Input, 
         InputGroup, 
         InputRightElement, 
         Link, 
         Stack, 
         Text, 
         VStack } from "@chakra-ui/react";
import { useState } from "react";
import logo from "./logo.svg";
import { useLogin } from "./hooks/useLogin";


function Login() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const {login, error, isLoading} = useLogin()


  const [showPwd,setshowPwd] = useState(false)
  const handleShowPwd = () => setshowPwd(!showPwd)



  const handleSubmit = async event => {
    event.preventDefault()

    await login(username, password)
  }
  

  return (
    <Flex
      flexDir="column"
      minW="100vw"
      minH="100vh"
      bgSize="auto"
      backgroundColor="#181c62"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        justifyContent="center"
        alignItems="center"
      >
        <Image src={logo} alt="logo" />
        <Box minW={{ base: "90%", md: "30.5rem" }}>
          <form onSubmit={handleSubmit}>
            <Stack          
              p="1.875rem"
              pt="1.7rem"
              mt="1.8rem"
              backgroundColor="#313691"
              borderRadius="2.1875rem"
              boxShadow="0.25em 0.25em 0.0625em rgba(255, 255, 255, 0.4)"
              alignItems="center"
              fontSize="1em"
              fontFamily="Lato"
              fontWeight="600"
              color="white"
            >
              <Text lineHeight="1.2em" mb="1.5rem">Please login to continue</Text>
              {error && 
                <Box my={4}>
                  <Alert status="error" bg="red.500" color="yellow" borderRadius={"1.5em"} mb={3}>
                    <WarningTwoIcon mr={2} />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                </Box>}
              <VStack spacing="1.875rem">
                <FormControl  isRequired minW={{base:"18rem", sm:"20rem", md:"26.75rem"}}>
                  <FormLabel fontSize="1.5em" lineHeight="1.2em" mb="0.625em">Username</FormLabel>
                  <Input 
                    type="text" 
                    placeholder="Enter username" 
                    color="black"                  
                    bg="#f5f5f5"   
                    borderRadius="0.625rem"
                    onChange={event => setUsername(event.target.value)}   
                    value={username}          
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel fontSize="1.5em" lineHeight="1.2em" mb="0.625em">Password</FormLabel>
                  <InputGroup>
                    <Input 
                      type={showPwd ? 'text' : 'password'}
                      placeholder="Enter password" 
                      color="black"                  
                      bg="#f5f5f5"
                      borderRadius="0.625rem"  
                      onChange={event => setPassword(event.target.value)}   
                      value={password}           
                    />
                    <InputRightElement w="4rem">
                      <Button 
                        borderRadius="0.6rem" 
                        bg="gray.300" 
                        color="gray.600" 
                        _hover={{bg:"gray.400"}} 
                        h="1.5rem" 
                        size="sm" 
                        onClick={handleShowPwd}
                      >
                        {showPwd ? <ViewOffIcon /> : <ViewIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
              </VStack>
              <FormControl>
                <Center flexDir="column">
                  <Button
                    type="submit"
                    w="11.5rem"
                    h="3rem"
                    borderRadius="1.25rem"
                    fontSize="1.5rem"
                    fontWeight="700"
                    lineHeight="1.2em"
                    color="black"
                    bg="#F5F5F5"
                    _hover={{bg:"#cccccc"}}
                    _active={{bg:"#999999"}}
                    mt="2.3rem"
                  >
                    {isLoading ? (
                      <CircularProgress isIndeterminate size="24px" color="black" />
                    ) : (
                      'Login'
                    )}
                  </Button> 
                  <HStack w="7rem" mt="1rem" fontSize="1.5rem" lineHeight="1.2em">
                    <Text>or <Link fontWeight="800" href="/signup">Sign Up</Link></Text>                    
                  </HStack>
                </Center>
              </FormControl>          
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  )
}

export default Login
