// pages/[slug]/page.js

import { notFound } from 'next/navigation';
import KeyFobs from '../components/KeyFobs'; // Adjust the path based on your project structure

// List of products
const products = [
  {
    id: '1',
    name: "mTap Key Fob Digital Card White",
    href: "#",
    imageSrc: [
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2023-04/white-keyfob.webp",  
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2022-04/Keyfobs%20White%20Color2.jpg",
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2021-12/Keyfobs-%20KEC50%20color%20White1%208.jpg",
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2022-04/Keyfobs%20White%20Color1.jpg",
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2021-12/DSC06142.jpgKeyfobs-%20KEC50%20color%20White7.jpg"
    ],
    imageAlt: "mTap Key Fob Digital Card White",
    price: "$24.99",
  },
  {
    id: '2',
    name: "mTap Key Fob Digital Card Blue",
    href: "#",
    imageSrc: [
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2023-04/blue-keyfob.webp",
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2022-04/Keyfob%20Blue.jpg",
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2022-04/Keyfob%20Blue2.jpg",
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2022-04/Keyfob%20Blue3.jpg",
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2022-04/Keyfob%20Blue5.jpg"
    ],
    imageAlt: "mTap Key Fob Digital Card Blue",
    price: "$24.99",
  },
];

// Fetch the product data based on the slug (id)
export const generateMetadata = ({ params }) => {
  const productId = params.slug;
  const product = products.find(p => p.id === productId);

  // If the product is not found, return notFound()
  if (!product) {
    return notFound();
  }

  return { title: product.name };
};

const ProductPage = ({ params }) => {
  const productId = params.slug;
  const product = products.find(p => p.id === productId);

  // If the product is not found, render notFound
  if (!product) {
    return notFound();
  }

  const images = product.imageSrc.map(src => ({ src, alt: product.name }));
  return <KeyFobs product={{...product, images}} />;
};

export default ProductPage;
