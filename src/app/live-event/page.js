"use client";
import Image from "next/image";
import liveEvent from "../../Img/liveEvent.jpg";
import EventsPage from "../../Img/event3Image.jpg";
import "./liveEvent.css";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {
  Divider,
  Grid,
  Pagination,
  PaginationItem,
  Stack,
} from "@mui/material";

import React, { useState } from "react";
import Head from "next/head";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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

const imageData = Array.from({ length: 20 }, () => liveEvent);


export default function EventDetails() {
  const [currentImagePage, setCurrentImagePage] = useState(1);
  const imagesPerPage = 12;
  const totalImages = imageData.length;
  const totalImagePages = Math.ceil(totalImages / imagesPerPage);

  const totalItems = dummyData.length;

  const handleImagePageChange = (event, value) => {
    setCurrentImagePage(value);
  };

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
            layout="fill"
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
              <h1 data-v-0a07a5aa>Event name will Go Here in two lines ...</h1>

              <h5>
                Witness the next big ideas at our Startup Pitch Night.
                Entrepreneurs showcased their innovative solutions. Reignite
                your passion for your career with our motivational workshop.
                Discover new strategies for growth and fulfillment.
              </h5>
              <p>Date : June 15, 2024</p>
              <p>Time : 10:00 - 20:00</p>
              <p>Add : Event Location will be displayed here</p>
            </div>

            <div className="image-grid">
         <div className="imageGroup">
                <Image
                 className="image1"
                  src={liveEvent}
                  alt='Event Image'
                  width={600}
                  height={360}
                  style={{ width: "100%", height: "revert-layer" }}
                />
             <Image
                    className="image2"
                 src={liveEvent}
                 alt='Event Image'
                 width={360}
                 height={604}
                 style={{ width: "100%", height: "auto" }}
               />
            </div>
            <div className="imageGroup">
         
         <Image
             className="image3"
           src={liveEvent}
           alt='Event Image'
           width={360}
           height={360}
           style={{ width: "100%", height: "auto" }}
         />
      <Image
             className="image4"
          src={liveEvent}
          alt='Event Image'
          width={360}
          height={360}
          style={{ width: "100%", height: "auto" }}
        />
     </div>
     </div>
          </div>
        </section>
      </div>

      {/* carousel Images                  */}

      <section className="business-card" data-v-0a07a5aa>
        <div className="recentEvents">
          <div className="teamsHeading">
            <h2 data-v-0a07a5aa>About Event</h2>
            <h5>
              Welcome to the HYPER mTap event, a transformative experience
              designed to revolutionize the way you connect, collaborate, and
              create opportunities. This event brings together innovators,
              entrepreneurs, industry leaders, and enthusiasts from various
              fields to explore the future of networking in an ever-evolving
              digital landscape. Held at the prestigious Innovation Hub on May
              26, 2024, this one-day event promises to be an unforgettable
              experience that will leave a lasting impact on your professional
              journey.
              <br />
              <br />
              The HYPER mTap event is more than just a conference; it’s a hub of
              innovation, inspiration, and collaboration. Whether you’re looking
              to expand your knowledge, grow your network, or explore new
              opportunities, this event has something for everyone. Join us for
              a day of learning, sharing, and connecting, and take the next step
              in your professional journey. Don’t miss out on this chance to be
              part of a community that is driving the future of networking.
              Register now and secure your spot at the forefront of innovation!
            </h5>
          </div>
          {/* <div className="teamscontainer">
            
            </div> */}

          <Divider sx={{ marginTop: "2rem", borderWidth: "3px" }} />
          <section className="business-card" data-v-0a07a5aa>
            <div >
              <div className="imageHeading" data-v-0a07a5aa>
                <h2 data-v-0a07a5aa style={{ marginTop: "4rem" }}>
                  Photos & Videos
                </h2>
              </div>
              <Grid container spacing={2} className="gridImage">
                {paginatedImages.map((imageUrl, index) => (
                  <Grid alignItems="center" item xs={3} md={4} key={index} className="imageGrid">
                    <Image
                      src={imageUrl}
                      alt="Gallery Image"
                      width={400}
                      height={300}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Grid>
                ))}
              </Grid>
              <Stack spacing={2} alignItems="center" mt={4}>
                <Pagination
                  count={totalImagePages}
                  page={currentImagePage}
                  onChange={handleImagePageChange}
                  renderItem={(item) => <PaginationItem {...item} />}
                />
              </Stack>
            </div>
          </section>
        </div>
      </section>
      {/* \Photo & video gallery */}
    </main>
    </>
  );
}
