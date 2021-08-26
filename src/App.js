import React from "react";
import Hero from "./components/Hero";
import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from "./globalStyles";
import Product from "./components/Products";
import { productData,productDataTwo } from "./components/Products/data";
import Feature from "./components/Feature";
import Footer from "./components/Footer"


function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Product heading='Choose your favorite Pizza' data={productData}/>
      <Feature />
      <Product heading='Sweet Treats for You ' data={productDataTwo}/>
      <Footer/>

    </Router>
    
  );
}

export default App;
