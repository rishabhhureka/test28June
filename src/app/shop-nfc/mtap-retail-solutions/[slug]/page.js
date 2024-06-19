// pages/[slug]/page.js

import { notFound } from 'next/navigation';
import RetailSolutions from '../components/RetailSolutions'; // Adjust the path based on your project structure

// List of products
const products = [
  {
    id: 1,
    name: "mTap Circle Flat Large with QR Code",
    href: "#",
    imageSrc: [
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2022-06/mTap%20Circle%20Flat%20Large%20with%20QR%20Code.png",
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2022-05/mTap%20Circle%20Flat%20Large%20with%20QR%20Code.jpg",
     
    ],
    imageAlt: "mTap Circle Flat Large with QR Code",
    price: "$19.99",
  },
  {
    id: 2,
    name: "mTap Disc",
    href: "#",
    imageSrc: [
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2023-04/Disc_0.webp",
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2022-06/mTapDisc.jpg",

    ],
    imageAlt: "mTap Disc",
    price: "$24.99",
  },
  {
    id: 3,
    name: "mTap Table Stand",
    href: "#",
    imageSrc: [
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2023-04/table%20stand.webp",
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2023-04/mTap%20Table%20Stand%202.webp",
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2023-04/mTap%20Table%20Stand%203.webp"
    ],
    imageAlt: "mTap Table Stand",
    price: "$24.99",
  },
];

// Fetch the product data based on the slug (id)
export const generateMetadata = ({ params }) => {
  const productId = parseInt(params.slug); // Ensure params.slug is parsed as an integer if your IDs are numeric
  const product = products.find(p => p.id === productId);

  // If the product is not found, return notFound()
  if (!product) {
    console.log(`Product with ID ${productId} not found.`);
    return notFound();
  }

  return { title: product.name };
};

const ProductPage = ({ params }) => {
  const productId = parseInt(params.slug); // Ensure params.slug is parsed as an integer if your IDs are numeric
  const product = products.find(p => p.id === productId);

  // If the product is not found, render notFound
  if (!product) {
    console.log(`Product with ID ${productId} not found.`);
    return notFound();
  }

  const images = product.imageSrc.map(src => ({ src, alt: product.name }));
  return <RetailSolutions product={{...product, images}} />;
};

export default ProductPage;
