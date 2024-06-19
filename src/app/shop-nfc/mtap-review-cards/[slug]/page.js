import { notFound } from 'next/navigation';
import GoogleReviewCardProduct from '../components/GoogleReviewCardProduct';

// List of products
const products = [
  {
    id: '1',
    name: "Google Review Card",
    price: "$14.99",
    imageSrc: "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-06/mtap-google%20review%20card%20with%20QR%20codemtap-GCR.png",
  },
  {
    id: '2',
    name: "Custom Google Review Card",
    price: "$34.99",
    imageSrc: "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-04/mTap-Google-Custom-Review%20Card-01.png",
  },
  {
    id: '3',
    name: "5 Google Review Card + Table Stand",
    price: "$69.00",
    imageSrc: "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-05/5-Google-Review-Cards-Table-Stand.png",
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

  return <GoogleReviewCardProduct product={product} />;
};

export default ProductPage;
