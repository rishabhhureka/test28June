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
import Head from 'next/head';
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
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
    "name": "Wooden Cards",
    "image": "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-06/mtap%20wood%20digital%20business%20card_0.png",
    "description": "Elevate your Business strategy with the Wooden Cards component.",
    "sku": "GRC12345",
    "brand": {
      "@type": "Brand",
      "name": "mTap"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://mtap.byklabs.store/shop-nfc/wooden-cards",
      "priceCurrency": "USD",
      "price": "29.00",
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
  
const WoodenCards = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const [count, setCount] = useState(1);

    const images = product.images.map((image, index) => ({ src: image.src, alt: product.name }));
      const [selectedImage, setSelectedImage] = useState(images[0]);
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
                  name: "Wooden Card",
                  item: "https://mtap.byklabs.store/shop-nfc/wooden-cards",
              },
                {
                    "@type": "ListItem",
                    position: 4,
                    name: product.name,
                    item: `https://mtap.byklabs.store/shop-nfc/wooden-cards/${product.id}`,
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
      const handleClick = (event) => {
        event.preventDefault();
        console.info("You clicked a breadcrumb.");
      };
  return (
    <>
    <Head>
    <title>Wooden Cards</title>
    <meta property="og:site_name" content="mTap" />
    <meta name="description" content="Elevate your  Business strategy with the Wooden Cards component. Customize card colors, upload your business logo, and choose the card pack size that suits your needs." />
    <meta property="og:image" content="https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-06/mtap%20wood%20digital%20business%20card_0.png" />
    <meta property="og:image:url" content="https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-06/mtap%20wood%20digital%20business%20card_0.png" />
    <meta name="keywords" content="product, ecommerce, User engagement, SEO-friendly, Customizable colors, Wooden Cards" />

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
  <Card sx={{ marginTop: '10rem'}} >
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
              href="/shop-nfc/wooden-cards"
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
           Wooden Cards
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
        
    <h1 className="googleReviewCardsHeading" style={{ fontSize: '68px', fontWeight: "600", textAlign: 'center' ,marginBottom:'1rem'}}>{product.name}</h1>

    <Card
      size="lg"
    //   variant="outlined"
    //   orientation="horizontal"
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
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '4rem' , '@media screen and (max-width: 768px)': {
         margin: '0rem'
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
              width: '95%',
              margin: 0,
            }
          }}
        >
          <Image src={selectedImage.src} alt={selectedImage.alt} loading="eager" width={800} height={400} priority />
        </Box>
      </Box>
      <CardContent sx={{ gap: 1.5,width:'100%'}}>
        <CardContent>
        
          <Typography variant="h3" gutterBottom style={{ fontSize: "40px", fontWeight: "bold", color: "#00B4D8" ,marginBottom:'2rem',textAlign:'center'}}>
           {product.price}
          </Typography>
          <Typography variant="h3" gutterBottom style={{ fontSize: "40px", fontWeight: "bold",marginBottom:'2rem',textAlign:'center'}}>
          Personalize Your Card
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={6}>
            
          
              <br />
              <TextField fullWidth label="Name of your Business" variant="outlined" margin="normal" />
              <TextField fullWidth label="Address of your Business" variant="outlined" margin="normal" />
           
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
      <h2 style={{ fontSize: '70px', fontWeight: 'bold' ,marginBottom:'2rem'}}>Description</h2>
      <Typography sx={{ fontSize: '30px', width: '100vw', marginBottom: '5rem'}} className="DescriptionP">Want more reviews from happy customers? Just have them tap or scan the QR code and take them directly to your Google Review Profile. Get more positive feedback instantly. You do not have to do anything . We will configure the card for you with the Google Review link of your business. No Profile creation or any account management
</Typography>
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

  );
};

export default WoodenCards;