import React, {
    createContext,
    useContext,
    useState,
  } from 'react';
  import Proptypes from 'prop-types';
  
  export const AppContext = createContext(null);  
  export function useAppContext() {
    const context = useContext(AppContext);
  
    if (!context) {
      throw Error(
        'useAppContext must be used in AppContextProvider',
      );
    }
  
    return context;
  };
  
  export const AppContextProvider = ({ children }) => {
    // const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('user') || false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const login=() =>{
        setIsLoggedIn(true);
    }
    const logout = () =>{
        setIsLoggedIn(false);
    }
    return (
      <AppContext.Provider value={{ isLoggedIn, login, logout }}>
        {children}
      </AppContext.Provider>
    );
  };
  
//   AppContextProvider.propTypes = {
//     children: Proptypes.node.isRequired,
//   };