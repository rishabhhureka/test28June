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



// if i want on hover dropdown in mainHeader tailwind i can use this 
// const [shopNFCOpen, setShopNFCOpen] = useState(false);
// const [solutionsOpen, setSolutionsOpen] = useState(false);
// <Popover 
//   className="relative"
//   onMouseEnter={() => setShopNFCOpen(true)}
//   onMouseLeave={() => setShopNFCOpen(false)}
// >
//   <PopoverButton className="flex items-center gap-x-1 text-2xl leading-6 text-white hover:text-indigo-600">
//     <Link href='/shop-nfc' alt="">Shop NFC</Link>
//     <ChevronDownIcon className="h-6 w-8 flex-none text-white" aria-hidden="true" />
//   </PopoverButton>

//   <PopoverPanel
//     static
//     className={`absolute -left-8 top-full z-10 mt-6 w-screen max-w-sm overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition ${
//       shopNFCOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
//     }`}
//   >
//     <div className="p-4">
//       {products.map((item) => (
//         <div
//           key={item.name}
//           className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
//         >
//           <div className="flex-auto">
//             <Link href={item.href} className="block text-2xl text-gray-900 hover:text-indigo-600">
//               {item.name}
//               <span className="absolute inset-0" />
//             </Link>
//             <p className="mt-1 text-gray-600">{item.description}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   </PopoverPanel>
// </Popover>
{/* <Popover className="relative"
  onMouseEnter={() => setSolutionsOpen(true)}
  onMouseLeave={() => setSolutionsOpen(false)}
>
  <PopoverButton className="flex items-center gap-x-1 text-2xl leading-6 text-white hover:text-indigo-600">
    Solutions
    <ChevronDownIcon className="h-6 w-8 flex-none text-white" aria-hidden="true" />
  </PopoverButton>

  {solutionsOpen && (
    <PopoverPanel static className="absolute -left-16 top-full z-10 mt-6 w-screen max-w-xs overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
    
    </PopoverPanel>
  )}
</Popover> */}