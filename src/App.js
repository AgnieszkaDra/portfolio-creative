import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainPage, About, Projects, Contact } from './components';

function App() {

    return (
        <Router>
            <Routes>
                <Route index element={<MainPage />} />
                <Route path='home' element={<MainPage />} />
                <Route path='about' element={<About />} />
                <Route path='projects' element={<Projects />} />
                <Route path='contact' element={<Contact />} />
            </Routes>
        </Router>
    );
    
}

export default App;