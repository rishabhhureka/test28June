import Image from "next/image";
import liveEvent from "../../Img/liveEvent.jpg";
import EventsPage from "../../Img/eventsBackground.jpg";
import EventsImage from "../../Img/eventImage.jpg";
import "./events.css";
import Link from "next/link";
import Head from "next/head";

export default function Events() {
  return (
    <>
      <Head>
        <title>mTap Event</title>
        <meta property="og:site_name" content="mTap" />
        <meta
          name="description"
          content="Unleash the Power of Digital Business Cards for Modern
                Networking Websites! Join us for an unforgettable event to
                experience the revolutionary mtap technology."
        />
        <meta
          property="og:image"
          content="https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-04/Google-Review-Card-01.png"
        />
        <meta
          property="og:image:url"
          content="https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-04/Google-Review-Card-01.png"
        />
        <meta
          name="keywords"
          content="product, ecommerce, User engagement, SEO-friendly, Customizable colors,mTap, event"
        />
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
                <h1 data-v-0a07a5aa>Hyper Networking</h1>

                <p>
                  Unleash the Power of Digital Business Cards for Modern
                  Networking Websites! Join us for an unforgettable event to
                  experience the revolutionary mtap technology.
                </p>
              </div>
            </div>
          </section>
        </div>
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          data-v-0a07a5aa
        >
          <div>
            <div
              className="midHeadDiv1"
              style={{
                backgroundColor: "transparent",
                padding: "10rem",
                marginBottom: "4rem",
              }}
            >
              <div>
                <div
                  className="midHead"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: "65px",
                        lineHeight: "90px",
                        width: "80%",
                        fontWeight: "700",
                      }}
                    >
                      Welcome to the Future of Networking! Dive into the world
                      of mTap and revolutionise your networking experience.
                    </h3>
                  </div>
                  <div>
                    <h6 style={{ width: "100%", fontWeight: "600" }}>
                      Discover the magic of digital business cards that will
                      leave traditional paper cards in the dust!
                      <br />
                      <br />
                      Join us for an exclusive event where you can explore the
                      cutting-edge features of mTap and network like never
                      before!
                      <br /> <br />
                      Say goodbye to boring networking events and hello to a new
                      era of connection and innovation with mTap!
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="banner">
          <div className="overlay">
            <h3>Join the Revolution</h3>
            <p>
              Embrace the digital transformation and elevate your networking
              game with mTap!
            </p>
            <p>
              Do not miss out on the opportunity to be part of the networking
              revolution. Join us now!
            </p>
            <p>
              Experience networking like never before and leave a lasting
              impression with mTap&apos;s innovative technology!
            </p>
          </div>
        </div>
        {/* carousel Images                  */}
        <section>
          <div className="imageContainer">
            <Image
              src={EventsImage}
              alt="Star Background"
              quality={100}
              loading="lazy"
            />
            <Image
              src={EventsImage}
              alt="Star Background"
              quality={100}
              loading="lazy"
            />
            <Image
              src={EventsImage}
              alt="Star Background"
              quality={100}
              loading="lazy"
            />
            <Image
              src={EventsImage}
              alt="Star Background"
              quality={100}
              loading="lazy"
            />
          </div>
        </section>

        <section className="business-card" data-v-0a07a5aa>
          <div className="teamsHeading" data-v-0a07a5aa>
            <h2 data-v-0a07a5aa>Latest News</h2>
          </div>
          <div className="teamscontainer">
            <div className="teamscard-grid">
              <div className="teamscard">
                <div className="teamsicon-container">
                  <Image
                    src={liveEvent}
                    alt="Icon"
                    className="teamsicon"
                    loading="lazy"
                    width={1300}
                    height={1300}
                  />
                </div>
                <Link href="/eventdetails" className="linkTag">
                  <div>
                    <h3 className="teamstitle">Exciting Event Ahead!</h3>
                    <p
                      style={{
                        marginBottom: "0.5rem",
                        fontSize: "20px",
                        color: "white",
                      }}
                    >
                      26 May 2024
                    </p>
                    <p style={{ fontSize: "20px", color: "white" }}>
                      Join Us for an unforgettable experience at the HYPER mTap
                      event. Get ready to netowk like never before!
                    </p>
                  </div>
                </Link>
              </div>

              <div className="teamscard">
                <div className="teamsicon-container">
                  <Image
                    src={liveEvent}
                    alt="Icon"
                    className="teamsicon"
                    loading="lazy"
                  />
                </div>
                <Link href="/eventdetails" className="linkTag">
                  <div>
                    <h3 className="teamstitle">Exciting Event Ahead!</h3>
                    <p style={{ marginBottom: "0.5rem", fontSize: "20px" }}>
                      26 May 2024
                    </p>
                    <p style={{ fontSize: "20px" }}>
                      Join Us for an unforgettable experience at the HYPER mTap
                      event. Get ready to netowk like never before!
                    </p>
                  </div>{" "}
                </Link>
              </div>

              <div className="teamscard">
                <div className="teamsicon-container">
                  <Image
                    src={liveEvent}
                    alt="Icon"
                    className="teamsicon"
                    loading="lazy"
                  />
                </div>
                <Link href="/eventdetails" className="linkTag">
                  <div>
                    <h3 className="teamstitle">Exciting Event Ahead!</h3>
                    <p style={{ marginBottom: "0.5rem", fontSize: "20px" }}>
                      26 May 2024
                    </p>
                    <p style={{ fontSize: "20px" }}>
                      Join Us for an unforgettable experience at the HYPER mTap
                      event. Get ready to netowk like never before!
                    </p>
                  </div>{" "}
                </Link>
              </div>

              <div className="teamscard">
                <div className="teamsicon-container">
                  <Image
                    src={liveEvent}
                    alt="Icon"
                    className="teamsicon"
                    loading="lazy"
                  />
                </div>
                <Link href="/eventdetails" className="linkTag">
                  <div>
                    <h3 className="teamstitle">Exciting Event Ahead!</h3>
                    <p style={{ marginBottom: "0.5rem", fontSize: "20px" }}>
                      26 May 2024
                    </p>
                    <p style={{ fontSize: "20px" }}>
                      Join Us for an unforgettable experience at the HYPER mTap
                      event. Get ready to netowk like never before!
                    </p>
                  </div>{" "}
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          data-v-0a07a5aa
        >
          <div>
            <div style={{ backgroundColor: "transparent" }}>
              <div>
                <div className="endHead" style={{ display: "flex" }}>
                  <div className="endHead1" style={{ marginRight: "20rem" }}>
                    <h2
                      style={{
                        fontSize: "80px",
                        width: "100%",
                        fontWeight: "700",
                        marginBottom: "1rem",
                        color: "white",
                      }}
                    >
                      Digital <br /> Business <br /> Cards
                    </h2>
                    <p style={{ fontSize: "25px" }}>
                      {" "}
                      Revolutionize Your Networking Game with
                      <br /> Cutting Edge Digitial Business Cards
                    </p>
                  </div>
                  <div
                    className="card__content"
                    style={{ display: "flex", marginLeft: "2rem" }}
                  >
                    <video
                      controls
                      preload="none"
                      className="video1"
                      poster="/images/nfc-card.jpeg"
                    >
                      <source src="/videos/video1.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
