'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import mtapLogo from "../Img/mtapLogo.png";
import menuIcon from "../Img/menu.png";
import closeIcon from "../Img/close.png";
import { Menu, MenuItem, Button } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

// import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';
// import { renewToken } from '../utils/auth';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
// const Header = async() => {
  // const session = await getSession();
  // const user = session?.user;
  // console.log(user);

  // useEffect(() => {
  //   const renew = async () => {
  //     await renewToken();
  //   };

  //   if (user) {
  //     const intervalId = setInterval(renew, 4320 * 60 * 1000); // Renew token every 4320 minutes (3 days)
  //     return () => clearInterval(intervalId);
  //   }
  // }, [user]);
  return (
    <header>
      <nav>
        <div className="logo">
          <Link href="/" aria-label="Go to Home">
            <Image
              src={mtapLogo}
              alt="Logo" height={100} width={100}  loading="eager"
            />
          </Link>
        </div>
        <button className="menu-button" aria-label="Menu Button">
          <Image
           src={menuIcon}
            alt="Menu" 
            onClick={toggleMenu}
            loading="eager"
          />
        </button>
        <ul id="nav" className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <button className="close-button" aria-label="Close Button">
            <Image
              src={closeIcon}
              alt="Close" 
              onClick={toggleMenu}
              loading="eager"
            />
          </button>
          <li  className="dropdown">
            <Link href="/shop-nfc" aria-current="page" className="nav-link">Shop NFC</Link>
            <div className="dropdown-content">
       <div className="emptyDropdown"></div>
     
      
      <div className="maindropdown-content">
      <p className="menu-item">
     <Link href="/shop-nfc/custom-digital-business-cards">mTap Custom Cards</Link>
     </p>
        <p className="menu-item">
        <Link href="/shop-nfc/mtap-review-cards">Google Review Cards</Link>
       
        </p>
     <p className="menu-item">
     <Link href="/shop-nfc/nfc-black-metal-card">NFC Black Metal Card</Link>
     </p>
     <p className="menu-item">
     <Link href="/shop-nfc/mtap-key-fobs">mTap Key Fobs</Link>
     </p>
     <p className="menu-item">
     <Link href="/shop-nfc/mtap-retail-solutions">mTap Retail Solutions</Link>
     </p>
     <p className="menu-item">
     <Link href="/shop-nfc/mtap-business-cards">mTap Business Cards</Link>
     </p>
     <p className="menu-item">
     <Link href="/shop-nfc/mtap-collections">mTap Collections</Link>
     </p>
     <p className="menu-item">
     <Link href="/shop-nfc/mtap-stickers">mTap Stickers</Link>
     </p>
               
     </div>
      </div>
          </li>
       
          <li>
            <Link href="/subscriptions" className="nav-link">Subscriptions</Link>
          </li>
          <li>
            <Link href="/pro" className="nav-link">Pro</Link>
          </li>
          <li>
            <Link href="/teams" className="nav-link">For Teams</Link>
          </li>
          <li className="dropdown" >
      <a   className="nav-link" >Solutions</a>
      <div className="dropdown-content">
       <div className="emptyDropdown"></div>
        <br />
      
      <div className="maindropdown-content">
        <p className="menu-item">
        <Link href="/googlereviewcards" style={{  marginTop: "2rem"}}>Google Review Cards</Link>
       
        </p>
     <p className="menu-item">
     <Link href="/gift">Gift</Link>
     </p>
               <br />
     </div>
      </div>
    </li>
          <li>
            <Link href="/blog" className="nav-link">Blog</Link>
          </li>
          {/* <li>
            <Link href="/cart" className="nav-link"> <ShoppingCartOutlinedIcon sx={{fontSize:30}} /></Link>
          </li> */}
         
        </ul>
        {/* <ul className="auth-links">
        {user ? (
            <li>
              <Link href="/api/auth/logout" aria-current="page" className="auth-link">Sign Out {user.nickname}</Link>
            </li>
          ) : (
            <li>
              <Link href="/api/auth/login" aria-current="page" className="auth-link">Sign In</Link>
            </li>
          )}
        </ul> */}
      </nav>
    </header>
  );
};

export default Header;
