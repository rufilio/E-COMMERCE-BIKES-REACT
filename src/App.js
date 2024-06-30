import React from 'react';
import './App.css'

import { Navbar } from './assets/widgets/components/navbar';
import Home from './pages/home';
import About from './pages/About';
import Contact from './pages/Contact';
import Accesorios from './pages/Accesorios';
import Models from './pages/Models';
import Apparel from './pages/Apparel';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from "./assets/context/CartContext";
import Carrito from "./assets/widgets/components/Carrito";
import Checkout from './assets/widgets/components/Checkout';
import ItemDetailContainer from './assets/widgets/components/ItemDetailContainer';





function App() {
  return (
    <CartProvider>
        <BrowserRouter>

          <Navbar />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/Accesories' element={<Accesorios/>}/>
            <Route path='/Models' element={<Models/>}/>
            <Route path='/Apparel' element={<Apparel/>}/>
            <Route path="/Accesories/:id" element={<ItemDetailContainer />}/>
            <Route path="/Accesorios/:categoria" element={<Accesorios />} />
            <Route path="/carrito" element={<Carrito />}/>
            <Route path="/checkout" element={<Checkout />}/>
          </Routes>

        </BrowserRouter>
</CartProvider>
  );
}

export default App;
