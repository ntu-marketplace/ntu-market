import { React } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Input,
  InputRightElement,
  InputGroup,
  Show,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, Search2Icon, BellIcon, EmailIcon, StarIcon } from '@chakra-ui/icons';
import cart from '../media/shopping-cart.png'
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
                <img src={cart} alt="NTU Marketplace" height={50} width={50} />
              </Link>
            </Box>
          </Show>
          <Show below='766px'>
            <Box>
                <Link to='/'>
                <img src={cart} alt="NTU Marketplace" height={50} width={50} />
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