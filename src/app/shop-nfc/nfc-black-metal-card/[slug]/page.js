import { notFound } from 'next/navigation';
import MetalCards from '../components/MetalCards';

// List of products
const products = [
  {
    id: '1',
    name: "NFC Black Metal Card",
    price: "$69.00",
    imageSrc: [
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-04/mTap-Metal-Card-4.png",
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-04/mTap-Metal-Card-1.png",
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-04/mTap-Metal-Card-2.png",
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-04/Sheep-Leather-NFC-Metal-Card-Cover1.png"
    ],
  }
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
  return <MetalCards product={{...product,images}} />;
};

export default ProductPage;
