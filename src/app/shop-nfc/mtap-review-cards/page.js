"use client";
import React from "react";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Link from "next/link";
import "../shop.css";
import { Box, Button } from "@mui/material";
const ReviewCards = () => {
  const handleClick = (event) => {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  };
  const products = [
    {
      id: 1,
      name: "Google Review Card",
      href: "#",
      imageSrc:
        "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-06/mtap-google%20review%20card%20with%20QR%20codemtap-GCR.png",
      imageAlt: "Google Review Card",
      price: "$14.99",
    },
    {
      id: 2,
      name: "Custom Google Review Card",
      href: "#",
      imageSrc:
        "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-04/mTap-Google-Custom-Review%20Card-01.png",
      imageAlt: "Custom Google Review Card",
      price: "$34.99",
    },
    {
      id: 3,
      name: "5 Google Review Card + Table Stand",
      href: "#",
      imageSrc:
        "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-05/5-Google-Review-Cards-Table-Stand.png",
      imageAlt: " Google Review Card",
      price: "$69.00",
    },
   
  ];
  return (
    <div className="cardContainer">
      {" "}
      <div className="bg-white productContainer">
        <div role="presentation" onClick={handleClick}>
          <Breadcrumbs
            aria-label="breadcrumb"
            separator={
              <NavigateNextIcon fontSize="medium" sx={{ color: "black" }} />
            }
            sx={{
              display: "inline-block",
              color: "black",
              marginTop: "2rem",
              marginLeft: "4rem",
       
              border: "1px solid transparent",
              backgroundColor: "transparent",
              "@media (max-width: 767px)": {
                marginLeft: "0rem",
                lineHeight:'3.8rem',
              },
             
            }}
          >
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="linkBlog"
            >
              <Typography
                variant="contained"
                sx={{
                  color: "black",
                  fontSize: "20px",
                  border: "1px solid transparent",
                  padding: "10px",
                  borderRadius: "10px",
                  backgroundColor: "#E2F1F5",
                  cursor: "pointer",
                  ":hover": {
                    backgroundColor: "grey", // Change background color on hover
                    color: "white", // Change text color on hover
                  },
                  "@media (max-width: 767px)": {
                    fontSize: "20px",
                  },
                }}
              >
                Home
              </Typography>
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/shop-nfc"
              className="linkBlog"
            >
            <Typography
              variant="contained"
              sx={{
                color: "black",
                border: "1px solid transparent",
                padding: "10px",
                borderRadius: "10px",
                fontSize: "20px",
                backgroundColor: "#E2F1F5",
                cursor: "pointer",
                ":hover": {
                  backgroundColor: "grey", // Change background color on hover
                  color: "white", // Change text color on hover
                },
                "@media (max-width: 767px)": {
                  fontSize: "20px",
                },
              }}
            >
              Shop NFC
            </Typography>
            </Link>
            <Typography
              variant="contained"
              sx={{
                color: "black",
                border: "1px solid transparent",
                padding: "10px",
                borderRadius: "10px",
                fontSize: "20px",
        
                "@media (max-width: 767px)": {
                  fontSize: "20px",
               
                },
              }}
            >
            Google Review Cards
            </Typography>
          </Breadcrumbs>
        </div>
        
       
        {/* div for products */}
        <div className="bg-white allProductContainer">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 imagesContainer">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-24 ">
              {products.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white-200  lg:aspect-none group-hover:opacity-75 lg:h-100">
                    <Image
                    src={product.imageSrc}
                    width={800}
                    height={800}
                   alt={product.imageAlt}
                     
                      quality={100}
                      priority
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    
                    />
                  </div>
                  <div className="mt-16 mb-16 flex justify-center">
                    <div style={{display:'flex',flexDirection:'column',gap:'2rem'}}>
                      <h3 className="text-2xl font-bold text-gray-700" >
                        <Link href={`/shop-nfc/mtap-review-cards/${product.id}`} key={product.id}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.name}
                        </Link>
                      </h3>
                      <p className="text-2xl text-center font-medium  font-bold text-gray-900" style={{fontWeight:'700'}}>
                      {product.price}
                    </p>
                    <Box sx={{
              display: 'flex',
              justifyContent:'center',
         
            }}>
            <Link href="/cart"    className='AddToCartButton'>
              <Button
             
                sx={{
                  '--variant-borderWidth': '2px',
                  borderRadius: 10,
                  width: '13vw',
                  padding: '1rem',
                  mx: 'auto',
                  fontSize:'18px',
                  fontWeight:'800',
                  backgroundColor: "#185ea5",
                      color:'white',
                '&:hover': {
    backgroundColor: '#186ea5',
    color:'white',
  } ,'@media (max-width: 768px)': {
    maxWidth: '100vw',
    padding: '0.5rem',
  }
                }}
              >
                ADD TO CART
              </Button>
            </Link>
            </Box>
                    </div>
                   
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCards;
