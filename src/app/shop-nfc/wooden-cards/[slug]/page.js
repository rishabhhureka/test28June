// pages/[slug]/index.js

import { notFound } from 'next/navigation';

import WoodenCards from '../components/WoodenCards';

// List of products
// List of products with multiple images
const products = [
    {
      id: 1,
      name: "Wooden Cards",
      href: "#",
      imageSrc:[ "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-06/mtap%20wood%20digital%20business%20card_0.png","https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-06/Back%20Wood%20Digital%20Business%20Card.png","https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-06/Front%20Wood%20Digital%20Business%20Card.png"]
        ,
      imageAlt: "Wooden Cards",
      price: "$29.00",
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

  return <WoodenCards product={{...product,images}} />;
};

export default ProductPage;
