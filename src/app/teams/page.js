"use client";
import Image from "next/image";
import { useState } from "react";
import Video from "../ui/video"

import plusIcon from "../../Img/plus.baed9fac.svg";
import star from "../../Img/stars.jpg";
import followUpCard from "../../Img/image2.jpg";
import oneStopSolution from "../../Img/Web.svg";
import profileManagement from "../../Img/profileManagement.jpg";
import supportImage from "../../Img/image3.svg";
import followUpCard2 from "../../Img/image1.jpg";
import crmIntegration from "../../Img/image3.svg";
import ssoImage from "../../Img/image4.jpg";
import waveIcon from "../../Img/icon6.jpg";
import contactsIcon from "../../Img/icon3.jpg";
import timerIcon from "../../Img/icon5.jpg";
import messageIcon from "../../Img/icon2.jpg";
import cardIcon from "../../Img/icon4.jpg";
import contactIcon from "../../Img/icon1.jpg";
import lockIcon from "../../Img/lock.png";
import "./teams.css";
// import { motion, useScroll, useTransform } from 'framer-motion';

// const ParallaxVideo = () => {
//   const { scrollYProgress } = useScroll();
//   const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

//   return (
//     <motion.div style={{ y }}>
//       <video
//         autoPlay
//         loop
//         muted
//         style={{
//           width: '100%',
//           height: 'auto',
//           objectFit: 'cover',
//           position: 'absolute',
//           zIndex: -1,
//         }}
//       >
//         <source src="https://videos.pexels.com/video-files/5818973/5818973-hd_1280_720_24fps.mp4" type="video/mp4" />
//       </video>
//     </motion.div>
//   );
// };

const AccordionItem = ({ question, answer, isOpen, onClick }) => (
  <div className={isOpen ? "open accordion-group" : "close accordion-group"}>
    <h4 onClick={onClick}>
      {question}{" "}
      <span>
        <Image
          className="plus"
          src={plusIcon}
          alt="plus"
          height={50}
          width={50}
        />
        <Image
          className="minus"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAHCAYAAABKiB6vAAAABmJLR0QA/wD/AP+gvaeTAAAAeUlEQVQ4jdXTMQrCQBRF0ZNpItElZAcWWYpdlhVwOWltXYGtYCWkEQQLNcUYsNUUmXlwi9/dB+8Ts8UBD7wz4Yo9Vp8ONjgnIPYv3VRkl4DMHAYUAZW8UyIE8TfuC8vMSY/ndLS4WX4mv3JEDcVXszUa+UztghNeMAIXQcEonyf7xgAAAABJRU5ErkJggg=="
          alt="minus"
          width={50}
          height={50}
        />
      </span>
    </h4>
    {isOpen && (
      <div className="accordion-content">
        <p>{answer}</p>
      </div>
    )}
  </div>
);
export default function Teams() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const accordionData = [
    {
      question:
        "Will my gift recipient be able to make changes to their profile?",
      answer:
        "Yes, they will receive instructions for claiming their mTap account and making updates to their profile in the packaging of their new card.",
    },
    {
      question: "Does mTap work Internationally?",
      answer:
        "Yes, they will receive instructions for claiming their mTap account and making updates to their profile in the packaging of their new card.",
    },
    {
      question: "Can I add a custom logo or job title to a gifted card?",
      answer:
        "Yes, they will receive instructions for claiming their mTap account and making updates to their profile in the packaging of their new card.",
    },
    {
      question: "How does my gift recipient use their card?",
      answer:
        "Yes, they will receive instructions for claiming their mTap account and making updates to their profile in the packaging of their new card.",
    },
  ];

  return (
    <main data-v-0a07a5aa className="teamsContainerMain">
      <div className="business-pro-section">
        <div className="star-background">
          <Image
            src={star}
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
              <h1 data-v-0a07a5aa >PRO</h1>
              <h2 data-v-0a07a5aa>FOR TEAMS</h2>
              <h5 data-v-0a07a5aa>
                Seamless Lead Management Across Your Organization
              </h5>
              <p>
                Collect better data on your team&apos;s in-person business
                development, sync your tools, and empower employees to network
                effortlessly
              </p>
              <div className="btn-group">
                <button className="explore-btn">EXPLORE ALL FEATURES</button>
                <button className="trial-btn">START FREE TRIAL</button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section
        className="business-card"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        data-v-0a07a5aa
      >
        <div className="card__content teamsCardContent" >
          <div className="card-inner teamsCardInner" style={{ backgroundColor: "white",padding:'4rem' }}>
            <div className="col">
              {/* Next.js Image for optimized image loading */}
              <Image src={followUpCard} alt="followUpCard" width={500} height={300}   loading="lazy" />
            </div>
            <div className="col">
              <div className="text-wrp">
                <h2 style={{ color: "black" }}>
                  {" "}
                  Build a more complete picture of your sales pipeline
                </h2>
                <p style={{ color: "black" }}>
                  Knowing how your team is networking can be key to building a
                  more complete picture around your sales pipeline. mTap Pro
                  Teams allows your team to use the features of mTap Pro to
                  streamline their networking and contact management process,
                  while allowing you to manage company materials shown on their
                  profiles and track KPIs around networking success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="business-card" data-v-0a07a5aa>
      <div className="teamsHeading" data-v-0a07a5aa>
              <h2 data-v-0a07a5aa>
              Meeting with mTap means:
               
              </h2>
            </div>
      <div className="teamscontainer">
    <div className="teamscard-grid" >
      <div className="teamscard">
        <div className="teamsicon-container">
          <Image src={waveIcon} alt="Icon" className="teamsicon" loading="lazy" />
        </div>
        <h3 className="teamstitle">Waving goodbye to manual input errors that cause companies to lose between 10 and 20% of their new contacts</h3>
      </div>

      <div className="teamscard">
        <div className="teamsicon-container">
          <Image src={contactsIcon} alt="Icon" className="teamsicon" loading="lazy" />
        </div>
        <h3 className="teamstitle">Scheduling meetings automatically without the dreaded back-and-forth time selection</h3>
     
      </div>

      <div className="teamscard">
        <div className="teamsicon-container">
          <Image src={timerIcon} alt="Icon" className="teamsicon" loading="lazy" />
        </div>
        <h3 className="teamstitle">Spending your time continuing conversations, not manually inputting new contacts into your CRM</h3>
       
      </div>

      <div className="teamscard">
        <div className="teamsicon-container">
          <Image src={messageIcon} alt="Icon" className="teamsicon" loading="lazy" />
        </div>
        <h3 className="teamstitle">Promptly following up with every person you want to meet again</h3>
       
      </div>

      <div className="teamscard">
        <div className="teamsicon-container">
          <Image src={cardIcon} alt="Icon" className="teamsicon" loading="lazy" />
        </div>
        <h3 className="teamstitle">Throwing away paper business cards after you scan them <span style={{fontWeight:'400'}}>(Finally, a clean desk!)</span></h3>
       
      </div>
      <div className="teamscard">
        <div className="teamsicon-container">
          <Image src={contactIcon} alt="Icon" className="teamsicon" loading="lazy" />
        </div>
        <h3 className="teamstitle">Remembering the context of your relationship and action items for each new contact</h3>
       
      </div>
    </div>
  </div>
      </section>
      {/* Video section  */}
      <section
        className="business-card"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
         
        }}
        data-v-0a07a5aa
      >
        <div className="card__content teamsCardContent" >
   
            <video  controls preload="none" className="video1" poster="/images/nfc-card.jpeg">
        <source src="/videos/video1.mp4" type="video/mp4" />
      </video>
        </div>
      </section>
      {/* 1 */}
      <section
        className="business-card"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
         
        }}
        data-v-0a07a5aa
      >
        <div className="card__content teamsCardContent" >
          <div className="card-inner section1" style={{ backgroundColor: "#fce93b" , padding:'4rem'}}>
            <div className="col">
              {/* Next.js Image for optimized image loading */}
              <Image src={oneStopSolution} alt="oneStopSolution" width={500} height={300} loading="lazy" />
            </div>
            <div className="col">
              <div className="text-wrp">
                <h2 style={{ color: "black" }}>
  A One-Stop Solution
                </h2>
                <p style={{ color: "black" }}>
                mtApp’s intuitive admin dashboard allows you to create departments within your team and track in-limits that show up in different team profiles. Streamlined onboarding makes it easy for team members to use mtApp effectively from the start.
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 2 */}
      <section
        className="business-card"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        data-v-0a07a5aa
      >
        <div className="card__content teamsCardContent">
          <div className="card-inner  section2" style={{ backgroundColor: "white",padding:'4rem' }}>
            <div className="col">
              {/* Next.js Image for optimized image loading */}
              <Image src={profileManagement} alt="profileManagement" width={500} height={300} loading="lazy" />
            </div>
         

            <div className="col">
              <div className="text-wrp profilemanagement">
                <h2 style={{ color: "black" }}>
                Team Profile Management
                </h2>
                <p style={{ color: "black" }}>
                When your business evolves and updates its sales material or branding, it can be a challenge to ensure that everyone is using the most up-to-date versions while representing your organization. mtApp Pro keeps materials in your team’s profiles current, allowing you to manage and sync your brand presentation features without requiring action from each team member.


                </p>
              
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 3 */}
      <section
        className="business-card"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        data-v-0a07a5aa
      >
        <div className="card__content teamsCardContent" >
          <div className="card-inner  section1" style={{ backgroundColor: "#fce93b",padding:'4rem' }}>
            <div className="col">
              {/* Next.js Image for optimized image loading */}
              <Image src={supportImage} alt="supportImage" width={500} height={300} loading="lazy" />
            </div>
           

            <div className="col">
              <div className="text-wrp">
                <h2 style={{ color: "black" }}>
                Enterprise Support
                </h2>
                <p style={{ color: "black" }}>
                Get help 24/7 to take full advantage of mtApp Pro by using our extensive training video library for instructions to guide you through using all mtApp features.
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 4 */}
      <section
        className="business-card"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        data-v-0a07a5aa
      >
        <div className="card__content teamsCardContent" >
          <div className="card-inner  section2" style={{ backgroundColor: "white" ,padding:'4rem'}}>
            <div className="col">
              {/* Next.js Image for optimized image loading */}
              <Image src={followUpCard2} alt="followUpCard2" width={500} height={300} loading="lazy" />
            </div>
       

            <div className="col">
              <div className="text-wrp">
                <h2 style={{ color: "black" }}>
                Follow Up
                </h2>
                <p style={{ color: "black" }}>
                While exchanging information is easy, maintaining follow-up can be hard. A recent study found that only 40% of people who exchange business cards and information follow up. mtApp Pro helps you meet goals through immediate follow-up afterwards. mtApp Pro Team messaging allows you to set reminders and allow for last views completely customizable messages.
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 5 */}
      <section
        className="business-card"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        data-v-0a07a5aa
      >
        <div className="card__content teamsCardContent" >
          <div className="card-inner  section2" style={{ backgroundColor: "#fce93b",padding:'4rem' }}>
            <div className="col crmImage" >
              {/* Next.js Image for optimized image loading */}
              <Image src={crmIntegration} alt="crmIntegration" width={500} height={300} loading="lazy" />
            </div>
            <div className="col">
              <div className="text-wrp">
                <h2 style={{ color: "black" }}>
                CRM Integration
                </h2>
                <p style={{ color: "black" }}>
                CRM integration saves your sales reps the hassle of manually updating their new contacts into separate databases and ensures they follow up and organize properly. Integrate any of the following CRM platforms to get started: HubSpot, Salesforce, Zoho, Keap, Pipedrive.
                </p>
              
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 6 */}
      <section
        className="business-card"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        data-v-0a07a5aa
      >
        <div className="card__content teamsCardContent" >
          <div className="card-inner " style={{ backgroundColor: "white" ,padding:'4rem',height:'60vh'}}>
            <div className="col">
              {/* Next.js Image for optimized image loading */}
          
              <Image src={ssoImage} alt="ssoImage" width={500} height={300} loading="lazy" />
         
            </div>
            <div className="col ">
              <div className="text-wrp">
                <h2 style={{ color: "black" }}>
                Secure Single Sign-On


                </h2>
                <p style={{ color: "black" }}>
                SSO Login means secure and simple authentication across your business. No extra passwords necessary.
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 7 */}
      
      <section className="our-commitment row-block"   style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }} >
            <div className="cardDiv ">
                <div className=" wrap-col "  >
                    <div className="col-fix-full dataSecurity" style={{ marginBottom:'2rem'}}>
           
                            <Image
                                src={lockIcon}
                                alt="lockIcon"
                                sx={{marginBottom:'2rem'}}
                                height={80} width={80}
                                loading="lazy"
                            />
         
                        <h2>Data Security</h2>
                        <p >
                        Our high privacy standards keep your data safe and secure.
                        <br/>
                        <span className="datasecurityspan">  SOC 2 compliance in progress.</span>
                       
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="btn-wrap row-block" data-v-0a07a5aa>
        <div className="container container-xs" data-v-0a07a5aa>
          <div className="flex-justify-end" data-v-0a07a5aa>
            <a href="#" className="btn-inline btn-type1" data-v-0a07a5aa>
         SPEAK WITH US
            </a>
          
          </div>
        </div>
      </section>
        <section className="what-plan-to-pick row-block" data-v-0a07a5aa>
        <div className="container container-xs" data-v-0a07a5aa>
          <div className="full-card flex-align" data-v-0a07a5aa>
            <h2 data-v-0a07a5aa className="text-black">
Working Independently?
            </h2>
            <a href="#" data-v-0a07a5aa>
              Explore mTap Pro 
            </a>
          </div>
        </div>
      </section>
      <section className="btn-wrap row-block" data-v-0a07a5aa>
        <div className="container container-xs" data-v-0a07a5aa>
          <div className="flex-justify-end" data-v-0a07a5aa>
            <a href="#" className="btn-inline btn-type1" data-v-0a07a5aa>
              Explore all Features
            </a>
            <a href="#" className="btn-inline btn-type2" data-v-0a07a5aa style={{backgroundColor:'#007bff',color:'white'}}>
              Start Free Trial
            </a>
          </div>
        </div>
      </section>
     
      <section className="our-accordion row-block" data-v-0a07a5aa>
        <div className="container container-xs" data-v-0a07a5aa>
          <div className="accordion-wrap" data-v-0a07a5aa>
            {accordionData.map((item, index) => (
              <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => toggleAccordion(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
