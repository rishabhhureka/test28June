// Import the correct notFound function from next/navigation
import { notFound }  from 'next/navigation';// Adjust the path based on your Next.js version
import Collections from '../components/Collections'; // Adjust the path based on your project structure

// List of products
const products = [
  {
    id: 1,
    name: "mTap Social",
    href: "#",
    imageSrc: [
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2021-12/mTap%20Social.jpg",
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2021-12/Keyfobs-%20KEC50%20color%20Blue_2.jpg",
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2021-12/mTap%20Circle%20Flat%20Small%20Blue3_1.jpg",
    ],
    imageAlt: "mTap Social",
    price: "$34.18",
  },
  {
    id: 2,
    name: "mTap Networker",
    href: "#",
    imageSrc: [
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2021-12/mTap%20Networker.jpg",
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2021-12/Keyfobs-%20KEC50%20color%20Blue_1.jpg",
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2021-12/NFC-Enabled-Plastic-Business-Card2_1.jpg",
    ],
    imageAlt: "mTap Networker",
    price: "$40.48",
  },
  {
    id: 3,
    name: "mTap Connector",
    href: "#",
    imageSrc: [
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2021-12/mTap%20Connector.jpg",
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2021-12/NFC%20Enabled%20Paper%20Card3_0.jpg",
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2021-12/Keyfobs-%20KEC50%20color%20Blue_3.jpg",
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2021-12/mTap%20Circle%20Flat%20Small%20Black2.jpg",
    ],
    imageAlt: "mTap Connector",
    price: "$52.17",
  },
  {
    id: 4,
    name: "mTap Maven",
    href: "#",
    imageSrc: [
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2021-12/mTap%20Maven1.jpg",
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2021-12/NFC-Enabled-Plastic-Business-Card2.jpg",
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2021-12/Keyfobs-%20KEC50%20color%20Blue_4.jpg",
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2021-12/mTap%20Circle%20Flat%20Small%20Black2_0.jpg",
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2021-12/mTap%20Circle%20Flat%20Large.jpg"
    ],
    imageAlt: "mTap Maven",
    price: "$65.66",
  },
  {
    id: 5,
    name: "mTap Professional",
    href: "#",
    imageSrc: [
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2021-12/mTap%20Professional.jpg",
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2021-12/mTap%20Circle%20Flat%20Small%20Black2_1.jpg",
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2021-12/NFC-Enabled-Plastic-Business-Card2_0.jpg",
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2021-12/Keyfobs-%20KEC50%20color%20Blue_5.jpg",
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2021-12/Keyfobs-%20KEC50%20color%20White1%208_0.jpg"
    ],
    imageAlt: "mTap Professional",
    price: "$89.06",
  },
];

// Fetch the product data based on the slug (id)
export const generateMetadata = ({ params }) => {
  const productId = parseInt(params.slug); // Ensure params.slug is parsed to an integer if necessary
  const product = products.find(p => p.id === productId);

  // If the product is not found, return notFound()
  if (!product) {
    return notFound();
  }

  return { title: product.name };
};

const ProductPage = ({ params }) => {
  const productId = parseInt(params.slug); // Ensure params.slug is parsed to an integer if necessary
  const product = products.find(p => p.id === productId);

  // If the product is not found, render notFound
  if (!product) {
    return notFound();
  }

  // Map imageSrc to the expected format
  const images = product.imageSrc.map(src => ({ src, alt: product.name }));

  return <Collections product={{ ...product, images }} />;
};

export default ProductPage;
