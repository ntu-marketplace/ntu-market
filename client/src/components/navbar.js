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
  Image
} from '@chakra-ui/react';
import { HamburgerIcon, Search2Icon, EmailIcon, StarIcon, AddIcon, InfoIcon, ExternalLinkIcon, MoonIcon } from '@chakra-ui/icons';
import cart from '../media/LOGO.png'
import { Link } from 'react-router-dom';
import { StateContext } from '../pages/Home';
import { useState, useEffect, useContext } from 'react';

function Navbar(props) {
  const listings = useContext(StateContext); // list of items from home
  const [query, setQuery] = useState("") // childstate
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);

  const handleSearch = (e) =>{
    setQuery(e.target.value);
  }

  const checkSuperAdmin = () => {
    if(localStorage.getItem("isSuperAdmin") == 'true'){
      setIsSuperAdmin(true);
      return;
    }
    else{
      setIsSuperAdmin(false);
    }
    return;
  }
  useEffect(()=>{
    checkSuperAdmin();
  },[isSuperAdmin])


  function handleChange() { 
    const filteredListings = listings.filter((listing) => 
    listing.productTitle.toLowerCase().includes(query.toLowerCase()));
    props.onChildStateChange(filteredListings);
    if(filteredListings != listings){
      const didSearched = true
      props.onSearchedState(didSearched);
    }
  }

  const handleLogout = () => {
    localStorage.setItem('user','false');
    localStorage.setItem('isSuperAdmin', 'false');
  };

  return (
    <>
      <Box bg={'#181C62'} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Show above='620px'>
            <Box>
              <Link to='/home'>
                <img src={cart} alt="NTU Marketplace" height={150} width={150} />
              </Link>
            </Box>
          </Show>
          <Show below='620px'>
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
                  {!isSuperAdmin && <Image
                      boxSize='4rem'
                      borderRadius='full'
                      src='https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                      alt='Profile Picture'
                      mr='12px'
                    />}
                  {isSuperAdmin && <Image
                      boxSize='4rem'
                      borderRadius='full'
                      src='https://bit.ly/dan-abramov'
                      alt='Profile Picture'
                      mr='12px'
                    />
                  }
                    {!isSuperAdmin && <span>Hey there, Monica!</span>}
                    {isSuperAdmin && <span>Hello Super Admin</span> }
                  </MenuItem>
                  <Link to='/home'>
                      <MenuItem>Home</MenuItem>
                  </Link>
                  <Link to='/myProfile'>
                    <MenuItem>My Profile</MenuItem>
                  </Link>
                  {isSuperAdmin && <Link to="https://dsoh010.grafana.net/goto/ipj5N-YVk?orgId=1">
                    <MenuItem >Server Health</MenuItem>
                  </Link>}
                  {/*  */}
                  {isSuperAdmin && <Link to="https://dsoh010.grafana.net/goto/7mw13BLVz?orgId=1">
                    <MenuItem >Revenue </MenuItem>
                  </Link>}
                  {isSuperAdmin && <Link to="/MongoMetrics">
                    <MenuItem >Database</MenuItem>
                  </Link>
                  }
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
              <Input bg='#343769' color={'white'} variant='filled' type="text" onChange={handleSearch} onClick={handleChange} placeholder='Find the items you want' />
            </Show>
            <Show below='620px'>
              <Input bg='#343769' color={'white'} textAlign='center' variant='filled' type="text" onChange={handleSearch} onClick={handleChange} placeholder='Search' />
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
            <Show above='620px'>
              {isSuperAdmin && <Link to="https://dsoh010.grafana.net/goto/ipj5N-YVk?orgId=1">
                <InfoIcon color={'white'} h={'1.2em'} w={'1.2em'} />
              </Link>}
              {/*  */}
              {isSuperAdmin && <Link to="https://dsoh010.grafana.net/goto/7mw13BLVz?orgId=1">
                <ExternalLinkIcon color={'white'} h={'1.2em'} w={'1.2em'} />
              </Link>}
              {isSuperAdmin && <Link to="/MongoMetrics">
                <MoonIcon color={'white'} h={'1.2em'} w={'1.2em'} />
              </Link>
              }

            </Show>


            <Show above='620px'>
              <Flex alignItems={'center'}>
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}>
                    {!isSuperAdmin && <Avatar
                      size={'sm'}
                      src={
                        'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                      }
                    />}
                    {isSuperAdmin && <Avatar
                    size={'sm'}
                    src={
                      'https://bit.ly/dan-abramov'
                    }/>

                    }
                  </MenuButton>
                  <MenuList>
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