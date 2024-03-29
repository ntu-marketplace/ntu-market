// import { getTest } from "./api/test";
import Login from "./pages/Log/Login";
import LoginSignUp from "./pages/Log/LoginSignUp";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Navigate } from "react-router-dom";
import SignUp from "./pages/Log/SignUp";
import Authentication from "./pages/Log/Authentication";
import MyProfile from './pages/Profile/MyProfile';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Wallet from './pages/Wallet'
import MyChats from './pages/MyChats';
import Wishlist from './pages/Wishlist';
import Details from './pages/Product/Details'
import Payment from './pages/Product/Payment';
import Chat from './pages/Product/Chat';
import ConfirmationBuy from './pages/Product/ConfirmationBuy'
import SellerProfile from './pages/Profile/SellerProfile';
import Listings from './components/listings';
import Reviews from './components/reviews';
import Listing from './pages/Listing/Listing';
import ConfirmationList from './pages/Listing/ConfirmationList';
import {ChakraProvider} from "@chakra-ui/react";
import ModalIntro from "./pages/ModalIntro";
import ErrorNotFound from "./pages/ErrorNotFound";
import AddListing from "./pages/AddListing";
import { AppContextProvider } from "./AppContext";
import Metrics from "./pages/Metrics";
import Checkout from "./pages/Checkout";
import MongoMetrics from "./pages/MongoMetrics";
import { useState } from "react";

function App() {
  const [currentChat, setCurrentChat] = useState(undefined);
  
  return (
    <AppContextProvider>
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<ModalIntro/>}/>
        <Route path="/loginSignUp" element={<LoginSignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='authentication' element={<Authentication/>}/>
        <Route path='/home' element={<Home setCurrentChat={setCurrentChat}/>}/>
        <Route path='/myProfile' element={<MyProfile/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/wallet' element={<Wallet/>}/>
        <Route path='/myChats' element={<MyChats currentChat={currentChat} setCurrentChat={setCurrentChat}/>}/>
        <Route path='/metrics' element={<Metrics/>}/>
        <Route path='/mongoMetrics' element={<MongoMetrics/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/addListing' >
          <Route index element={<AddListing/>} />
          <Route path="checkout" element={<Checkout/>}/>
        </Route>
        <Route path='/sellerProfile' element={<SellerProfile/>}>
          <Route path='listings' element={<Listings/>}/>
          <Route path='reviews' element={<Reviews/>}/>
        </Route>
        <Route path='*' element={<Navigate to='/404'/>}/>
        <Route path='/404'element={<ErrorNotFound/>}/>
      </Routes>
    </ChakraProvider>
    </AppContextProvider>
  );
}

export default App;
