"use client"
import Image from 'next/image';
import { useState } from 'react';
// import "../../styles/pro.css"
import plusIcon from "../../Img/plusIcon.svg";
import minusIcon from "../../Img/minusIcon.svg"
import networkingBusinessCards from "../../_nuxt/card-img5.d3b90e5c.png"
import networkingHub from "../../_nuxt/icons-min1.52053dab.svg"
import syncCRM from "../../_nuxt/icons-min2.a143bfa1.svg"
import aiProfileCreation from "../../_nuxt/icons-min3.6d3bf29b.svg"
import followupText from "../../_nuxt/icons-min4.35cc0ef3.svg"
import scanContacts from "../../_nuxt/icons-min5.d42066b4.svg"

const AccordionItem = ({ question, answer, isOpen, onClick }) => (
  <div className={isOpen ? 'open accordion-group' : 'close accordion-group'}>
    <h4 onClick={onClick}>
      {question} <span><Image className="plus" src={plusIcon} alt="plus" height={50} width={70} /><Image className="minus" src={minusIcon} alt="minus" height={50} width={70} /></span>
    </h4>
    {isOpen && <div className="accordion-content">
      <p>{answer}</p>
    </div>}
  </div>
);
export default function Teams() {

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
    <main data-v-0a07a5aa>
       <section className="business-pro-module" data-v-0a07a5aa>
                    <div className="container container-xs" data-v-0a07a5aa>
                        <div className="text-animated-block" data-v-0a07a5aa>
                            <h1 data-v-0a07a5aa>PRO</h1>
                            <h2 data-v-0a07a5aa>FOR TEAMS</h2>
                            <h3 data-v-0a07a5aa>Seamless Lead Management Accross Your Organization</h3>
                            <p className='proPTag' data-v-0a07a5aa>Collect better data on your team's in-person business development, sync your tools, and empower employees to network effortlessly</p>
                        </div>
                    </div>
                </section>
                <section className="business-card" data-v-0a07a5aa>
                    <div className="container container-xs" data-v-0a07a5aa>
                        <div className="card-inner card-type-2 pro-page" data-v-0a07a5aa>
                            <div className="col" data-v-0a07a5aa><Image src={networkingBusinessCards} alt=""
                                    data-v-0a07a5aa  /></div>
                            <div className="col" data-v-0a07a5aa>
                                <div className="text-wrp" data-v-0a07a5aa>
                                    <p data-v-0a07a5aa>Networking with business cards has always been clunky. mTap Pro
                                        handles everything for you, including automatic follow ups with new connections
                                        and uploading contacts to your CRM.</p><a href="#" className="black-btn"
                                        data-v-0a07a5aa>START FREE TRIAL</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="business-card" data-v-0a07a5aa>
                    <div className="container container-xs" data-v-0a07a5aa>
                        <div className="row card-wrap" data-v-0a07a5aa>
                            <div className="col" data-v-0a07a5aa>
                                <h2 data-v-0a07a5aa>MTAP Pro <br data-v-0a07a5aa />enables <br data-v-0a07a5aa />you <br
                                        data-v-0a07a5aa />to<br data-v-0a07a5aa /></h2>
                            </div>
                            <div className="col" data-v-0a07a5aa>
                                <ul data-v-0a07a5aa>
                                    <li data-v-0a07a5aa>
                                        <div className="overlap-group" data-v-0a07a5aa>
                                            <p className="text-wrapper" data-v-0a07a5aa>Organize relationships with mTap
                                                Networking Hub</p><i data-v-0a07a5aa><Image className="vector"
                                                    src={networkingHub} data-v-0a07a5aa /></i>
                                        </div>
                                    </li>
                                    <li data-v-0a07a5aa>
                                        <div className="overlap-group" data-v-0a07a5aa>
                                            <p className="text-wrapper" data-v-0a07a5aa>Automatically sync new contacts with
                                                your CRM</p><i data-v-0a07a5aa><Image className="vector"
                                                    src={syncCRM} data-v-0a07a5aa /></i>
                                        </div>
                                    </li>
                                    <li data-v-0a07a5aa>
                                        <div className="overlap-group" data-v-0a07a5aa>
                                            <p className="text-wrapper" data-v-0a07a5aa>Build your profile with the help of
                                                AI-assisted profile creation</p><i data-v-0a07a5aa><Image className="vector"
                                                    src={aiProfileCreation} data-v-0a07a5aa /></i>
                                        </div>
                                    </li>
                                    <li data-v-0a07a5aa>
                                        <div className="overlap-group" data-v-0a07a5aa>
                                            <p className="text-wrapper" data-v-0a07a5aa>Set up automatic follow-up from your
                                                email or by text message</p><i data-v-0a07a5aa><Image className="vector"
                                                    src={followupText} data-v-0a07a5aa /></i>
                                        </div>
                                    </li>
                                    <li data-v-0a07a5aa>
                                        <div className="overlap-group" data-v-0a07a5aa>
                                            <p className="text-wrapper" data-v-0a07a5aa>Scan contacts from paper business
                                                cards with your camera.</p><i data-v-0a07a5aa><Image className="vector"
                                                    src={scanContacts} data-v-0a07a5aa /></i>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="btn-wrap row-block" data-v-0a07a5aa>
                    <div className="container container-xs" data-v-0a07a5aa>
                        <div className="flex-justify-end" data-v-0a07a5aa><a href="#" className="btn-inline btn-type1"
                                data-v-0a07a5aa>Explore all Features</a><a href="#" className="btn-inline btn-type2"
                                data-v-0a07a5aa>Start Free Trial</a></div>
                    </div>
                </section>
                <section className="what-plan-to-pick row-block" data-v-0a07a5aa>
                    <div className="container container-xs" data-v-0a07a5aa>
                        <div className="full-card flex-align" data-v-0a07a5aa>
                            <h2 data-v-0a07a5aa className='text-black'>Have a Team?</h2><a href="#" data-v-0a07a5aa>Explore mTap Pro Teams</a>
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
  )
}

