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

import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Head from 'next/head';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Link from 'next/link';


  
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
    "name": "Custom Digital Business Cards",
    "image": "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-03/mTap%20Black%20Digital%20Business%20Card05.png",
    "description": "Elevate your Business strategy with the mTap Business Cards component. Customize card colors, upload your business logo, and choose the card pack size that suits your needs.",
    "sku": "GRC12345",
    "brand": {
      "@type": "Brand",
      "name": "mTap"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://mtap.byklabs.store/shop-nfc/mtap-business-cards",
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
  
const ProductDetailComponent = ({ product }) => {
  const [expanded, setExpanded] = useState(0);
    const [count, setCount] = useState(1);
    const generateBreadcrumbSchema = () => {
      return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
              {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://mtap.byklabs.store",
              },
              {
                  "@type": "ListItem",
                  position: 2,
                  name: "Shop NFC",
                  item: "https://mtap.byklabs.store/shop-nfc",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Mtap Business Cards",
                item: "https://mtap.byklabs.store/shop-nfc/mtap-business-cards",
            },
              {
                  "@type": "ListItem",
                  position: 4,
                  name: product.name,
                  item: `https://mtap.byklabs.store/shop-nfc/mtap-business-cards/${product.id}`,
              },
          ],
      };
  };
  useEffect(() => {
    const breadcrumbSchema = generateBreadcrumbSchema();
    const breadcrumbScript = document.createElement("script");
    breadcrumbScript.type = "application/ld+json";
    breadcrumbScript.innerHTML = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(breadcrumbScript);
  
    return () => {
        document.head.removeChild(breadcrumbScript);
    };
  }, [product]);
    const images = [
        { src: product.imageSrc, alt: product.name },
        // Add any additional static images if needed
        { src: 'https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2022-04/NFC%20Enabled%20Plastic%20Clear%20Card2.jpg', alt: 'Additional Image 1' },
        { src: 'https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2022-04/NFC%20Enabled%20Plastic%20Clear%20Card.jpg', alt: 'Additional Image 2'},
        { src: '    https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2022-04/NFC%20Enabled%20Plastic%20Clear%20Card1.jpg', alt: 'Additional Image 2'},
        { src: 'https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2021-12/NFC-Enabled-Plastic-Business-Card4_0.jpg', alt: 'Additional Image 2'},
      ];
      const [selectedImage, setSelectedImage] = useState(images[0]);
      console.log(selectedImage,'sjkasdkb');
      const handleClick = (event) => {
        event.preventDefault();
        console.info("You clicked a breadcrumb.");
      };
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
  


    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
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
  <Card sx={{ marginTop: '10rem'}} className='productContainer'>
  <div role="presentation" onClick={handleClick}>
          <Breadcrumbs
            aria-label="breadcrumb"
            separator={
              <NavigateNextIcon fontSize="medium" sx={{ color: "black" }} />
            }
            sx={{
              display: "inline-block",
              color: "black",
              marginTop: "2rem",
              marginLeft: "4rem",
        marginBottom:'1rem',
              border: "1px solid transparent",
              backgroundColor: "transparent",
              "@media (max-width: 767px)": {
                marginLeft: "0rem",
                lineHeight:'3.8rem',
              },
            }}
          >
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="linkBlog"
           
            >
              <Typography
                variant="contained"
                sx={{
                  color: "black",
                  fontSize: "20px",
                  border: "1px solid transparent",
                  padding: "10px",
                  borderRadius: "10px",
                  backgroundColor: "#E2F1F5",
                  cursor: "pointer",
                  ":hover": {
                    backgroundColor: "grey", // Change background color on hover
                    color: "white", // Change text color on hover
                  },
                  "@media (max-width: 767px)": {
                    fontSize: "20px",
                  },
                }}
              >
                Home
              </Typography>
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/shop-nfc"
              className="linkBlog"
            >
            <Typography
              variant="contained"
              sx={{
                color: "black",
                border: "1px solid transparent",
                padding: "10px",
                borderRadius: "10px",
                fontSize: "20px",
                backgroundColor: "#E2F1F5",
                cursor: "pointer",
                ":hover": {
                  backgroundColor: "grey", // Change background color on hover
                  color: "white", // Change text color on hover
                },
                "@media (max-width: 767px)": {
                  fontSize: "20px",
                },
              }}
            >
              Shop NFC
            </Typography>
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/shop-nfc/mtap-business-cards"
              className="linkBlog"
          
            >
            <Typography
              variant="contained"
          sx={{
                color: "black",
                border: "1px solid transparent",
                padding: "10px",
                borderRadius: "10px",
                fontSize: "20px",
                backgroundColor: "#E2F1F5",
         
                cursor: "pointer",
                ":hover": {
                  backgroundColor: "grey", // Change background color on hover
                  color: "white", // Change text color on hover
                },
                "@media (max-width: 767px)": {
                  fontSize: "20px",
                },
              }}
            >
          mTap Business Cards
            </Typography>
            </Link>
            <Typography
              variant="contained"
              sx={{
                color: "black",
                border: "1px solid transparent",
                padding: "10px",
                borderRadius: "10px",
                fontSize: "20px",
                "@media (max-width: 767px)": {
                  fontSize: "20px",
                },
              }}
            >
         {product.name}
            </Typography>
          </Breadcrumbs>
        </div>
    <h1 className="googleReviewCardsHeading" style={{ fontSize: '68px', fontWeight: "600", marginTop:'1rem',textAlign: 'center' ,marginBottom:'2rem'}}>{product.name}</h1>

    <Card
      size="lg"
      // variant="outlined"
      // orientation="horizontal"
      sx={{
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        textAlign: 'center',
        maxWidth: '100%',
         minHeight:'100%',
        // resize: 'horizontal',
        // overflow: 'auto',
        contain: 'content',
        '@media screen and (max-width: 768px)': {
          flexDirection: 'column'
        }
      }}
    >
      <Box sx={{ display: 'flex'  }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '4rem' ,'@media screen and (max-width: 768px)': {
        margin:0
        }}}>
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
              <Image src={image.src} alt={image.alt} width={120} height={80} loading="eager" priority />
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
          <Image src={selectedImage.src} alt={selectedImage.alt} loading="eager" width={700} height={400} priority />
        </Box>
      </Box>
      <CardContent sx={{ gap: 1.5,width:'100%'}}>
        <CardContent>
        
          <Typography variant="h3" gutterBottom sx={{ fontSize: "50px", fontWeight: "bold", color: "#00B4D8" ,marginBottom:'2rem',textAlign:'start'}}>
           {product.price}
          </Typography>
       
          <Grid container spacing={2} justifyContent="start" sx={{   '@media screen and (max-width: 768px)': {
            justifyContent:'center'
            }}}>
            <Grid item xs={12} md={6}>
       
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
          justifyContent:'start',
          '@media (max-width: 768px)': {
         textAlign:'start'
            }
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
      <h2 style={{ fontSize: '70px', fontWeight: 'bold' ,marginBottom:'2rem'}}>Description</h2>
      <Typography sx={{ fontSize: '30px', width: '100vw', marginBottom: '5rem'}} className="DescriptionP">Are you a business professional, professional sales person or even building your downline for your network marketing business? It&apos;s time to stop handing out paper business cards that never get looked at and start transfeering the power of your brand to prospects, customers, colleagues and partners. mTap Cards are much, much more than a digital business card, as you can set customizable links for more than your contact information, but also your website, videos, social media and much, much more. Put the power of mTap to work for your business and never let someone throw away your contact information again.

Powered by
</Typography>
    </Box>
    <Box sx={{
      display: "flex", flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <h2 style={{ fontSize: '70px', fontWeight: 'bold', marginBottom: '1rem' }}>FAQ</h2>
      {accordionData.map((item, index) => (
        <Accordion key={index} expanded={expanded === index}  onChange={handleChange(index)} sx={{ marginBottom: '2rem', padding: '2rem' ,borderRadius:'40px'}}>
          <AccordionSummary
        expandIcon={expanded === index ? <RemoveIcon sx={{ fontSize: 60,color:'black' }} /> : <AddIcon sx={{ fontSize: 60,color:'black'  }} />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
          >
            <Typography sx={{ fontSize: '30px', fontWeight: 600 ,padding:'1rem'}}>{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontSize: '30px',padding:'1rem' }}>
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>))}
</Box>
</Card>
</>
    // <div>
    //   <h1>{product.name}</h1>
    //   <p>Price: {product.price}</p>
    //   <Image src={product.imageSrc} alt={product.name} width={500} height={500} />
     
    // </div>
  );
};

export default ProductDetailComponent;