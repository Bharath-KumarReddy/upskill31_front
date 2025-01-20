import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Register.jsx';
import Login from './Login.jsx';
import Protected from './Protected.jsx';

function App() {
    return (
        <Router>
                <Routes>
                    <Route path="/" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/protected" element={<Protected />} />
                </Routes>
          
        </Router>
    );
}

export default App;
