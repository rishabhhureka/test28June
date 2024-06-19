// pages/[slug]/index.js

import { notFound } from 'next/navigation';

import WristBands from '../components/WristBand';

// List of products
// List of products with multiple images
const products = [
    {
        id: 1,
        name: "White Wrist Band",
        
        imageSrc:[
          "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-06/mtap-wrist-bands_0.png",
        ],
        imageAlt: "White Wrist Band",
        price: "$24.99",
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

  return <WristBands product={{...product,images}} />;
};

export default ProductPage;
