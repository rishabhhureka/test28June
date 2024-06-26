'use client'
import React,{useState} from 'react';
import { Box, Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography ,IconButton} from '@mui/material';
import Image from 'next/image';
import productImg from "../../Img/GoogleReviewCard.png"
import blackMetal from "../../Img/MetalCard4.png";
import paperCard from "../../Img/customCard.gif"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import "./cart.css"
import Link from 'next/link';
const imageMapping = {
  'Custom Google Review Card': productImg,
  'NFC Black Metal Card': blackMetal,
  'mTap Custom Cards': paperCard,
};

const Cart = () => {
  // Replace with your actual cart data
  const initialCartItems = [
    { name: 'Custom Google Review Card', price: 34.99, quantity: 1 },
    { name: 'NFC Black Metal Card', price: 69.00, quantity: 3 },
    { name: 'mTap Custom Cards', price: 34.99, quantity: 2 },
  ];
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleIncrement = (index) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity += 1;
    setCartItems(newCartItems);
  };

  const handleDecrement = (index) => {
    const newCartItems = [...cartItems];
    if (newCartItems[index].quantity > 1) {
      newCartItems[index].quantity -= 1;
      setCartItems(newCartItems);
    }
  };
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal;

  return (
    <TableContainer component={Paper} sx={{padding:'2rem',minHeight:'120vh',marginTop:'10rem',marginBottom:'2rem',"@media (max-width: 767px)": {
      padding:'1rem'
      }, }}>
         <Link href="/shop-nfc"  ><ArrowBackIosNewIcon sx={{fontSize:40,marginBottom:'1rem' ,color:'black'}} /></Link>
    <Box sx={{ flexGrow: 1, padding: 3,"@media (max-width: 767px)": {
                 padding: 0
                      }}}>
      <Typography variant="h1" gutterBottom sx={{textAlign:'center',fontSize:'80px',fontWeight:'900'}}>
        Shopping Cart
      </Typography>
   
        <Table sx={{marginTop:'4rem',"@media (max-width: 767px)": {
                      display:'flex',flexDirection:"column"
                      },}}>
          <TableHead sx={{backgroundColor:'black'}}>
            <TableRow sx={{"@media (max-width: 767px)": {
                  display:'flex',justifyContent:"space-around"
                      }}}>
              <TableCell sx={{color:'white',fontSize:'40px',fontWeight:'600',padding:'2rem',"@media (max-width: 767px)": {
                   fontSize:'20px',fontWeight:'600',padding:'.5rem'
                      }}}>Product</TableCell>
              <TableCell sx={{color:'white',fontSize:'40px',fontWeight:'600',"@media (max-width: 767px)": {
                   fontSize:'20px',fontWeight:'600',padding:'.5rem'
                      }}} align="center">Price</TableCell>
              <TableCell sx={{color:'white',fontSize:'40px',fontWeight:'600',"@media (max-width: 767px)": {
                   fontSize:'20px',fontWeight:'600',padding:'.5rem'
                      }}} align="center">  Quantity</TableCell>
              <TableCell sx={{color:'white',fontSize:'40px',fontWeight:'600',"@media (max-width: 767px)": {
                   fontSize:'20px',fontWeight:'600',padding:'.5rem'
                      }}} align="center">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody >
            {cartItems.map((item, index) => (
              <TableRow key={index} >
                
                <TableCell className='cartImage' sx={{fontSize:"25px",fontWeight:'400',padding:'50px',display:'flex',justifyContent:'start',gap:6,"@media (max-width: 767px)": {
                   fontSize:'20px',padding:'1rem'
                      } }} >
                  <Image  src={imageMapping[item.name]} alt={item.name} width={100} height={100}  />
                     
                  {item.name}</TableCell>
                <TableCell sx={{fontSize:"25px",fontWeight:'600',"@media (max-width: 767px)": {
                   fontSize:'20px',padding:'1rem'
                      }}}  align="center">${item.price.toFixed(2)}</TableCell>
                <TableCell sx={{fontSize:"25px",fontWeight:'600',"@media (max-width: 767px)": {
                   fontSize:'20px',padding:'1rem'
                      }}}  align="center"><Box display="flex" alignItems="center" border={1} borderRadius={10} padding={1} sx={{ width: 'fit-content', margin: 'auto' ,"@media (max-width: 767px)": {
                        width: 'min-content', margin: 'auto',padding:0
                           }}}>
                    <IconButton onClick={() => handleDecrement(index)} aria-label="decrement">
                      <RemoveIcon />
                    </IconButton>
                    <Typography variant="h6" mx={2} sx={{ fontSize: '20px', fontWeight: "bold" }}>
                      {item.quantity}
                    </Typography>
                    <IconButton onClick={() => handleIncrement(index)} aria-label="increment">
                      <AddIcon />
                    </IconButton>
                  </Box></TableCell>
                <TableCell sx={{fontSize:"25px",fontWeight:'600'}}  align="center">${(item.price * item.quantity).toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
     
      <Box sx={{ display: 'flex', justifyContent: 'end', marginTop: 2,gap:8 ,backgroundColor:'black',padding:'1.5rem',"@media (max-width: 767px)": {
                   padding:'1rem'
                      }}}>
        <Typography sx={{color:'white',fontSize:"35px",fontWeight:'400',"@media (max-width: 767px)": {
                fontSize:'25px'
                      }}} variant="body1">Subtotal: ${subtotal.toFixed(2)}</Typography>
        <Typography sx={{color:'white',fontSize:"35px",fontWeight:'600',"@media (max-width: 767px)": {
                fontSize:'25px'
                      }}}  variant="body1">Total: ${total.toFixed(2)}</Typography>
      </Box>
      <Grid container spacing={2} sx={{ marginTop: 2 ,display:'flex',justifyContent:'end'}}>
        <Grid item>
          <Button variant="contained"  sx={{padding:'1rem',width:'18vw',backgroundColor:'#0077b6',color:'white',fontSize:"20px",fontWeight:'600',"@media (max-width: 767px)": {
                 width:"50vw"
                      }}}>
            UPDATE CART
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained"  sx={{padding:'1rem',width:'18vw',backgroundColor:'#00b4d8',color:'white',fontSize:"20px",fontWeight:'600',"@media (max-width: 767px)": {
                    width:"50vw"
                      }}}>
            CHECKOUT
          </Button>
        </Grid>
      </Grid>
    </Box>
    </TableContainer>
  );
};

export default Cart;