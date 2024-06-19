import { notFound } from 'next/navigation';
import ProductDetailComponent from '../components/ProductDetailComponent';

// Fetch the product data based on the slug (id)
export const generateMetadata = ({ params }) => {
  // You can fetch the product data from an API or a static data source
  const productId = params.slug;
  const product1 = {
    id: '1',
    name: 'NFC Enabled Plastic Clear Card',
    price: '$4.99',
    imageSrc: "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2021-12/NFC-Enabled-Plastic-Business-Card.jpg",
  };

  const product2 = {
    id: '2',
    name: 'NFC Enabled Flexible Card',
    price: '$4.99',
    imageSrc:   "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2021-12/NFC%20Enabled%20Paper%20Card3.jpg",
  };
  const product = productId === '1' ? product1 : product2;
  // If the product is not found, return notFound()
  if (!product) {
    return notFound();
  }

  return { title: product.name };
};

const ProductPage = ({ params }) => {
  // Fetch the product data based on the slug (id)
  const productId = params.slug;
  const product1 = {
    id: '1',
    name: 'NFC Enabled Plastic Clear Card',
    price: '$4.99',
    imageSrc: "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2021-12/NFC-Enabled-Plastic-Business-Card.jpg",
  };

  const product2 = {
    id: '2',
    name: 'NFC Enabled Flexible Card',
    price: '$4.99',
    imageSrc: "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2021-12/NFC%20Enabled%20Paper%20Card3.jpg",
  };

  const product = productId === '1' ? product1 : product2;
  return <ProductDetailComponent product={product} />;
};

export default ProductPage;