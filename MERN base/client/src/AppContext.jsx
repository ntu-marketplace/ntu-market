import React, {
    createContext,
    useContext,
    useState,
  } from 'react';
  import Proptypes from 'prop-types';
  
  const AppContext = createContext(null
    // {
    //     isloggedIn: false,
    //     setIsLoggedIn: () => {}
    // }
  );
  
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
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('user') || false);
    
    return (
      <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        {children}
      </AppContext.Provider>
    );
  };
  
  AppContextProvider.propTypes = {
    children: Proptypes.node.isRequired,
  };