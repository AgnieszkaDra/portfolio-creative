
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/components/layout/SharedLayout/SharedLayout.js';
import Header from './components/layout/Header/Header.js';
import About from './components/layout/About/About.js';
import Projects from './components/layout/Projects/Projects.js';
import Contact from './components/layout/Contact/Contact.js';

function App() {

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />}>
                    <Route index element={<Header />} />
                    <Route path='home' element={<Header />} />
                    <Route path='about' element={<About />} />
                    <Route path='projects' element={<Projects />} />
                    <Route path='contact' element={<Contact />} />
                </Route>
            </Routes>
        </Router>
    );
    
}

export default App;