import { createContext } from 'react';
import useToggleNavbar from '../hooks/useToggleNavbar'; 
import { lists }  from '../data'; 

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const { navbarOpen, openNavbar } = useToggleNavbar();

    return (
        <AppContext.Provider
            value={{
                openNavbar, 
                navbarOpen,
                menu: lists.menu, 
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };