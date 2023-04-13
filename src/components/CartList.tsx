import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

type CartListProps = {
  id: number;
  data: {
    id: number;
    title: string;
    price: number;
    image: string;
    description: string;
    category: string;
  };
};

const CartList = ({ id, data }: CartListProps) => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '10px',
        maxWidth: '300px',
        height: '410px',
      }}
    >
      <NavLink to={{ pathname: `/products/${data.id}` }}>
        <CardMedia
          sx={{
            width: '150px',
            objectFit: 'contain',
            height: '150px',
            cursor: 'pointer',
          }}
          component="img"
          image={data.image}
          alt={data.title}
        />
      </NavLink>
      <CardContent>
        <Typography
          sx={{ margin: '10px 0', textAlign: 'center' }}
          variant="h6"
        >
          {data.title}
        </Typography>
        <Typography
          sx={{ margin: '10px 0', textAlign: 'center' }}
          variant="subtitle1"
          color="textSecondary"
        >
          ${data.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CartList;
