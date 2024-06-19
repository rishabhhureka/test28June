"use client";
import React from "react";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Link from "next/link";
import "../shop.css";
import { Box, Button } from "@mui/material";
const CustomDigitalBusinessCards = () => {
  const handleClick = (event) => {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  };
  const products = [
    {
      id: 1,
      name: "Custom Digital Business Card with NFC-QR Code",
      href: "#",
      imageSrc:
        "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2022-12/mTap%20Custom%20Digital%20Business%20Cards1.gif",
      imageAlt: "Custom Digital Business Card with NFC-QR Code",
      price: "$34.99",
    },
    {
      id: 3,
      name: "Black Digital Business Card",
      href: "#",
      imageSrc:
        "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-03/mTap%20Black%20Digital%20Business%20Card05.png",
      imageAlt: "Black Digital Business Card",
      price: "$24.99",
    },
    {
      id: 4,
      name: "Blue Digital Business Card",
      href: "#",
      imageSrc:
        "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-03/mTap%20Blue%20Digital%20Business%20Card05.png",
      imageAlt: "Blue Digital Business Card",
      price: "$24.99",
    },
    {
      id: 2,
      name: "Green Digital Business Card",
      href: "#",
      imageSrc:
        "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-03/mTap%20Green%20Digital%20Business%20Card05.png",
      imageAlt: "Digital Business Card",
      price: "$24.99",
    },
    {
      id: 5,
      name: "Orange Digital Business Card",
      href: "#",
      imageSrc:
        "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-03/mTap%20Orange%20Digital%20Business%20Card05.png",
      imageAlt: "Digital Business Card",
      price: "$24.99",
    },
    {
      id: 6,
      name: "Purple Digital Business Card",
      href: "#",
      imageSrc:
        "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-03/mTap%20Purple%20Digital%20Business%20Card05.png",
      imageAlt: "Digital Business Card",
      price: "$24.99",
    },
    {
      id: 7,
      name: "Red Digital Business Card",
      href: "#",
      imageSrc:
        "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-03/mTap%20Red%20Digital%20Business%20Card05.png",
      imageAlt: "Digital Business Card",
      price: "$24.99",
    },
    {
      id: 8,
      name: "Yellow Digital Business Card",
      href: "#",
      imageSrc:
        "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-03/mTap%20Yellow%20Digital%20Business%20Card05.png",
      imageAlt: "Digital Business Card",
      price: "$24.99",
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
              mTap Custom Digital Business Cards
            </Typography>
          </Breadcrumbs>
        </div>
        
        {/* div for banner  */}
        <div
          className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-0 lg:px-8 "
          style={{
            backgroundColor: "#070631",
            marginTop: "4rem",
            marginBottom: "4rem",
            maxWidth: "100%",
          }}
        >
          <div className="relative isolate overflow-hidden  px-6 pt-0  sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 ">
            <div
              className="mx-auto max-w-full  lg:mx-0 lg:flex-auto lg:py-32 lg:text-left businessCardHeading"
              style={{ padding: "10rem" }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-7xl py-8">
                Custom Digital Business Cards
              </h1>
              <p
                className="mt-6 text-2xl leading-8 text-gray-300"
                style={{ lineHeight: "40px" }}
              >
                Your digital business card can be customized to carry all your
                branding and details. It looks just like a traditional card, but
                offers so much more. So rather than handing a prospective client
                a conventional business card, use your custom designed Digital
                Business Card. A simple tap of this card on the customer or
                potential clients smartphone delivers a trove of information
                that you can edit. This can be tailored by you to include
                information such as contact details, social media profiles, web
                address, video links and even your calendar as well as so much
                more. Here at mTap we’ve developed this simple, yet highly
                effective solution to replace the traditional card. After all a
                huge percentage of these are lost or discarded in a timeframe
                that’s short enough for the newly forged contact never to be
                acted on.
              </p>
            </div>
          </div>
        </div>
        {/* div for products */}
        <div className="bg-white allProductContainer">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 imagesContainer">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-24 ">
              {products.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white-200  lg:aspect-none group-hover:opacity-75 lg:h-100">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      width={100}
                      height={100}
                      objectFit="cover"
                      loading="eager"
                      quality={100}
                      priority
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-16 mb-16 flex justify-center">
                    <div style={{display:'flex',flexDirection:'column',gap:'2rem'}}>
                      <h3 className="text-2xl font-bold text-gray-700" >
                      <Link href={`custom-digital-business-cards/${product.id}`} key={product.id}>
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

export default CustomDigitalBusinessCards;
