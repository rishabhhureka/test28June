import { notFound } from 'next/navigation';
import CustomBusinessCards from '../components/CustomBusinessCards';

// List of products
const products = [
  {
    id: '1',
    name: "Custom Digital Business Card with NFC-QR Code",
    price: "$34.99",
    imageSrc: 
    [
    "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2022-12/mTap%20Custom%20Digital%20Business%20Cards1.gif",
    "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2022-06/pops-place_0.png",
    "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2022-06/avenue_0.png"
    ]
  },
  {
    id: '2',
    name: "Green Digital Business Card",
    price: "$24.99",
    imageSrc:[ "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-03/mTap%20Green%20Digital%20Business%20Card05.png",
  "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-03/mTap%20Green%20Digital%20Business%20Card01.png",
  "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-03/mTap%20Green%20Digital%20Business%20Card03.png",
  "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-03/mTap%20Green%20Digital%20Business%20Card04.png"
  ]
  },
  {
    id: '3',
    name: "Black Digital Business Card",
    price: "$24.99",
    imageSrc: ["https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-03/mTap%20Black%20Digital%20Business%20Card05.png","https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-03/mTap%20Black%20Digital%20Business%20Card01.png","https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-03/mTap%20Black%20Digital%20Business%20Card03.png","https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-03/mTap%20Black%20Digital%20Business%20Card04.png"
    ]
  },
  {
    id: '4',
    name: "Blue Digital Business Card",
    price: "$24.99",
    imageSrc:[ "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-03/mTap%20Blue%20Digital%20Business%20Card05.png",
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-03/mTap%20Blue%20Digital%20Business%20Card01.png",
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-03/mTap%20Blue%20Digital%20Business%20Card03.png",
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-03/mTap%20Blue%20Digital%20Business%20Card04.png"
    ]
  },
  {
    id: '5',
    name: "Orange Digital Business Card",
    price: "$24.99",
    imageSrc: ["https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-03/mTap%20Orange%20Digital%20Business%20Card05.png",
"https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-03/mTap%20Orange%20Digital%20Business%20Card01.png",
"https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-03/mTap%20Orange%20Digital%20Business%20Card03.png",
"https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-03/mTap%20Orange%20Digital%20Business%20Card04.png"
    ]
  },
  {
    id: '6',
    name: "Purple Digital Business Card",
    price: "$24.99",
    imageSrc: ["https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-03/mTap%20Purple%20Digital%20Business%20Card05.png",
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-03/mTap%20Purple%20Digital%20Business%20Card01.png",
"https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-03/mTap%20Purple%20Digital%20Business%20Card03.png",
"https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-03/mTap%20Purple%20Digital%20Business%20Card04.png"
    ]
  },
  {
    id: '7',
    name: "Red Digital Business Card",
    price: "$24.99",
    imageSrc: ["https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-03/mTap%20Red%20Digital%20Business%20Card05.png",
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-03/mTap%20Red%20Digital%20Business%20Card01.png",
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-03/mTap%20Red%20Digital%20Business%20Card03.png",
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-03/mTap%20Red%20Digital%20Business%20Card04.png"

    ]
  },
  {
    id: '8',
    name: "Yellow Digital Business Card",
    price: "$24.99",
    imageSrc: ["https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-03/mTap%20Yellow%20Digital%20Business%20Card05.png",
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-03/mTap%20Yellow%20Digital%20Business%20Card01.png",
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-03/mTap%20Yellow%20Digital%20Business%20Card03.png",
      "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-03/mTap%20Yellow%20Digital%20Business%20Card04.png"

    ]
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
  return <CustomBusinessCards product={{...product,images}} />;
};

export default ProductPage;
