import { React } from 'react';
import {
  Box,
  Flex,
  HStack,
  Show,
} from '@chakra-ui/react';
import cart from '../media/LOGO.png'
import { Link } from 'react-router-dom';
import MyButton from './MyButton';
function Header() {

  return (
    <>
      <Box bg={'#181C62'} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          
          <Show above='766px'>
            <Box>
              <Link to='/'>
                <img src={cart} alt="NTU Marketplace" height={150} width={150} />
              </Link>
            </Box>
          </Show>
          <Show below='766px'>
            <Box>
                <Link to='/'>
                <img src={cart} alt="NTU Marketplace" height={150} width={150}  />
                </Link>
            </Box>
          </Show>
          <HStack spacing={5} align={'center'}>
            <Box>
                {MyButton('/loginSignUp', 'Login/Sign Up')}
                
            </Box>
          </HStack>

        </Flex>
      </Box>
    </>
  );
}
export default Header;