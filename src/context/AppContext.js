import { createContext } from 'react';
import useToggleNavbar from '../hooks/useToggleNavbar'; 

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const { navbarOpen, openNavbar } = useToggleNavbar();

    return (
        <AppContext.Provider
            value={{
                openNavbar, 
                navbarOpen, 
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };