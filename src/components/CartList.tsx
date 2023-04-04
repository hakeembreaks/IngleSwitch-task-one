import React from 'react';

import { NavLink } from 'react-router-dom';

import { Card, CardMedia, CardContent, Typography, makeStyles } from '@material-ui/core';

// The makeStyles hook allows us to create CSS styles for our components

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '10px',
    maxWidth: '300px',
    height: "360px",
  },
  image: {
   width: "150px",
   objectFit: "contain",
   height: "150px",
   cursor: "pointer",
  },
  title: {
    margin: '10px 0',
    textAlign: 'center',
    
  },
  price: {
    
  },
 
  description: {

  },
})

const API_IMG = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"

// next line defines a type called CartListProps that specifies the props that the CartList component expects.

type CartListProps = {
  id: number;
  data: {
    id: number;
    title: string;
    price: number;
    image: string;
    description: string;
    category: string;
  }
}

// The next line  before return defines the CartList component, which accepts props of type CartListProps. The props are destructured to obtain the id and data values.

const CartList = ({id, data}: CartListProps) => {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <NavLink to={{ pathname: `/products/${data.id}` }}>
        <CardMedia className={classes.image} component="img" image={data.image} alt={data.title} />
      </NavLink>
      <CardContent>
      <Typography className={classes.title} variant="h6">
      {data.title}
      </Typography>
      <Typography className={classes.price} variant="subtitle1" color="textSecondary">
          ${data.price}
        </Typography> 
        </CardContent> 
    </Card>
  );
};

export default CartList;
