// pages/[slug]/index.js

import { notFound } from 'next/navigation';
import Stickers from '../components/Stickers';

// List of products
// List of products with multiple images
const products = [
    {
      id: 1,
      name: "mTap Circle Small Black",
      href: "#",
      imageSrc: [
        "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2023-04/black-sticker.webp",
        "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2021-11/mTap%20Circle%20Flat%20Small%20Black2.jpg",
        "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2022-01/mTap_Circle_Flat_Small_Black9.jpg",
        "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2021-11/mTap%20Circle%20Flat%20Small%20Black.jpg"
      ],
      imageAlt: "mTap Circle Small Black",
      price: "$4.99",
    },
    {
      id: 2,
      name: "mTap Circle Small White",
      href: "#",
      imageSrc: [
        "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2023-04/white-sticker.webp",
        "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2021-11/mTap%20Circle%20Flat%20Small%20White.jpg",
        "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2021-12/mTap%20Circle%20Flat%20Small%20White3.jpg",
        "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2021-11/mTap%20Circle%20Flat%20Small%20White1.jpg"
      ],
      imageAlt: "mTap Circle Small White",
      price: "$4.99",
    },
    {
      id: 3,
      name: "mTap Circle Small Blue",
      href: "#",
      imageSrc: [
        "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2023-04/blue-sticker.webp",
        "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2021-12/mTap%20Circle%20Flat%20Small%20Blue3.jpg",
        "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2021-11/mTap%20Circle%20Flat%20Small%20Blue1.jpg",
      ],
      imageAlt: "mTap Circle Small Blue",
      price: "$4.99",
    },
    {
      id: 4,
      name: "mTap Square Sticker",
      href: "#",
      imageSrc: [
        "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2021-11/mTap%20Square%20Sticker.jpg",
   
      ],
      imageAlt: " mTap Square Sticker",
      price: "$14.99",
    },
  ];
  

// Fetch the product data based on the slug (id)
export const generateMetadata = ({ params }) => {
  const productId = parseInt(params.slug); // Parse slug to integer if necessary
  const product = products.find(p => p.id === productId);

  // If the product is not found, return notFound()
  if (!product) {
    return notFound();
  }

  return { title: product.name };
};

const ProductPage = ({ params }) => {
  const productId = parseInt(params.slug); // Parse slug to integer if necessary
  const product = products.find(p => p.id === productId);

  // If the product is not found, render notFound
  if (!product) {
    return notFound();
  }
  const images = product.imageSrc.map(src => ({ src, alt: product.name }));

  return <Stickers product={{...product,images}} />;
};

export default ProductPage;
