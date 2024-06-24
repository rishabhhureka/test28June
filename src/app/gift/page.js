'use client'
import Image from 'next/image';
import React,{useState} from 'react';
import plusIcon from "../../Img/plus.baed9fac.svg"
import "./gift.css"

import giftImage from "../../Img/Giftsimage.png"
import Link from 'next/link';

const AccordionItem = ({ question, answer, isOpen, onClick }) => (
  <div className={isOpen ? 'open accordion-group' : 'close accordion-group'} style={{ backgroundColor:'white'}}>
    <h4 onClick={onClick} style={{color:'black'}}>
      {question} <span><Image className="plus" src={plusIcon} alt="plus"  /><Image className="minus" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAHCAYAAABKiB6vAAAABmJLR0QA/wD/AP+gvaeTAAAAeUlEQVQ4jdXTMQrCQBRF0ZNpItElZAcWWYpdlhVwOWltXYGtYCWkEQQLNcUYsNUUmXlwi9/dB+8Ts8UBD7wz4Yo9Vp8ONjgnIPYv3VRkl4DMHAYUAZW8UyIE8TfuC8vMSY/ndLS4WX4mv3JEDcVXszUa+UztghNeMAIXQcEonyf7xgAAAABJRU5ErkJggg==" alt="minus"  width={50} height={50}/></span>
    </h4>
    {isOpen && <div className="accordion-content">
      <p style={{color:'black'}}> {answer}</p>
    </div>}
  </div>
);
export default function Gifts() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
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
  return (
    <>

      <div className="page-wrapper giftContainerMain">


        <div className="container1" >

        <div className="giftsection section1" >
            <div className="giftLeftSide" >
              <div className='giftImage'>   <Image  src={giftImage} alt="cards" /></div>
             
            </div>
            <div className="giftRightSide">
              <h2 style={{color:'white', fontWeight:'900'}}>
A GIFT THEY’LL <br/>USE EVERY DAY. </h2>
              <div className="cta"> <Link href="https://mtap.io/shop-nfc/google-review-card"  className="lightredCta">SHOP NOW</Link></div>
            </div>
          </div>
          {/* <section className="section section1" >
            <div className="leftSide" >   
              <div className="video">   <Image className='elementar-video' src={giftImage} alt="cards" /></div>
             
            </div>
            <div className="rightSide">
              <h2>A Gift They'll Use everyday </h2>
              <div className="cta"> <Link href="https://mtap.io/shop-nfc/google-review-card"  className="lightredCta">SHOP NOW</Link></div>
            </div>
          </section> */}
        
          <section className="section section3">
            <h2 className="text-center">mTap’s <strong>Digital Business Card </strong> <br/> </h2>
            <h2 className='gifth2'>
will be the only gift they remember receiving one year from now - because they’ll still be using it!
</h2>
            <div className="cardsBlks">
              <div className="row row2">
                <h3 className="title"> WORKS ON <br /> ALL PHONES</h3>
              
                <div className="offerPrice">BOTH <br/>
                IOS & Android.
                </div>
             
              </div>

              <div className="row row1">
                <h3 className="title"> NO APPS <br /> REQUIRED!</h3>
              
                <div className="offerPrice">BUT WE HAVE AN<br/> AWESOME ONE</div>
                <div className="cardsCta"><Link href="https://mtap.io/shop-nfc/custom-google-review-card?v=147">BUY</Link></div>
              </div>
              <div className="row row3">
                <h3 className="title" > UNIQUELY <br/>
YOURS</h3>
              
                <div className="offerPrice">Your Name <br/>
Your Colors</div>
              
              </div>
            </div>
           
       
    
          </section>
        
          <div className="rightSide">
           
           <div className="ctaButton" > <Link href="https://mtap.io/shop-nfc/google-review-card"  className="lightredCtaButton">Prepare Your Gift</Link></div>
         </div>
       
         
          
       
        </div>
        <section className="our-accordion row-block">
        <h2 className="text-center faqCss" style={{fontSize:'80px'}}>FREQUENTLY ASKED QUESTIONS</h2>
      <div className="container container-xs" >
        <div className="accordion-wrap" >
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
          {/* <section className="section sectionClients">
         
          </section> */}
        </div>

    </>
  )
}
