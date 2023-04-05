import { Stack, Img } from "@chakra-ui/react";
import { Button, Link as ChakraLink } from "@chakra-ui/react";
import { useState } from "react";
import Background from "../../components/Background";
import Footer from "../../components/Footer";
import NewAccAlert from "../../components/NewAccAlert";
import {FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react";
import { redirect } from "react-router-dom";
import MyButton from "../../components/MyButton";

function SignUp() {
  const [reDirect, setReDirect] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
    mobile: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await fetch("https://marketdb.herokuapp.com/create-user", {
        method: "POST",
        headers : {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if(response.ok){
        console.log("Form data posted successfully!");
        setReDirect(true);

      } else {
        console.error("Error")
      }
      
    }catch (error) {
      console.log("Dk wtf happen: ", error)
    }
  };
  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  return (
    <>
    <Background
        justifyContent="center"
        alignItems="center"
        isDarkBackground
        >
        <Img src ='/LOGO.png'></Img>
        {!reDirect &&  <form onSubmit={handleSubmit}>
          <FormControl>
              <FormLabel>Username</FormLabel>
              <Input type='text' name="username" value={formData.username} onChange={handleChange} />
              <FormHelperText>Pick something fancy.</FormHelperText>
              <FormLabel>Password</FormLabel>
              <Input type='password' name="password" value={formData.password} onChange={handleChange} />
              <FormHelperText>Shhhhhh.</FormHelperText>
              <FormLabel>Name</FormLabel>
              <Input type='text' name="name" value={formData.name} onChange={handleChange} />
              <FormHelperText>We'll never tell a soul.</FormHelperText>
              <FormLabel>Email address</FormLabel>
              <Input type='email' name="email" value={formData.email} onChange={handleChange}/>
              <FormHelperText>We'll never share your email.</FormHelperText>
              <FormLabel>Mobile Number</FormLabel>
              <Input type='number' name="mobile" value={formData.mobile} onChange={handleChange}/>
              <FormHelperText>Your Singapore Phone Number.</FormHelperText>
          </FormControl>
          <br/>
          <Stack color='white' textColor='black'>
            <Button type='submit' label='Sign Up'>Submit</Button>
          </Stack>
        </form>}
        {reDirect && <>
        <Stack color='white' textColor='black'>
          <br/>
          {MyButton('/login', 'Go to Login')}

        </Stack>
        </> }

        
    </Background>
    
    <Footer/>
    </>
  );
}

export default SignUp;
