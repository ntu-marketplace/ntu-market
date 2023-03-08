//functions
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react';
import { getTest } from "./api/test";
import Login from "./pages/Login/Login";
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
// import Signup from "./pages/Login/Signup";
import Navbar from './components/navbar';
import MyProfile from './pages/MyProfile';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Wallet from './pages/Wallet'
import MyChats from './pages/MyChats';
import Notifications from './pages/Notifications';
import Wishlist from './pages/Wishlist';
import Details from './pages/Product/Details'
import Payment from './pages/Product/Payment';
import Chat from './pages/Product/Chat';
import ConfirmationBuy from './pages/Product/ConfirmationBuy'
import Profile from './pages/Profile';
import Listings from './components/listings';
import Reviews from './components/reviews';
import Listing from './pages/Listing/Listing'
import ConfirmationList from './pages/Listing/ConfirmationList'
import { useAuthContext } from './pages/Login/hooks/useAuthContext';


function App() {
  const { user } = useAuthContext()

  return (
    <>
    <ChakraProvider>
      <div >
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={!user ? <Login/> : <Navigate to="/"/>}/>
            {/* <Route path="/signup" element={!user ? <Signup/> : <Navigate to="/"/>}/> */}
            <Route path='/myProfile' element={<MyProfile/>}>
              <Route path='myListings' element={<Listings/>}/>
              <Route path='myReviews' element={<Reviews/>}/>
            </Route>
            <Route path='/settings' element={<Settings/>}/>
            <Route path='/wallet' element={<Wallet/>}/>
            <Route path='/myChats' element={<MyChats/>}/>
            <Route path='/notifications' element={<Notifications/>}/>
            <Route path='/wishlist' element={<Wishlist/>}/>
            <Route path='/details' >
              <Route index element={<Details/>}/>
              <Route path='payment' element={<Payment/>}/>
              <Route path='chat' element={<Chat/>}/>
              <Route path='confirmationBuy' element={<ConfirmationBuy/>}/>
            </Route>
            <Route path='/profile' element={<Profile/>}>
              <Route path='listings' element={<Listings/>}/>
              <Route path='reviews' element={<Reviews/>}/>
            </Route>
            <Route path='/newListing'>
              <Route index element={<Listing/>}/>
              <Route path='confirmation' element={<ConfirmationList/>}/>
            </Route>
          </Routes>
      </div>
    </ChakraProvider>
    </>
  );
}

export default App;
