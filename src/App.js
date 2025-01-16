
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SharedLayout, Header, About, Projects, Contact } from './components/layout'; 

function App() {

    return (
        <Router>
            <Routes>
                <Route path='/' element={<SharedLayout/>}>
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