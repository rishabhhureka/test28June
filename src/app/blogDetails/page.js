"use client"; // This is required at the top of the file for Client Components

import { useSearchParams } from "next/navigation";
import { useEffect ,Suspense} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link";
import Head from "next/head";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
const getBackgroundColor = (subheading) => {
  switch (subheading) {
    case "PRODUCTS UPDATES":
      return "black";
    case "NETWORKING TIPS":
      return "#60C447";
    case "NEWS & EVENTS":
      return "#FCE93B";
    case "USE CASES":
      return "#2B59C3";
    default:
      return "transparent";
  }
};
const blogDetailData = {
  title: "Customer Feedback",
  subTitle: "Why is customer feedback important to any business?",
  content: [
    {
      heading: "",
      text: "In today's fast-paced digital era, customer feedback has become a vital ingredient for business success. It holds the key to understanding customer needs, enhancing satisfaction, and driving marketing strategies. While the traditional methods of collecting feedback often fall short, the emergence of online platforms like Google Reviews has revolutionized the process. We will explore the importance of customer feedback, the significance of Google Reviews and how mTap NFC Google Reviews Cards can empower businesses to maximize their customer feedback efforts.",
    },
    {
      title: "Customer Feedback",
      text: "",
    },
    {
      subtitle: "Why is customer feedback important to any business?",
      text: "Customer feedback serves as a compass guiding businesses towards success. It offers invaluable benefits, including:",
    },
    {
      heading: "Insight into customer needs",
      text: "Feedback provides a window into the minds of customers, revealing their expectations, preferences, and pain points. By understanding these insights, businesses can refine their products or services to better align with customer desires.",
    },
    {
      heading: "Improved customer satisfaction",
      text: "Actively listening to feedback and taking prompt action demonstrates a commitment to customer satisfaction. Addressing concerns, resolving issues, and incorporating suggestions contribute to enhanced customer loyalty and happiness.",
    },
    {
      heading: "Competitive advantage",
      text: "Businesses that prioritize customer feedback gain a significant edge in the marketplace. By leveraging feedback to continuously improve their offerings, they stand out from the competition, attracting more customers and fostering long-term relationships.",
    },
    {
      heading: "Challenges in getting customer feedback",
      text: "Despite its importance, obtaining customer feedback can be a challenging endeavor due to various obstacles, including:",
    },
    {
      heading: "Lack of customer motivation",
      text: "Customers are often too busy to provide feedback or may not perceive it as a valuable use of their time. Convincing them to share their opinions requires proactive efforts from businesses.",
    },
    {
      heading: "Limited response rates",
      text: "Traditional feedback methods such as surveys or comment cards often yield disappointingly low response rates. This can lead to skewed data and incomplete insights, hindering businesses from making informed decisions.",
    },
    {
      heading: "Bias and inaccuracy",
      text: "Feedback collected through self-reported methods can be subject to response bias, impacting the reliability and accuracy of the insights gathered. Overcoming these biases and obtaining genuine feedback is crucial for making informed decisions.",
    },
  ],

  sources: [
    {
      name: "BrightLocal",
      url: "https://www.brightlocal.com/research/local-consumer-review-survey",
    },
    {
      name: "Moz",
      url: "https://moz.com/blog/what-do-google-reviews-mean-for-local-seo",
    },
    {
      name: "ReviewTrackers",
      url: "https://www.reviewtrackers.com/guides/importance-of-online-reviews",
    },
    {
      name: "SurveyMonkey",
      url: "https://www.surveymonkey.com/curiosity/customer-feedback-stats",
    },
  ],
};
const blogData = [
  {
    id: "1",
    image:
    "/images/blog1.jpg",
    subheading: "PRODUCTS UPDATES",
    heading: "Unleashing the Power of Google Reviews: The mTap NFC Solution",
    avatar:
      "https://alumni.cusat.ac.in/wp-content/themes/cera/assets/images/avatars/user-avatar.png",
    author: "Roopak Gupta",
    authorTitle: "CEO & Founder @mTap",
  },
  {
    id: "2",
    image:
    "/images/blog2.jpg",
    subheading: "NETWORKING TIPS",
    heading: "Exploring the Future of NFC Technology",
    avatar:
      "https://alumni.cusat.ac.in/wp-content/themes/cera/assets/images/avatars/user-avatar.png",
    author: "Jane Doe",
    authorTitle: "CTO @TechWorld",
  },
  {
    id: "3",
    image:
    "/images/blog3.jpg",
    subheading: "PRODUCTS UPDATES",
    heading: "The Rise of Contactless Payments",
    avatar:
      "https://alumni.cusat.ac.in/wp-content/themes/cera/assets/images/avatars/user-avatar.png",
    author: "John Smith",
    authorTitle: "Lead Developer @FinTech",
  },
  {
    id: "4",
    image:
    "/images/blog4.jpg",
    subheading: "NEWS & EVENTS",
    heading: "The Rise of Contactless Payments",
    avatar:
      "https://alumni.cusat.ac.in/wp-content/themes/cera/assets/images/avatars/user-avatar.png",
    author: "John Smith",
    authorTitle: "Lead Developer @FinTech",
  },
];

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const BlogDetails = () => {
  const searchParams = useSearchParams();
  const heading = searchParams.get("heading");
  const subheading = searchParams.get("subheading");
  const image = searchParams.get("image");
  const author = searchParams.get("author");
  const authorTitle = searchParams.get("authorTitle");
  const avatar = searchParams.get("avatar");
  const blogId = searchParams.get("id");

  const generateArticleSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://mtap.byklabs.store/blog/${heading}`, // Update with your actual blog post URL
      },
      headline: heading, // Use the blog heading here
      image: image, // Use the blog image URL here
      author: {
        "@type": "Person",
        name: author, // Use the blog author name here
      },
      publisher: {
        "@type": "Organization",
        name: "mTap", // Use your website name here
        logo: {
          "@type": "ImageObject",
          url: "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2022-04/mTapSocialImage.png", // Use your logo URL here
        },
      },
      datePublished: "2024-05-17", // Update with your actual publication date
      dateModified: "2024-05-17", // Update with your actual modification date
    };
  };
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
          name: "Blog",
          item: "https://mtap.byklabs.store/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: heading,
          item: `https://mtap.byklabs.store/blog/${heading}`,
        },
      ],
    };
  };
  useEffect(() => {
    const articleSchema = generateArticleSchema();
    const articleScript = document.createElement("script");
    articleScript.type = "application/ld+json";
    articleScript.innerHTML = JSON.stringify(articleSchema);
    document.head.appendChild(articleScript);
    // Clean up the script when component unmounts
    const breadcrumbSchema = generateBreadcrumbSchema();
    const breadcrumbScript = document.createElement("script");
    breadcrumbScript.type = "application/ld+json";
    breadcrumbScript.innerHTML = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(breadcrumbScript);
    return () => {
      document.head.removeChild(articleScript);
      document.head.removeChild(breadcrumbScript);
    };
  }, [blogId]);
  return (
    <>
      <Head>
        <title>Blog Details</title>
        {/* Include Article Schema within the Head */}
        <script type="application/ld+json">
          {JSON.stringify(generateArticleSchema())}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbSchema())}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "mTap",
            url: "https://mtap.byklabs.store/",
            logo: "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2022-04/mTapSocialImage.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-800-555-5555",
              contactType: "Customer Service",
            },
          })}
        </script>
      </Head>

      <div
        style={{
          marginTop: "12rem",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box sx={{ width: "80%", margin: "0 auto", "@media (max-width: 767px)": {
                    width:'100%', padding:'1.2rem'
                    },}}>
          {/* Breadcrumbs */}
          <div
            role="presentation"
            onClick={handleClick}
            style={{ marginBottom: "4rem" }}
          >
            <Breadcrumbs
              aria-label="breadcrumb"
              separator={
                <NavigateNextIcon fontSize="medium" sx={{ color: "white" }} />
              }
              sx={{
                display: "inline-block",
                color: "black",
                border: "1px solid transparent",
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
                    color: "white",
                    fontSize: "30px",
                    ":hover": {
                      backgroundColor: "gray", // Change background color on hover
                      color: "white", // Change text color on hover
                    },
                    "@media (max-width: 767px)": {
                      fontSize: "14px",
                    },
                  }}
                >
                  {" "}
                  Home
                </Typography>
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/blog"
                className="linkBlog"
              >
                <Typography
                  variant="contained"
                  sx={{
                    color: "white",
                    fontSize: "30px",
                    ":hover": {
                      backgroundColor: "gray", // Change background color on hover
                      color: "white", // Change text color on hover
                    },
                    "@media (max-width: 767px)": {
                      fontSize: "14px",
                    },
                  }}
                >
                  {" "}
                  Blog
                </Typography>
              </Link>
              <Typography
                underline="hover"
                color="white"
                aria-current="blogDetails"
              >
                <Typography
                  variant="contained"
                  sx={{
                    color: "white",
                    fontSize: "30px",
                    ":hover": {
                      backgroundColor: "gray", // Change background color on hover
                      color: "white", // Change text color on hover
                    },
                    "@media (max-width: 767px)": {
                      fontSize: "14px",
                    },
                  }}
                >
                  {" "}
                  {heading}
                </Typography>
              </Typography>
            </Breadcrumbs>
          </div>
          <Link href="/blog"  ><ArrowBackIosNewIcon sx={{fontSize:40,marginBottom:'1rem' ,color:'beige'}} /></Link>
  
         
          <Card
            variant="plain"
            sx={{
              maxHeight: "1100vh",
              width: "100%",
              overflow: "auto",
              marginBottom: "2rem",
              borderRadius: 20,
            }}
          >
          
            <CardMedia
              component="img"
              alt="blog"
              image={image}
              sx={{ maxHeight: 550 }}
            />
            <Box
              sx={{ display: "flex", flexDirection: "column", margin: "2rem" }}
            >
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography
                  variant="h6"
                  sx={{
                    display: "inline-block",
                    marginBottom: "1rem",
                    backgroundColor: getBackgroundColor(subheading),
                    color: subheading === "NEWS & EVENTS" ? "black" : "white",
                    fontWeight: "600",
                    border: "8px solid transparent",
                    "@media (max-width: 767px)": {
                      fontSize: "12px",
                    },
                  }}
                >
                  {subheading}
                </Typography>

                <Typography
                  variant="h1"
                  sx={{
                    fontSize: "60px",
                    fontWeight: "900",

                    marginBottom: "1rem",
                    "@media (max-width: 767px)": {
                      fontSize: "35px",
                    },
                  }}
                >
                  {heading}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{
                      "@media (max-width: 767px)": {
                        fontSize: "15px",
                      },
                    }}
                  >
                    26 january 2023
                  </Typography>
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{
                      marginBottom: "2rem",
                      "@media (max-width: 767px)": {
                        fontSize: "15px",
                      },
                    }}
                  >
                    By: {author}
                  </Typography>
                </Box>
                {blogDetailData.content.map((item, index) => (
                  <Box key={index} sx={{ margin: "1rem" }}>
                    {item.title && (
                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: "700",
                          marginBottom: "2rem",
                          "@media (max-width: 767px)": {
                            fontSize: "30px",
                          },
                        }}
                      >
                        {item.title}
                      </Typography>
                    )}
                    {item.subtitle && (
                      <Typography
                        variant="h4"
                        color="text.secondary"
                        sx={{
                          fontWeight: "700",
                          marginBottom: "2rem",
                          "@media (max-width: 767px)": {
                            fontSize: "25px",
                          },
                        }}
                      >
                        {item.subtitle}
                      </Typography>
                    )}
                    {item.heading && (
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: "700",
                          marginBottom: "2rem",
                          "@media (max-width: 767px)": {
                            fontSize: "30px",
                          },
                        }}
                      >
                        {item.heading}
                      </Typography>
                    )}
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "25px",
                        "@media (max-width: 767px)": {
                          fontSize: "20px",
                        },
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                ))}
                <Box sx={{ marginTop: "2rem" }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "700",
                      marginBottom: "1rem",
                      "@media (max-width: 767px)": {
                        fontSize: "30px",
                      },
                    }}
                  >
                    Sources:
                  </Typography>
                  <ul>
                    {blogDetailData.sources.map((source, index) => (
                      <li key={index} style={{ marginBottom: "0.5rem" }}>
                        <Box component="span" sx={{ display: "inline" }}>
                          <Typography
                            variant="body1"
                            sx={{
                              fontSize: "25px",
                              display: "inline",
                              marginRight: "0.5rem",
                              "@media (max-width: 767px)": {
                                fontSize: "20px",
                              },
                            }}
                          >
                            {source.name}:
                          </Typography>
                          <Typography
                            variant="body1"
                            component="a"
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              display: "inline",
                              color: "black",
                              fontSize: "25px",
                              "@media (max-width: 767px)": {
                                display: "inline-block",
                                fontSize: "16px",
                              },
                            }}
                          >
                            {source.url}
                          </Typography>
                        </Box>
                      </li>
                    ))}
                  </ul>
                </Box>
              </CardContent>
            </Box>
          </Card>
        </Box>
        <Box sx={{ width: "80%", margin: "0 auto", "@media (max-width: 767px)": {
                    width:'100%', padding:'1.2rem'
                    }, }}>
          <Card
            sx={{
              display: "flex",
              marginBottom: "6rem",
              maxHeight: "100vh",
              width: "100%",
              overflow: "auto",
              borderRadius: 20,
              borderRadius: 20,
              overflow: "auto",
            }}
          >
            {" "}
            <Avatar
              alt={author}
              src={avatar}
              sx={{
                width: 270,
                height: 270,
                margin: "4rem",
                "@media (max-width: 767px)": {
                  width: 130,
                  height: 130,
                  margin: "1rem",
                },
              }}
            />
            <Box
              sx={{
                marginTop: "2rem",
                marginLeft: "8rem",
                width: "100%",
                "@media (max-width: 767px)": {
                  marginLeft: "1rem",
                  marginTop: 0,
                },
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    marginBottom: ".5rem",
                    "@media (max-width: 767px)": {
                      fontSize: "20px",
                    },
                  }}
                >
                  Author
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    color: "black",
                    fontWeight: "900",
                    maxWidth: "40vw",
                    marginBottom: ".5rem",
                    "@media (max-width: 767px)": {
                      maxWidth: "50vw",
                      fontSize: "25px",
                    },
                  }}
                >
                  {author}
                </Typography>
                <Typography
                  variant="h4"
                  color="text.secondary"
                  component="div"
                  sx={{
                    color: "black",
                    maxWidth: "40vw",
                    marginBottom: "2rem",
                    "@media (max-width: 767px)": {
                      maxWidth: "50vw",
                      fontSize: "23px",
                    },
                  }}
                >
                  {authorTitle}
                </Typography>
                <Typography
                  variant="h4"
                  color="text.secondary"
                  component="div"
                  sx={{
                    color: "black",
                    maxWidth: "40vw",
                    marginBottom: "2rem",
                    "@media (max-width: 767px)": {
                      maxWidth: "50vw",
                      fontSize: "23px",
                    },
                  }}
                >
                  Email: abc123@gmail.com
                </Typography>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <LinkedInIcon
                    sx={{
                      fontSize: 50,
                      "@media (max-width: 767px)": {
                        maxWidth: "40vw",
                        fontSize: 30,
                      },
                    }}
                  />
                  <InstagramIcon
                    sx={{
                      fontSize: 50,
                      "@media (max-width: 767px)": {
                        fontSize: 30,
                      },
                    }}
                  />
                  <FacebookRoundedIcon
                    sx={{
                      fontSize: 50,
                      "@media (max-width: 767px)": {
                        fontSize: 30,
                      },
                    }}
                  />
                  <XIcon
                    sx={{
                      fontSize: 50,
                      "@media (max-width: 767px)": {
                        fontSize: 30,
                      },
                    }}
                  />
                  <YouTubeIcon
                    sx={{
                      fontSize: 50,
                      "@media (max-width: 767px)": {
                        fontSize: 30,
                      },
                    }}
                  />
                </Box>
              </CardContent>
            </Box>
          </Card>
        </Box>

        {/* Continue reading card  */}
        <div>
          <h1 
            className="continueReadingBlog"
            style={{
              fontSize: "80px",
              fontWeight: "900",
              color:'white',
              textAlign: "center",
              marginBottom: "4rem"
             
            }}
          >
            Continue Reading
          </h1>
        </div>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(350px, 1fr))",
            gap: "2rem",
            justifyContent: "center",
            width: "80%",
            margin: "0 auto"
            ,"@media (max-width: 767px)": {
              gridTemplateColumns: "1fr", 
              width: "100%",
            padding:'1.2rem',
        
                  },
          }}
        >
          {blogData.map((blog, index) => (
            <Card
              key={index}
              variant="plain"
              sx={{
                height: "70vh",
                width: "100%",
                overflow: "auto",
                marginBottom: "2rem",
                borderRadius: 20,
                "@media (max-width: 767px)": {
                height:'78vh'
            
                      },
                      "@media (max-width: 390px)": {
                height:'98vh'
            
                      },
              }}
            >
              <CardMedia
                component="img"
                alt="blog"
                image={blog.image}
                sx={{ maxHeight: 350 }}
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        display: "inline-block",
                        backgroundColor: getBackgroundColor(blog.subheading),
                        color:
                          blog.subheading === "NEWS & EVENTS"
                            ? "black"
                            : "white",
                        fontWeight: "600",
                        border: "8px solid transparent",
                      }}
                    >
                      {blog.subheading}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      26 january 2023
                    </Typography>
                  </Box>

                  <Link
                    key={index}
                    className="linkBlog"
                    href={{
                      pathname: "/blogDetails",
                      query: {
                        heading: blog.heading,
                        subheading: blog.subheading,
                        image: blog.image,
                        author: blog.author,
                        authorTitle: blog.authorTitle,
                        avatar: blog.avatar,
                        // Add any other data you want to pass
                      },
                    }}
                    passHref
                  >
                    <Typography
                      variant="h4"
                      color="text.secondary"
                      component="div"
                      sx={{
                        color: "black",
                        marginTop: "2rem",
                        fontWeight: "600",
                      }}
                    >
                      {blog.heading}
                    </Typography>
                  </Link>
                </CardContent>
              </Box>
              <CardActions sx={{ marginLeft: "2rem", gap: "1rem" }}>
                <Avatar
                  alt={blog.author}
                  src={blog.avatar}
                  sx={{ width: 70, height: 70 }}
                />
                <Typography variant="subtitle3" color="text.secondary">
                  By: {blog.author} <br />
                  {blog.authorTitle}
                </Typography>
              </CardActions>
            </Card>
          ))}
        </Box>
      </div>
    </>
  );
};

export default BlogDetails;
