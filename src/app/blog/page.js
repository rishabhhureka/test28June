
import Link from "next/link";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Head from "next/head";

const mainBlogData = {
  id: "1",
  image:
    "/images/blog1.jpg ",
  subheading: "PRODUCTS UPDATES",
  heading: "Unleashing the Power of Google Reviews: The mTap NFC Solution",
  date: "June 26, 2023",
  author: "Roopak Gupta",
  avatar:
    "https://alumni.cusat.ac.in/wp-content/themes/cera/assets/images/avatars/user-avatar.png",
  authorTitle: "CEO & Founder @mTap",
};
const blogData = [
  
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
      "/images/blog3.jpg",
    subheading: "NEWS & EVENTS",
    heading: "The Rise of Contactless Payments",
    avatar:
      "https://alumni.cusat.ac.in/wp-content/themes/cera/assets/images/avatars/user-avatar.png",
    author: "John Smith",
    authorTitle: "Lead Developer @FinTech",
  },
  {
    id: "5",
    image:
      "/images/blog4.jpg",
    subheading: "USE CASES",
    heading: "The Rise of Contactless Payments",
    avatar:
      "https://alumni.cusat.ac.in/wp-content/themes/cera/assets/images/avatars/user-avatar.png",
    author: "John Smith",
    authorTitle: "Lead Developer @FinTech",
  },
  // {
  //   id: "1",
  //   image:
  //     "https://st3.depositphotos.com/3591429/13269/i/450/depositphotos_132694218-stock-photo-woman-writing-notes-in-diary.jpg",
  //   subheading: "PRODUCTS UPDATES",
  //   heading: "Unleashing the Power of Google Reviews: The mTap NFC Solution",
  //   avatar:
  //     "https://alumni.cusat.ac.in/wp-content/themes/cera/assets/images/avatars/user-avatar.png",
  //   author: "Roopak Gupta",
  //   authorTitle: "CEO & Founder @mTap",
  // },
];
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
const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog</title>
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

      <div style={{ marginTop: "12rem", width: "100%" }}>
        <div>
          <h1
            className="blogHeading"
            style={{
              fontSize: "80px",
              fontWeight: "900",
              textAlign: "center",
              marginBottom: "4rem",
              
            }}
          >
            Blog
          </h1>
         
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
       
          
          <div>
            <Box sx={{ display: { xs: "none", md: 'flex' }, justifyContent: "center",}}>
              <Card
                sx={{
                  display: "flex",
                  marginBottom: "6rem",
                  height: "60vh",
                  borderRadius: 20,
                  width: "70%",
                  overflow: "auto",
                  
                }}
              >
              
                <CardMedia
                  component="img"
                  sx={{ width: "40%" }}
                  image={mainBlogData.image}
                  alt="blog image"
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography
                      variant="h5"
                      sx={{
                        display: "inline-block",
                        backgroundColor: "black",
                        color: "white",
                        marginTop: "2rem",
                        fontWeight: "600",
                        border: "8px solid transparent",
                      }}
                    >
                      {mainBlogData.subheading}
                    </Typography>
                    <Link
                      className="linkBlog"
                      href={{
                        pathname: "/blogDetails",
                        query: {
                          heading: mainBlogData.heading,
                          subheading: mainBlogData.subheading,
                          image: mainBlogData.image,
                          author: mainBlogData.author,
                          authorTitle: mainBlogData.authorTitle,
                          avatar: mainBlogData.avatar,
                          id: mainBlogData.id,
                          // Add any other data you want to pass
                        },
                      }}
                      passHref
                    >
                      <Typography
                        variant="h3"
                        color="text.secondary"
                        component="div"
                        sx={{
                          color: "black",
                          marginTop: "4rem",
                          fontWeight: "600",
                          width: "60%",
                        }}
                      >
                        {mainBlogData.heading}
                      </Typography>
                    </Link>
                  </CardContent>
                  <CardActions>
                    <Typography
                      variant="subtitle3"
                      color="text.secondary"
                      sx={{ marginBottom: "1rem" }}
                    >
                      {" "}
                      {mainBlogData.date} <br /> By: {mainBlogData.author}
                    </Typography>
                  </CardActions>
                </Box>
              </Card>
            </Box>
            {/* Mobile responsive card */}
            <Box sx={{ display: { xs: "flex", md: "none" },justifyContent:'center' ,padding:'1rem'}}>
              <Card
                variant="plain"
                sx={{
                  height: "70vh",
                  width: "100%",
                  overflow: "auto",
                  marginBottom: "2rem",
                  borderRadius: 20,
                  "@media (max-width: 767px)": {
                    // Styles for screens up to 768px wide
                    width: "100%",
                    height: "75vh",
                   
                  },
                  "@media (max-width: 390px)": {
                  
                    height: "85vh",
                   
                  },
                }}
                
              >
                <CardMedia
                  component="img"
                  alt="blog"
                  image={mainBlogData.image}
                  sx={{ maxHeight: 350 }}
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between","@media (max-width: 767px)": {
                       marginTop:'10px'
                      }, }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          display: "inline-block",
                          backgroundColor: getBackgroundColor(
                            mainBlogData.subheading
                          ),
                          color:
                            mainBlogData.subheading === "NEWS & EVENTS"
                              ? "black"
                              : "white",
                          fontWeight: "600",
                          border: "8px solid transparent",
                          "@media (max-width: 767px)": {
                            // Styles for screens up to 768px wide
                           fontSize:'10px'
                          },
                        }}
                      >
                        {mainBlogData.subheading}
                      </Typography>
                      <Typography variant="h6" color="text.secondary" sx={{
                         "@media (max-width: 767px)": {
                          // Styles for screens up to 768px wide
                         fontSize:'15px'
                        },
                      }}>
                        26 january 2023
                      </Typography>
                    </Box>

                    <Link
                      className="linkBlog"
                      href={{
                        pathname: "/blogDetails",
                        query: {
                          heading: mainBlogData.heading,
                          subheading: mainBlogData.subheading,
                          image: mainBlogData.image,
                          author: mainBlogData.author,
                          authorTitle: mainBlogData.authorTitle,
                          avatar: mainBlogData.avatar,
                          id: mainBlogData.id,
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
                          "@media (max-width: 767px)": {
                            // Styles for screens up to 768px wide
                           fontSize:'25px'
                          },
                        }}
                      >
                        {mainBlogData.heading}
                      </Typography>
                    </Link>
                  </CardContent>
                </Box>
                <CardActions sx={{ marginLeft: "2rem", gap: "1rem", "@media (max-width: 767px)": {
                            // Styles for screens up to 768px wide
                           margin:1
                          }, }}>
                  <Avatar
                    alt={mainBlogData.author}
                    src={mainBlogData.avatar}
                    sx={{ width: 70, height: 70  ,"@media (max-width: 767px)": {
                      // Styles for screens up to 768px wide
                    width:50,height:50
                    },}}
                  />
                  <Typography variant="subtitle3" color="text.secondary">
                    By: {mainBlogData.author} <br />
                    {mainBlogData.authorTitle}
                  </Typography>
                </CardActions>
              </Card>
            </Box>
          </div>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(350px, 1fr))",
              gap: "2rem",
              justifyContent: "center",
              width: "70%",
              margin: "0 auto"
              ,"@media (max-width: 767px)": {
                gridTemplateColumns: "1fr", 
                width: "100%",
              padding:'1rem'
                    },
            }}
          >
            {blogData.map((blog, index) => (
              <Card
                key={index}
                variant="plain"
                sx={{
                  width: "100%",
                  // height:'70vh',
                  overflow: "auto",
                  marginBottom: "2rem",
                  borderRadius: 20,
           
                }}
              >
                <CardMedia
                  component="img"
                  alt="blog"
                  image={blog.image}
                  sx={{ maxHeight: 350 }}
                />
                <Box sx={{ display: "flex", flexDirection: "column" , "@media (max-width: 767px)": {
                          marginTop:'1rem'
                          },}}>
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
                          "@media (max-width: 767px)": {
                            // Styles for screens up to 768px wide
                            fontSize:'10px'
                          },
                        }}
                      >
                        {blog.subheading}
                      </Typography>
                      <Typography variant="h6" color="text.secondary"sx={{ "@media (max-width: 767px)": {
                            // Styles for screens up to 768px wide
                            fontSize:'15px'
                          },}}>
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
                          id: blog.id,
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
                          "@media (max-width: 767px)": {
                            // Styles for screens up to 768px wide
                            fontSize:'25px'
                          },
                        }}
                      >
                        {blog.heading}
                      </Typography>
                    </Link>
                  </CardContent>
                </Box>
                <CardActions sx={{ marginLeft: "2rem", gap: "1rem", marginBottom:'4rem',
                          "@media (max-width: 767px)": {
                            // Styles for screens up to 768px wide
                            margin:0,
                            marginBottom:'4rem',
                          }, }}>
                  <Avatar
                    alt={blog.author}
                    src={blog.avatar}
                    sx={{ width: 70, height: 70 ,
                      "@media (max-width: 767px)": {
                        // Styles for screens up to 768px wide
                        width: 50, height: 50 
                      },}}
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
      </div>
    </>
  );
};

export default Blog;
