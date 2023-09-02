import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Login from './components/Login';
import Home from './components/Home';
import Error from "./components/Error";
import Features from './components/Features';
import Footer from './components/Footer';

function App() {

  return (
    <BrowserRouter>
    <Header />

    <Routes>

    <Route path='/' element={<Home />} />
    <Route path='features' element={<Features />} />
    <Route path='pricing' element={<Pricing />} />
    <Route path='contact' element={<Contact />} />
    <Route path='login' element={<Login />} />
    <Route path='*' element={<Error />} />

    </Routes>

    <Footer />

    </BrowserRouter>
  )
}

export default App
