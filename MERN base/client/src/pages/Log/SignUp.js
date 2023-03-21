import { Stack, Img } from "@chakra-ui/react";
import Background from "../../components/Background";
import Footer from "../../components/Footer";
import { FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react";
import MyButton from "../../components/MyButton";
import NewAccAlert from "../../components/NewAccAlert";

function SignUp() {

  return (
    <>
    <Background
        justifyContent="center"
        alignItems="center"
        isDarkBackground
        >
        <Img src ='/LOGO.png'></Img>
        <FormControl>
            <FormLabel>Username</FormLabel>
            <Input type='username' />
            <FormHelperText>Pick something fancy.</FormHelperText>
            <FormLabel>Email address</FormLabel>
            <Input type='email' />
            <FormHelperText>We'll never share your email.</FormHelperText>
            <FormLabel>Password</FormLabel>
            <Input type='password' />
            <FormHelperText>Shhhhhh.</FormHelperText>
            <FormLabel>Confirm Password</FormLabel>
            <Input type='email' />
            <FormHelperText>We'll never tell a soul.</FormHelperText>
        </FormControl>
        <Stack color='white' textColor='black'>
            <NewAccAlert/>
        </Stack>

        
    </Background>
    
    <Footer/>
    </>
  );
}

export default SignUp;
