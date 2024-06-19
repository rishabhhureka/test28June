"use client";
import Image from "next/image";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import mtapBusinessCard from "../../Img/001.png";
import Typography from "@mui/material/Typography";
import "./shop.css";
import Link from "next/link";
const allProducts = [
  {
    id: 1,
    name: "mTap Custom Digital Business Cards",
    href: "/shop-nfc/custom-digital-business-cards",
    imageSrc:
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/styles/max_325x325/public/2023-02/card300.png?itok=ommdsCfk",
    imageAlt: "Cards",
  },
  {
    id: 2,
    name: "Metal Cards",
    href: "/shop-nfc/nfc-black-metal-card",
    imageSrc:
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/styles/max_325x325/public/2024-04/Metal-Card-Landing-Page-Image.png?itok=ghG4ckL_",
    imageAlt: "Cards",
  },
  {
    id: 3,
    name: "Google Review Cards",
    href: "/shop-nfc/mtap-review-cards",
    imageSrc:
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/styles/max_325x325/public/2024-04/Google-Review-Card-01_0.png?itok=cCUfzVeG",
    imageAlt: "Cards",
  },
  {
    id: 4,
    name: "mTap Retail Solutions",
    href: "/shop-nfc/mtap-retail-solutions",
    imageSrc:
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/styles/max_325x325/public/2024-04/mTap-Table-Stand.png?itok=lOGFZzc2",
    imageAlt: "Cards",
  },
  {
    id: 5,
    name: "mTap Key Fobs",
    href: "/shop-nfc/mtap-key-fobs",
    imageSrc:
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/styles/max_325x325/public/2021-12/Keyfobs%20Blue.png?itok=1xYOx5VH",
    imageAlt: "Cards",
  },
  {
    id: 6,
    name: "mTap Business Cards",
    href: "/shop-nfc/mtap-business-cards",
    imageSrc:
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/styles/max_325x325/public/2021-12/NFC-Enabled-Plastic-Business-Card_1.jpg?itok=bVDbKdPv",
    imageAlt: "Cards",
  },
  {
    id: 7,
    name: "Wooden Cards",
    href: "/shop-nfc/wooden-cards",
    imageSrc:
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/styles/max_325x325/public/2024-06/mtap%20wood%20digital%20business%20card.png?itok=069QyXBA",
    imageAlt: "Cards",
  },
  {
    id: 8,
    name: "Wrist Bands",
    href: "/shop-nfc/wrist-bands",
    imageSrc:
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/styles/max_325x325/public/2024-06/mtap-wrist-bands.png?itok=Iz4LEP-9",
    imageAlt: "Cards",
  },
  {
    id: 9,
    name: "mTap Stickers",
    href: "/shop-nfc/mtap-stickers",
    imageSrc:
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/styles/max_325x325/public/2021-12/mTap%20Circle%20Flat%20Small.png?itok=qu1UT8W1",
    imageAlt: "Cards",
  },
  {
    id: 10,
    name: "mTap Collections",
    href: "/shop-nfc/mtap-collections",
    imageSrc:
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/styles/max_325x325/public/2021-12/mTap%20Collections.jpg?itok=-mQYfHhz",
    imageAlt: "Cards",
  },
  // More products...
];
const products = [
  {
    id: 1,
    name: "NFC Black Metal Cards",
    href: `/shop-nfc/nfc-black-metal-card`,
    imageSrc:
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/styles/max_325x325/public/2024-04/Metal-Card-Landing-Page-Image.png?itok=ghG4ckL_",
    imageAlt: "Cards",
  },
  {
    id: 3,
    name: "Google Review Cards",
    href: "/shop-nfc/mtap-review-cards",
    imageSrc:
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/styles/max_325x325/public/2024-04/Google-Review-Card-01_0.png?itok=cCUfzVeG",
    imageAlt: "Cards",
  },
  {
    id: 4,
    name: "mTap Table Stand",
    href: "/shop-nfc/mtap-retail-solutions",
    imageSrc:
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/styles/max_325x325/public/2024-04/mTap-Table-Stand.png?itok=lOGFZzc2",
    imageAlt: "Cards",
  },
  {
    id: 2,
    name: "Black Digital Business Card",
    href: "/shop-nfc/custom-digital-business-cards",
    imageSrc:
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-03/mTap%20Black%20Digital%20Business%20Card05.png",
    imageAlt: "Cards",
  },
  {
    id: 5,
    name: "mTap Key Fobs Digital Card Blue",
    href: "/shop-nfc/mtap-key-fobs",
    imageSrc:
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/styles/max_325x325/public/2021-12/Keyfobs%20Blue.png?itok=1xYOx5VH",
    imageAlt: "Cards",
  },
];
export default function Shop_NFC() {
  const handleClick = (event) => {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  };
  return (
    <div className="cardContainer">
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
                  border:'1px solid transparent',
                  padding:'8px',
                  borderRadius:'10px',
                  backgroundColor:'#E2F1F5',
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
          
              <Typography
                variant="contained"
                sx={{
                  color: "black",
                  border:'1px solid transparent',
                  padding:'8px',
                  borderRadius:'10px',
                  fontSize: "20px",
                  // ":hover": {
                  //   backgroundColor: "grey", 
                  //   color: "white", 
                  // },
                  "@media (max-width: 767px)": {
                    fontSize: "20px",
                  },
                }}
              >
               
                Products
              </Typography>
          
          </Breadcrumbs>
        </div>
        {/* div for products */}
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 productImageContainer">
          <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-24 ">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white-200  lg:aspect-none group-hover:opacity-75 lg:h-100">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    width={100}
                    height={100}
                    // objectFit="cover"
                    loading="eager"
                    // quality={100}
                    priority
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-16 mb-16 flex justify-center" >
                  <div>
                    <h3 className="text-xl font-bold text-black">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* div for banner  */}
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-0 lg:px-8 bannerContainer">
        <div className="relative isolate overflow-hidden  px-6 pt-16  sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 bannerContainerImage">
          <div className="mx-auto max-w-md  lg:mx-0 lg:flex-auto lg:py-32 lg:text-left bannerText">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-6xl">
              DIGITAL
              <br />
              BUSINESS CARD
            </h1>
            <h3>THE FASTEST WAY TO CONNECT</h3>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Explore our wide range of NFC smart cards, featuring customized
              designs and branding options.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start exploreButton">
              <a
                href="#"
                className="rounded-md px-3.5 py-2.5 text-2xl font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Explore
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8 imageBanner">
            <Image
              className="absolute left-0 top-0 w-[40rem] max-w-none"
              src={mtapBusinessCard}
              alt="App screenshot"
              width={824}
              height={780}
            />
          </div>
        </div>
      </div>
      {/* Another div for all products */}
      <div className="bg-white allProductContainer">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 imagesContainer">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-24 ">
            {allProducts.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white-200  lg:aspect-none group-hover:opacity-75 lg:h-100">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    width={100}
                    height={100}
                    // objectFit="cover"
                    loading="eager"
                    // quality={100}
                    priority
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-16 mb-16 flex justify-center">
                  <div>
                    <h3 className="text-xl font-bold text-gray-700">
                      <Link href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
