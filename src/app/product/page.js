'use client'
import { useEffect, useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Radio,
  Button,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import Done from '@mui/icons-material/Done';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';
import googleReviewButton from "../../Img/GoogleReviewCard.png"
import googleReviewButton2 from "../../Img/GoogleCustomCard.png";
import qrCode from "../../Img/qrCode.png";
import Head from 'next/head';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Link from 'next/link';

const images = [
  { src: googleReviewButton, alt: 'Image 1' },
  { src: qrCode, alt: 'Image 2' },
  { src: googleReviewButton2, alt: 'Image 3' },
];

const accordionData = [
  {
    question: 'Will my gift recipient be able to make changes to their profile?',
    answer: 'Yes, they will receive instructions for claiming their mTap account and making updates to their profile in the packaging of their new card.'
  },
  {
    question: 'Does mTap work Internationally?',
    answer: 'Yes, they will receive instructions for claiming their mTap account and making updates to their profile in the packaging of their new card.'
  },
  {
    question: 'Can I add a custom logo or job title to a gifted card?',
    answer: 'Yes, they will receive instructions for claiming their mTap account and making updates to their profile in the packaging of their new card.'
  },
  {
    question: 'How does my gift recipient use their card?',
    answer: 'Yes, they will receive instructions for claiming their mTap account and making updates to their profile in the packaging of their new card.'
  }
];

const productData = {
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Google Review Cards",
  "image": "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-04/Google-Review-Card-01.png",
  "description": "Elevate your Google Review strategy with the Google Review Cards component. Customize card colors, upload your business logo, and choose the card pack size that suits your needs.",
  "sku": "GRC12345",
  "brand": {
    "@type": "Brand",
    "name": "mTap"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://mtap.byklabs.store/product",
    "priceCurrency": "USD",
    "price": "39.00",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "reviewCount": "24"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "John Doe"
      },
      "reviewBody": "This product is excellent!"
    }
  ]
};

const GoogleReviewCard = () => {
  const [quantity, setQuantity] = useState(1);
  const [count, setCount] = useState(1);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const colors = [
    { name: 'danger', bgColor: 'red' },
    { name: 'white', bgColor: 'white' },
    { name: 'black', bgColor: '#000' },
    { name: 'primary', bgColor: 'blue' },
  ];

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const faqScript = `{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      ${accordionData.map((item, index) => `{
        "@type": "Question",
        "name": "${item.question}",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "${item.answer.replace(/"/g, '\\"')}"
        }
      }`).join(',\n')}
    ]
  }`;

  useEffect(() => {
    const existingProductScript = document.getElementById('product-schema');
    if (existingProductScript) {
      existingProductScript.text = JSON.stringify(productData);
    } else {
      const productScript = document.createElement('script');
      productScript.id = 'product-schema';
      productScript.type = 'application/ld+json';
      productScript.text = JSON.stringify(productData);
      document.head.appendChild(productScript);
    }

    const existingFaqScript = document.getElementById('faq-schema');
    if (existingFaqScript) {
      existingFaqScript.text = faqScript;
    } else {
      const faqScriptElement = document.createElement('script');
      faqScriptElement.id = 'faq-schema';
      faqScriptElement.type = 'application/ld+json';
      faqScriptElement.text = faqScript;
      document.head.appendChild(faqScriptElement);
    }

    return () => {
      const productScriptToRemove = document.getElementById('product-schema');
      if (productScriptToRemove) {
        document.head.removeChild(productScriptToRemove);
      }

      const faqScriptToRemove = document.getElementById('faq-schema');
      if (faqScriptToRemove) {
        document.head.removeChild(faqScriptToRemove);
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>Google Review Cards</title>
        <meta property="og:site_name" content="mTap" />
        <meta name="description" content="Elevate your Google Review strategy with the Google Review Cards component. Customize card colors, upload your business logo, and choose the card pack size that suits your needs." />
        <meta property="og:image" content="https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-04/Google-Review-Card-01.png" />
        <meta property="og:image:url" content="https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-04/Google-Review-Card-01.png" />
        <meta name="keywords" content="product, ecommerce, User engagement, SEO-friendly, Customizable colors, Google Review Cards" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "mTap",
            "url": "https://mtap.byklabs.store/",
            "logo": "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2022-04/mTapSocialImage.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-800-555-5555",
              "contactType": "Customer Service"
            }
          })}
        </script>

      </Head>
      <Card sx={{ marginTop: '10rem' }}>
        <h1 className="googleReviewCardsHeading" style={{ fontSize: '90px', fontWeight: "600", textAlign: 'center' ,marginBottom:'2rem'}}>Google Review Cards</h1>

        <Card
          size="lg"
          variant="outlined"
          orientation="horizontal"
          sx={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: '100%',
             minHeight:'100vh',
            // resize: 'horizontal',
            // overflow: 'auto',
            contain: 'content',
            '@media screen and (max-width: 768px)': {
              flexDirection: 'column'
            }
          }}
        >
          <Box sx={{ display: 'flex'  }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '1rem' }}>
              {images.map((image, index) => (
                <Box
                  className="reviewCardSmallBox"
                  key={index}
                  sx={{
                    width: 120,
                    height: 80,
                    marginBottom: '1rem',
                    cursor: 'pointer',
                    border: `2px solid ${selectedImage === image ? 'black' : '#ccc'}`, // Conditional border
                    borderRadius: '8px',
                    overflow: 'hidden',
                  }}
                  onClick={() => setSelectedImage(image)}
                >
                  <Image src={image.src} alt={image.alt} loading="eager" priority />
                </Box>
              ))}
            </Box>
            <Box
              sx={{
                width: '40vw',
                display: 'flex',
                background: "white",
                margin: '5rem',
                justifyContent: 'center',
                px: 'var(--Card-padding)',
                '@media screen and (max-width: 768px)': {
                  width: '100%',
                  margin: 0,
                }
              }}
            >
              <Image src={selectedImage.src} alt='reviewbutton' loading="eager" width={700} height={400} priority />
            </Box>
          </Box>
          <CardContent sx={{ gap: 1.5,width:'100%'}}>
            <CardContent>
              <Typography variant="h3" gutterBottom style={{ fontSize: "40px", fontWeight: "bold", color: "#00B4D8" ,marginBottom:'2rem',textAlign:'center'}}>
                $39.00
              </Typography>
              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} md={6}>
                  <Typography
                    id="product-color-attribute"
                    sx={{
                      mb: 2.5,
                      fontWeight: '900',
                      textTransform: 'uppercase',
                      fontSize: '1rem',
                      color:'black',
                      textAlign:'start'
                      // letterSpacing: '0.1em',
                    }}
                  >
                    Card Color
                  </Typography>
                  <RadioGroup
                    aria-labelledby="product-color-attribute"
                    defaultValue="black"
                    sx={{ gap: 2, flexWrap: 'wrap', flexDirection: 'row' }}
                  >
                    {colors.map((color) => (
                      <FormControlLabel
                        key={color.name}
                        value={color.name}
                        control={
                          <Radio
                            icon={<span style={{ width: 35, height: 35, borderRadius: '50%', border: '2px solid black', backgroundColor: color.bgColor }} />}
                            checkedIcon={<Done fontSize="xl2" style={{ color: color.bgColor }} />}
                          />
                        }
                        label=""
                      />
                    ))}
                  </RadioGroup>
                  <br />
                  <TextField fullWidth label="Name of your Business" variant="outlined" margin="normal" />
                  <TextField fullWidth label="Address of your Business" variant="outlined" margin="normal" />
                  <FormControl fullWidth variant="outlined" margin="normal">
                    <InputLabel>Select Card Pack</InputLabel>
                    <Select value={quantity} onChange={handleQuantityChange} label="Select Card Pack">
                      <MenuItem value={1}>Single Pack</MenuItem>
                      <MenuItem value={5}>5-Pack</MenuItem>
                      <MenuItem value={10}>10-Pack</MenuItem>
                    </Select>
                  </FormControl>
                  <Box my={2}>
                    <Button variant="outlined" component="label" fullWidth sx={{ border: '1px solid grey', color: 'grey' }}>
                      <AddPhotoAlternateIcon sx={{ margin: '12px' }} />
                      Upload Business Logo
                      <input type="file" hidden />
                    </Button>
                  </Box>
                  <Box display="flex" alignItems="center" border={1} borderRadius={10} padding={1} sx={{ width: 'fit-content', marginTop: '2rem', marginBottom: '2rem' }}>
                    <IconButton onClick={handleDecrement} aria-label="decrement">
                      <RemoveIcon />
                    </IconButton>
                    <Typography variant="h6" mx={4} sx={{ fontSize: '20px', fontWeight: "bold" }}>
                      {count}
                    </Typography>
                    <IconButton onClick={handleIncrement} aria-label="increment">
                      <AddIcon />
                    </IconButton>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
            <Box sx={{
              display: 'flex',
              justifyContent:'center',
         
            }}>
            <Link href="/cart"    className='AddToCartButton'>
              <Button
             
                sx={{
                  '--variant-borderWidth': '2px',
                  borderRadius: 10,
                  width: '30vw',
                  padding: '1rem',
                  mx: 'auto',
                  backgroundColor: "#00B4D8",
                      color:'white',
                      fontSize:'20px',
                      fontWeight:'700',
                '&:hover': {
    backgroundColor: '#185ea5',
    color:'white',
  } ,'@media (max-width: 768px)': {
    maxWidth: '100vw',
    padding: '0.5rem',
  }
                }}
              >
                ADD TO CART
              </Button>
            </Link>
            </Box>
          </CardContent>
        </Card>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '2rem'
        }}>
          <h2 style={{ fontSize: '70px', fontWeight: 'bold' }}>Description</h2>
          <Typography sx={{ fontSize: '30px', width: '60vw', marginBottom: '5rem' }} className="DescriptionP">Want more reviews from happy customers? Just have them tap or scan the QR code and take them directly to your Google Review Profile. Get more positive feedback instantly. You do not have to do anything . We will configure the card for you with the Google Review link of your business. No Profile creation or any account management</Typography>
        </Box>
        <Box sx={{
          display: "flex", flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <h2 style={{ fontSize: '70px', fontWeight: 'bold', marginBottom: '1rem' }}>FAQ</h2>
          {accordionData.map((item, index) => (
            <Accordion key={index} defaultExpanded={index === 0} sx={{ marginBottom: '2rem', padding: '2rem' }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ fontSize: 40 }} />}
                aria-controls={`panel${index + 1}-content`}
                id={`panel${index + 1}-header`}
              >
                <Typography sx={{ fontSize: '30px', fontWeight: 600 }}>{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontSize: '30px' }}>
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>))}
</Box>
</Card>
</>
)
}

export default GoogleReviewCard