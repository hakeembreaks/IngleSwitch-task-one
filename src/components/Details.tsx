import React, { useState, useEffect } from 'react';

// useParams is a hook from the react-router-dom library used to extract parameters from the URL

import { useParams } from 'react-router-dom';

// Product is a custom type defined to represent the data returned from the API.

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

const Details = () => {
  const { id } = useParams(); // useParams hook is used to get the id parameter from the URL.
  const [product, setProduct] = useState<Product | null>(null); // 

  useEffect(() => {
    const API = "https://fakestoreapi.com/products/" +id;
    fetch(API)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);
 
  return (
    <div>
      {product && (
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </div>
      )}
    </div>
  );
};

export default Details;
