import React, { useState, useEffect } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './App.css';

import {Paper, Grid} from '@mui/material'


import CartList from './components/CartList';
import Details from "./components/Details";

function App() {
  const [products, setProducts] = useState([]); // declared a state variable 'products' and a function 'setProducts' to update it using the 'useState' hook
  const [isPending, setIsPending] = useState(true);

  useEffect(() => { // we use the use Fetch hook to fetch data when the component mounts
    const API = "https://fakestoreapi.com/products";
    fetch(API)
      .then((res) => res.json()) // // line converts response to JSON format and the following line .then data, handles the json data
      .then(data => {
        console.log(data);
        setProducts(data); 
        setIsPending(false);
      })
      .catch(error => {
        console.error(error);
      });
  }, []); // Empty dependency array tells 'useEffect' to run only once when the component mounts

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/products/:id" element={<Details />} />
        </Routes>
      {isPending && <div> Loading... </div>}
      <Grid container spacing={1}>
      {products && products.length > 0 ? (
        products.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper elevation={3}>
          <CartList id={index} data={item} />  {/*this line and up Maps over 'products' array, passing each item as a prop to the 'CartList' component */}
            </Paper>
          </Grid>
          ))
        ) : (
        <></>
      )}
      </Grid>
      </BrowserRouter>
    </div>
  );
}

export default App;


