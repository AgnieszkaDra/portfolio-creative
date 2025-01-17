import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainPage, About, Projects, Contact } from './components';
import { AppProvider } from './context/AppContext';

function App() {

    return (
        <AppProvider>
           <Router>
            <Routes>
                <Route index element={<MainPage />} />
                <Route path='home' element={<MainPage />} />
                <Route path='about' element={<About />} />
                <Route path='projects' element={<Projects />} />
                <Route path='contact' element={<Contact />} />
            </Routes>
        </Router>  
        </AppProvider>
    );
}

export default App;