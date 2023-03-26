import { Button, useToast } from "@chakra-ui/react";


function NewAccAlert() {
    const toast = useToast()
    return (
      <Button color='white' textColor='black'
        onClick={() =>
          toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        }
      >
        Go to Login
      </Button>
    )
  }
export default NewAccAlert;