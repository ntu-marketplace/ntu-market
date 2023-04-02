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
import { HamburgerIcon, Search2Icon, EmailIcon, StarIcon, AddIcon } from '@chakra-ui/icons';
import cart from '../media/shopping-cart.png'
import { Link } from 'react-router-dom';
import { useAppContext } from '../AppContext';
import { useState, useEffect } from 'react';

function Navbar(props) {
  console.log(localStorage)
  const handleLogout = () => {
    localStorage.setItem('user','false')
  };

  return (
    <>
      <Box bg={'#181C62'} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Show above='766px'>
            <Box>
              <Link to='/home'>
                <img src={cart} alt="NTU Marketplace" height={50} width={50} />
              </Link>
            </Box>
          </Show>
          <Show below='766px'>
            <Flex alignItems={'center'}>
              <Menu>
                <MenuButton
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <HamburgerIcon color='white' h={'1.5em'} w={'1.5em'} ></HamburgerIcon>
                </MenuButton>
                <MenuList>
                  <MenuItem minH='48px'>
                    <Image
                      boxSize='4rem'
                      borderRadius='full'
                      src='https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                      alt='Profile Picture'
                      mr='12px'
                    />
                    <span>Hey there, Monica!</span>
                  </MenuItem>
                  <Link to='/settings'>
                    <MenuItem>Settings</MenuItem>
                  </Link>
                  <Link to='/myProfile'>
                    <MenuItem>My Profile</MenuItem>
                  </Link>
                  <MenuDivider />
                  <MenuItem>
                    <Button onClick={handleLogout}>
                      Sign out
                    </Button>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Show>
          <InputGroup m={4} >
            <InputRightElement
              pointerEvents='none'
              children={<Search2Icon color='white' />}
            />
            <Show above='620px'>
              <Input bg='#343769' variant='filled' placeholder='Find the items you want' />
            </Show>
            <Show below='620px'>
              <Input bg='#343769' textAlign='center' variant='filled' placeholder='Search' />
            </Show>
          </InputGroup>
          <HStack spacing={8} align={'center'}>
            <Link to='/addListing'>
              <AddIcon color={'white'} h={'1.2em'} w={'1.2em'} />
            </Link>
            <Link to='/myChats'>
              <EmailIcon color={'white'} h={'1.5em'} w={'1.5em'} />
            </Link>
            <Link to='/wishlist'>
              <StarIcon color={'white'} h={'1.2em'} w={'1.2em'} />
            </Link>
            <Show above='766px'>
              <Flex alignItems={'center'}>
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}>
                    <Avatar
                      size={'sm'}
                      src={
                        'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                      }
                    />
                  </MenuButton>
                  <MenuList>
                    <Link to='/settings'>
                      <MenuItem>Settings</MenuItem>
                    </Link>
                    <Link to='/myProfile'>
                      <MenuItem>My Profile</MenuItem>
                    </Link>
                    <MenuDivider />
                    <MenuItem>
                      <Button onClick={handleLogout}>
                        Sign out
                      </Button>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            </Show>
          </HStack>

        </Flex>
      </Box>
    </>
  );
}
export default Navbar;