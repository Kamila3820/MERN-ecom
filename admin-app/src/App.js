import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Nav, Navbar,NavDropdown } from 'react-bootstrap';
import Layout from './components/Layout';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';

function App() {
  return (
    <div className="App">            
        <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
