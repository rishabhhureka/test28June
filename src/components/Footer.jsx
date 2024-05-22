
import googlePlayIcon from "../Img/gplay.a3ac839e.png"
import Image from "next/image";
import linkedinIcon from "../Img/linkedin.png"
import youtubeIcon from "../Img/youtube.png"
import twitterIcon from "../Img/twitter.png"
import instagramIcon from "../Img/instagram.png"
import tiktokIcon from "../Img/tiktok.png"
import mtapLogo from "../Img/mtapLogo.png"
import appStore from "../Img/appStore.png"

const Footer = () => (
  <footer>
  <div className="row">
  <div className="column">
        <h3>Company</h3>
        <ul>
          {["About Us", "Careers", "Press", "Blog"].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      {/* Products Section */}
      <div className="column">
        <h3>Products</h3>
        <ul>
          {["Shop", "Pricing", "Features", "Integrations"].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      {/* Trust & Legal Section */}
      <div className="column">
        <h3>Trust & Legal</h3>
        <ul>
          {["Privacy Policy", "Terms of Service", "Compliance", "Security"].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      {/* Support Section */}
      <div className="column">
        <h3>Support</h3>
        <ul>
          {["Help Center", "Contact Us", "FAQs", "System Status"].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  {/* </div> */}
  {/* Social Media Icons Section */}
  <div className="row">
      <div className="column social">
          {/* Add your SVG images or placeholders with appropriate links */}
          {/* For example: */}
          <a href="#" target="_blank" aria-label="linkedinIcon">
            <Image src={linkedinIcon} alt="linkedinIcon" height={55} width={55}/>
         
          </a>
          <a href="#" target="_blank" aria-label="Tiktok">
          <Image src={tiktokIcon} alt="tiktokIcon" height={55} width={55}/>
         
                            </a><a href="#" target="_blank" aria-label="Twitter">
                            <Image src={twitterIcon} alt="twitterIcon" height={55} width={55}/>
                            </a>
                            
                            <a href="#" target="_blank" aria-label="Instagram">
                            <Image src={instagramIcon} alt="instagramIcon" height={55} width={55}/>
                              </a>
                              
                              <a href="#" target="_blank" aria-label="Facebook"><svg
                                xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="55" height="55"
                                viewBox="0,0,256,256" style={{ fill: '#000000' }}>
                               <g
        fill="#fff"
        fillRule="nonzero"
        stroke="none"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeDasharray=""
        strokeDashoffset="0"
        fontFamily="none"
        fontWeight="bold"
        fontSize="none"
        textAnchor="end"
        style={{ mixBlendMode: 'normal' }}
      >
        <g transform="scale(5.12, 5.12)">
          <path
            d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM37,19h-2c-2.14,0 -3,0.5 -3,2v3h5l-1,5h-4v15h-5v-15h-4v-5h4v-3c0,-4 2,-7 6,-7c2.9,0 4,1 4,1z"
          />
        </g>
      </g>
                            </svg></a>
                            <a href="#" target="_blank" aria-label="Youtube">    <Image src={youtubeIcon} alt="youtubeIcon" height={55} width={55}/></a>
          {/* Repeat for other social icons */}
      </div>
      <div className="column" style={{display:'flex', gap:8}}>
          {/* Additional App Store/Google Play links */}
          <a href="#" target="_blank" aria-label="dummy Link">
              <Image src={googlePlayIcon} className="app" alt="Google Play Icon" loading="lazy" />
          </a>
          <a href="#" target="_blank" aria-label="dummy Link">
              <Image src={appStore} className="app" alt="App Store Icon" loading="lazy"/>
          </a>
      </div>
      <div className="column"><button>Login</button><button className="green">Get started for free</button></div>
  </div>
  <div className="row">
                    <div className="copy">
                        <p className="mtapFooterImage"><Image src={mtapLogo}
                                alt="" height={70} width={80} loading="lazy" /></p><br /> © 2023 by mTap Corporation. All Rights Reserved
                    </div>
                </div>
</footer>
  );
  
  export default Footer;
  