"use client";
import Image from "next/image";
import liveEvent from "../../Img/liveEvent.jpg" 
import EventsPage from "../../Img/event2Image.jpg";
import "./eventDetails.css";
import {
  Divider,
  Grid,
  Pagination,
  PaginationItem,
  Stack,
} from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";

const recentEventsData = [
  {
    id: 11,
    date: "15 April 2024",
    title: "Startup Pitch Night",
    description:
      "Witness the next big ideas at our Startup Pitch Night. Entrepreneurs showcased their innovative solutions.",
    imageUrl: liveEvent,
  },
  {
    id: 12,
    date: "28 March 2024",
    title: "Digital Marketing Masterclass",
    description:
      "Elevate your digital marketing game with our comprehensive Masterclass. Learn from industry leaders and experts.",
    imageUrl: liveEvent,
  },
  {
    id: 13,
    date: "10 February 2024",
    title: "Wellness Retreat",
    description:
      "Recharge and rejuvenate at our Wellness Retreat. Discover mindfulness techniques and embrace a healthier lifestyle.",
    imageUrl: liveEvent,
  },
];
const dummyData = [
  {
    id: 1,
    date: "26 May 2024",
    title: "Exciting Event Ahead!",
    description:
      "Join Us for an unforgettable experience at the HYPER mTap event. Get ready to network like never before!",
    imageUrl: liveEvent,
  },
  {
    id: 2,
    date: "15 July 2024",
    title: "Unleash Your Potential",
    description:
      "Attend our exclusive workshop and unlock your inner strength. Discover the power of mindfulness and productivity.",
    imageUrl: liveEvent,
  },
  {
    id: 3,
    date: "22 September 2024",
    title: "Tech Innovation Summit",
    description:
      "Stay ahead of the curve with our Tech Innovation Summit. Explore the latest trends and groundbreaking technologies.",
    imageUrl: liveEvent,
  },
  {
    id: 4,
    date: "10 November 2024",
    title: "Entrepreneurship Bootcamp",
    description:
      "Kickstart your entrepreneurial journey with our immersive Bootcamp. Learn from industry experts and successful founders.",
    imageUrl: liveEvent,
  },
  {
    id: 5,
    date: "28 December 2024",
    title: "New Years Networking Gala",
    description:
      "Ring in the New Year with our exclusive Networking Gala. Connect with like-minded professionals and celebrate success.",
    imageUrl: liveEvent,
  },
  {
    id: 6,
    date: "14 February 2025",
    title: "Love Your Career",
    description:
      "Reignite your passion for your career with our motivational workshop. Discover new strategies for growth and fulfillment.",
    imageUrl: liveEvent,
  },
  {
    id: 7,
    date: "20 April 2025",
    title: "Earth Day Sustainability Summit",
    description:
      "Join us in celebrating Earth Day with our Sustainability Summit. Learn about eco-friendly practices and make a positive impact.",
    imageUrl: liveEvent,
  },
  {
    id: 8,
    date: "5 June 2025",
    title: "Women in Tech Conference",
    description:
      "Empower and inspire at our Women in Tech Conference. Connect with leading female professionals and discover new opportunities.",
    imageUrl: liveEvent,
  },
  {
    id: 9,
    date: "18 August 2025",
    title: "Global Innovation Expo",
    description:
      "Experience the future at our Global Innovation Expo. Explore cutting-edge technologies and groundbreaking ideas.",
    imageUrl: liveEvent,
  },
  {
    id: 10,
    date: "30 October 2025",
    title: "Cybersecurity Summit",
    description:
      "Protect your business with our Cybersecurity Summit. Learn from industry experts and stay ahead of emerging threats.",
    imageUrl: liveEvent,
  },
  {
    id: 11,
    date: "10 November 2024",
    title: "Entrepreneurship Bootcamp",
    description:
      "Kickstart your entrepreneurial journey with our immersive Bootcamp. Learn from industry experts and successful founders.",
    imageUrl: liveEvent,
  },
  {
    id: 12,
    date: "28 December 2024",
    title: "New Years Networking Gala",
    description:
      "Ring in the New Year with our exclusive Networking Gala. Connect with like-minded professionals and celebrate success.",
    imageUrl: liveEvent,
  },
  {
    id: 13,
    date: "14 February 2025",
    title: "Love Your Career",
    description:
      "Reignite your passion for your career with our motivational workshop. Discover new strategies for growth and fulfillment.",
    imageUrl: liveEvent,
  },
];
const demoImages = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  src: liveEvent.src,
}));
const imageData = [
  // Repeat the liveEvent URL as many times as needed
  liveEvent,
  liveEvent,
  liveEvent,
  liveEvent,
  liveEvent,
  liveEvent,
  liveEvent,
  liveEvent,
  liveEvent,
  liveEvent,
  liveEvent,
  liveEvent,
  liveEvent,
  liveEvent,
  liveEvent,
  liveEvent,
  liveEvent,
  liveEvent,
  liveEvent,
  liveEvent,
];

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const ImageGrid = () => {
  return (
    <ImageList
      sx={{ width: 500, height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {demoImages.map((item, index) => (
        <ImageListItem
          key={item.id}
          cols={index % 3 === 0 ? 2 : 1}
          rows={index % 4 === 0 ? 2 : 1}
        >
          <img
            {...srcset(
              item.src,
              121,
              index % 4 === 0 ? 2 : 1,
              index % 3 === 0 ? 2 : 1
            )}
            alt="Event Image"
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default function EventDetails() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMonth, setSelectedMonth] = useState("May 2024");
  const [currentImagePage, setCurrentImagePage] = useState(1);
  const imagesPerPage = 12;
  const totalImages = imageData.length;
  const totalImagePages = Math.ceil(totalImages / imagesPerPage);

  const itemsPerPage = 9;
  const totalItems = dummyData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  const handleImagePageChange = (event, value) => {
    setCurrentImagePage(value);
  };
  const handleMonthSelection = (month) => {
    setSelectedMonth(month);
  };
  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return dummyData.slice(startIndex, endIndex);
  };

  const paginatedData = getPaginatedData();
  const getPaginatedImages = () => {
    const startIndex = (currentImagePage - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    return imageData.slice(startIndex, endIndex);
  };

  const paginatedImages = getPaginatedImages();
  return (
    <>
    <Head>
    <title>mTap Event</title>
    <meta property="og:site_name" content="mTap" />
   <meta name="description" content="Unleash the Power of Digital Business Cards for Modern
                Networking Websites! Join us for an unforgettable event to
                experience the revolutionary mtap technology." />
    <meta property="og:image" content="https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-04/Google-Review-Card-01.png" />
    <meta property="og:image:url" content="https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-04/Google-Review-Card-01.png" />
    <meta name="keywords" content="product, ecommerce, User engagement, SEO-friendly, Customizable colors,mTap, event" />
  
  
  </Head>
    <main data-v-0a07a5aa>
      <div className="business-pro-section">
        <div className="star-background">
          <Image
            src={EventsPage}
            alt="Star Background"
            // layout="fill"
            quality={100}
            loading="eager"
            priority
          />
        </div>
        <section
          className="business-pro-module content-overlay"
          data-v-0a07a5aa
        >
          <div className="container container-xs" data-v-0a07a5aa>
            <div className="text-animated-block" data-v-0a07a5aa>
              <h1 data-v-0a07a5aa>Upcoming Events</h1>

              <h5>
                Event Name Will Display here in this font size till here...
              </h5>
              <p>Date : June 15, 2024</p>
              <p>Time : 10:00 - 20:00</p>
              <p>Add : Event Location will be displayed here</p>
            </div>
          </div>
        </section>
      </div>

      {/* carousel Images                  */}

      <section className="business-card" data-v-0a07a5aa>
        <div className="recentEvents">
          <div className="eventContainer">
            <div className="teamsHeading " data-v-0a07a5aa>
              <h2 data-v-0a07a5aa>Recent Events</h2>
            </div>
            <div className="teamscontainer">
              <div className="teamscard-grid">
                {recentEventsData.map((event) => (
                  <div key={event.id} className="teamscard">
                    <div className="teamsicon-container">
                      <Image
                        src={event.imageUrl}
                        alt="Icon"
                        className="teamsicon"
                        loading="lazy"
                        width={1300}
                        height={1300}
                      />
                    </div>
                    <Link href="/live-event" className="linkTag">
                      <div className="allEventsText">
                        <p
                          style={{
                            marginTop:'.8rem',
                            marginBottom: ".8rem",
                            fontSize: "25px",
                            color: "black",
                          }}
                        >
                          {event.date}
                        </p>
                        <h3
                          className="teamstitleh3"
                          style={{
                            color: "black",
                          }}
                        >
                          {event.title}
                        </h3>
                        <h6
                          style={{
                            fontSize: "24px",
                            fontWeight: "400",
                            color: "black",
                          }}
                        >
                          {event.description}
                        </h6>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Divider sx={{ marginTop: "2rem", borderWidth: "3px" }} />
          <div className="allEvents">
            <div className=" eventHeading" data-v-0a07a5aa>
              <h2 data-v-0a07a5aa style={{ textAlign: "start" }}>
                All Events
              </h2>
              <p
                style={{
                  fontSize: "25px",
                  color: "black",
                  marginTop: "1rem",
                  marginBottom: "1rem",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  fontWeight: selectedMonth === "May 2024" ? "bold" : "normal",
                }}
                onClick={() => handleMonthSelection("May 2024")}
              >
                {selectedMonth === "May 2024" && (
                  <span
                    style={{
                      width: "15px",
                      height: "15px",
                      backgroundColor: "orange",
                      borderRadius: "50%",
                      marginRight: "12px",
                      marginLeft: "-19px",
                    }}
                  />
                )}
                May 2024
              </p>
              <p
                style={{
                  fontSize: "25px",
                  color: "black",
                  marginBottom: "1rem",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  fontWeight:
                    selectedMonth === "February 2024" ? "bold" : "normal",
                }}
                onClick={() => handleMonthSelection("February 2024")}
              >
                {selectedMonth === "February 2024" && (
                  <span
                    style={{
                      width: "15px",
                      height: "15px",
                      backgroundColor: "orange",
                      borderRadius: "50%",
                      marginRight: "12px",
                      marginLeft: "-19px",
                    }}
                  />
                )}
                February 2024
              </p>
              <p
                className="teamsHeadingP"
                style={{
                  fontSize: "25px",
                  color: "black",
                  marginBottom: "1rem",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",

                  fontWeight:
                    selectedMonth === "December 2024" ? "bold" : "normal",
                }}
                onClick={() => handleMonthSelection("December 2024")}
              >
                {" "}
                {selectedMonth === "December 2024" && (
                  <span
                    style={{
                      width: "15px",
                      height: "15px",
                      backgroundColor: "orange",
                      borderRadius: "50%",
                      marginLeft: "-19px",

                      marginRight: "12px",
                    }}
                  />
                )}
                December 2024
              </p>
            </div>
            <div className="teamscontainer">
              <div className="teamscard-grid">
                {paginatedData.map((event) => (
                  <div key={event.id} className="teamscard">
                    <div className="teamsicon-container">
                      <Image
                        src={event.imageUrl}
                        alt="Icon"
                        className="teamsicon"
                        loading="lazy"
                        width={1300}
                        height={1300}
                      />
                    </div>
                    <div className="allEventsPara">
                      <p  className="allEventsP"
                        style={{
                          marginTop:'.8rem',
                          marginBottom: "0.5rem",
                          fontSize: "20px",
                          color: "black",
                        }}
                      >
                        {event.date}
                      </p>
                      <h3 className="teamstitleh3">{event.title}</h3>
                      <h6
                        style={{
                          fontSize: "24px",
                          color: "black",
                          fontWeight: "400",
                        }}
                      >
                        {event.description}
                      </h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Stack spacing={2} alignItems="center" mt={4}>
            {/* <Typography sx={{color:"black"}}>
              Page {currentPage} of {totalPages}
            </Typography> */}
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              renderItem={(item) => <PaginationItem {...item} />}
              //   sx={{border:'1px solid transparent',backgroundColor:'transparent'}}
            />
          </Stack>
        </div>
      </section>
      {/* \Photo & video gallery */}
      <section className="business-card" data-v-0a07a5aa>
        <div className="imageGallery">
          <div className="imageHeading" data-v-0a07a5aa>
            <h2 data-v-0a07a5aa style={{ marginTop: "4rem" }}>
              Photo & Video Gallery
            </h2>
          </div>
          {/* If you want the gallery like figma  */}
          {/* <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="" />
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="" />
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
        </div>
    </div>
</div> */}
          <Grid container spacing={2} className="gridImage">
            {paginatedImages.map((imageUrl, index) => (
              <Grid item xs={3} md={4} key={index} className="imageGrid">
                <Image
                  src={imageUrl}
                  alt="Gallery Image"
               
                  style={{ width: "100%", height: "auto" }}
                />
              </Grid>
            ))}
          </Grid>
          <Stack spacing={2} alignItems="center" mt={8} mb={8}>
            <Pagination
              count={totalImagePages}
              page={currentImagePage}
              onChange={handleImagePageChange}
              renderItem={(item) => <PaginationItem {...item} />}
            />
          </Stack>
        </div>
      </section>
    </main>
    </>
  );
}
