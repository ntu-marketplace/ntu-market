import { Stack, Img, Box } from "@chakra-ui/react";
import { Button, Link } from "@chakra-ui/react";
import { useState } from "react";
import { redirect } from 'react-router-dom';
import Background from "../../components/Background";
import Footer from "../../components/Footer";
import {FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react";
import MyButton from "../../components/MyButton";

function SignUp() {
  const [reDirect, setReDirect] = useState(false);
  const [formValid, setFormValid] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
    mobile: ""
  });
  const [stateError, setStateError] = useState({
    error: ""
  });
  const [userOtp, setUserOtp] = useState({
    user: "",
    otp: ""
  })
  const [correctOtp, setCorrectOtp] = useState({
    otp: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      if (!formData.email.endsWith('@e.ntu.edu.sg')) {
        throw Error("Please enter a valid NTU email")
      }
      const response = await fetch("https://marketdb.herokuapp.com/create-user", {
        method: "POST",
        headers : {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      // response.json().then((data) => console.log(data));
      if(response.ok){
        console.log("Form data posted successfully!");
        setReDirect(true);
        response.json().then((data) => {
          console.log(data);
          setUserOtp((prevData)=> ({...prevData, user:data.user}))
          setCorrectOtp((prevData)=> ({...prevData, otp:data.otp}));
        });
      } else {
        console.log(response);
      }
    } catch (err) {
      console.log("Dk wtf happen: ", err)
      setStateError((data) => ({ ...data, error: err.toString()}))
      setFormValid(false)
    }
  };

  const handleVerify = async (event) => {
    event.preventDefault();
    try {
      console.log(correctOtp.otp + "==" + userOtp.otp);
      if (correctOtp.otp == userOtp.otp) {
        const response = await fetch("https://marketdb.herokuapp.com/verify-user", {
          method: "POST",
          headers : {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userOtp),
        });
        console.log(response);
        window.location.replace("/login");
      } else {
        setReDirect(true);
        throw Error("OTP does not match");
      }
    } catch (e) {
      console.log("ERROR:" + e)
    }
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  const handleChangeOtp = (event) => {
    const {name, value} = event.target;
    setUserOtp((data) => ({ ...data, otp: value}));
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
              <FormHelperText color={"grey"}>Pick something fancy.</FormHelperText>
              <FormLabel>Password</FormLabel>
              <Input type='password' name="password" value={formData.password} onChange={handleChange} />
              <FormHelperText color={"grey"}>Shhhhhh.</FormHelperText>
              <FormLabel>Name</FormLabel>
              <Input type='text' name="name" value={formData.name} onChange={handleChange} />
              <FormHelperText color={"grey"}>We'll never tell a soul.</FormHelperText>
              <FormLabel>Email address</FormLabel>
              <Input type='email' name="email" value={formData.email} onChange={handleChange}/>
              <FormHelperText color={"grey"}>We'll never share your email.</FormHelperText>
              <FormLabel>Mobile Number</FormLabel>
              <Input type='number' name="mobile" value={formData.mobile} onChange={handleChange}/>
              <FormHelperText color={"grey"}>Your Singapore Phone Number.</FormHelperText>
          </FormControl>
          <br/>
          {!formValid && <>
            <Box>
              {stateError.error}
            </Box>
            </>
        }
          
          <Stack color='white' textColor='black'>
            <Button type='submit' label='Sign Up'>Submit</Button>
          </Stack>
        </form>}
        
        {reDirect && <form onSubmit={handleVerify}>
          <FormControl>
              <FormLabel>OTP</FormLabel>
              <Input type='text' name="otp" value={userOtp.otp} onChange={handleChangeOtp} />
              <FormHelperText>Check your NTU email.</FormHelperText>
          </FormControl>
        <Stack color='white' textColor='black'>
          <br/>
          <Button type='submit' label='Verify'>Verify</Button>

        </Stack>
        </form> }

        
    </Background>
    
    <Footer/>
    </>
  );
}

export default SignUp;
