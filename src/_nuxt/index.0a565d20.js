import{_ as m,o as c,c as l,a as s,F as h,u as g,v as _,t as C,p as v,f,b as u,s as p,x as w,y as b}from"./entry.76b89924.js";import{A}from"./Accordions.0cbfa5b7.js";import"./minus.c1d6528b.js";const y={data(){return{cards:[{id:1,type:1,image:"/Img/card-img1.png",title:"Make Follow Up Easy",description:"Use real-time personalized follow up emails and texts. Organize and contextualize your contacts with tags and shared notes. Connect your account with your CRM and email provider.",link:"#"},{id:2,type:2,image:"/Img/card-img2.png",title:"Create Your Profile in 60 Seconds",description:"Populate your profile automatically with information from profiles on other platforms",link:"#"},{id:3,type:3,image:"/Img/card-img3.png",title:"Custom Branding",description:"Customize your profile and digital business card by syncing your profile and digital business card with your brand colors",link:"#"},{id:4,type:4,image:"/Img/card-img4.png",title:"Connect Your Team",description:"Track your team’s networking efforts on the ground, and automatically upload new contacts directly to your CRM.",link:"#"}]}},mounted(){const t=this.$refs.cardsWrapper,o=t.querySelectorAll(".card__content"),i=o.length;t.style.setProperty("--numcards",i);const d=new ViewTimeline({subject:t,axis:"block"});o.forEach((a,r)=>{const e=r+1,n=i-e;a.animate({transform:["scale(1)",`scale(${1-.1*n})`],left:"0px"},{timeline:d,fill:"forwards",rangeStart:`exit-crossing ${CSS.percent(r/i*100)}`,rangeEnd:`exit-crossing ${CSS.percent(e/i*100)}`})})}},x=t=>(v("data-v-277c110e"),t=t(),f(),t),S={class:"business-card"},R={class:"container container-xs"},I=x(()=>s("h1",null,"Digital Business Card",-1)),k={ref:"cardsWrapper",class:"cards"},E=["id"],L={class:"card__content"},H={class:"col"},U=["src"],G={class:"col"},D={class:"text-wrp"},V=["href","aria-label"];function T(t,o,i,d,a,r){return c(),l("section",S,[s("div",R,[I,s("ul",k,[(c(!0),l(h,null,g(a.cards,(e,n)=>(c(),l("li",{key:e.id,class:"card",id:"card_"+e.id},[s("div",L,[s("div",{class:_(["card-inner",{"card-type-2":e.type===2,"card-type-3":e.type===3,"card-type-4":e.type===4}])},[s("div",H,[s("img",{src:e.image,alt:""},null,8,U)]),s("div",G,[s("div",D,[s("h2",null,C(e.title),1),s("p",null,C(e.description),1),s("a",{href:e.link,class:"black-btn","aria-label":"Read more about "+e.title},"Learn More",8,V)])])],2)])],8,E))),128))],512)])])}const F=m(y,[["render",T],["__scopeId","data-v-277c110e"]]),M=""+new URL("phone1.a2e0b1b8.png",import.meta.url).href,Z=""+new URL("card2.748b5db3.png",import.meta.url).href,B=""+new URL("img-list1.37c6710c.svg",import.meta.url).href,K=""+new URL("img-list2.5d15b163.png",import.meta.url).href,N=""+new URL("img-list3.27aae3d4.png",import.meta.url).href,P=""+new URL("img-list4.f167e2cb.png",import.meta.url).href,Y=""+new URL("block.787d9db8.png",import.meta.url).href,z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAA7CAYAAADFJfKzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQ+SURBVHgB7ZtBSBRRGMe/NaHIoK1EKcjGQiiIdL2FHdaDdnQ7FoKChyKIoKBuuR0LQr3ZIUy0PLp71cCNrGOu0qEI23EXDEVyDd0Kktf3zZtZZndnd2edmbezmz/4dmZnH7vz3++97/vevBkPOARjTMKNH60Vjfbb0LyqaSTRZHUbVW3R4/FEwe2gQD/aENoms0YMbYy+D9wEnpAXbdAGgYWE9zHeU6pWpJHoQRAN4901xspDDK0PnIZxbw4xd0Dn4S3l/D1mGzI+ZuaAR1a3IKN1YvSWzTSuMdMIhVLacJtQQkKbU8+vKEU9qxNaUpcRDOXpzmL5uaDYChGqUVRwXrEuHaPFkKHAGDYUq0a5BagsoRoymg8FJ7M/yBegKHlLUJlIwM8/hxzPolf7cTMGlQ9154j+gJHYGDjg1S8/lyAUn4T4zjKk/u7A4do6OH/0EnQ0dEP78cvgADJkdecMsYzXnkGwERI2FRuF+fXZvG26TwXgevMtcIDHKDaovUmLdSr6TsWew8zqtLJPnvShF5vqzikefr/+RtkSVxq6YKDlPtgMebU5J1jRWGU2825thvXPX1VsemXCsA0d19rMY3sHCGoa9dHY9unT7GpI2ZLXAk29hm3oePsJPmYLdXUL3NV2FLGMXxGQwEZorGpdtAPFFqLr5DVl+3lrCTb+rIHNeFV9ac/aPj9MpJbT+zRWC6H/fOO37WKJAL1oYv1Q3SjOrGG82JeguqGuLJFnTc0FqwB/LVgUS4Fo9vt0zlhL7W6n9198fQZmCScmMf82Zhw7fOAI9GDUpqrLAm0edC8VEn7YIyTEoZSRAQWxhxefggXC1I0tTcxFCCUoLVmklcRK8H/gtezZCsJbCwKhSimgBhqqlMI45RM1DAhTl1LtgOrjG2dvpiNq/cFGZZZTrLqyExKbBAHkq497TveCIJLCxNYfaizpuAPIJFbIwm98e9nweGL7Gwhii8SugADCiVdKtaWH3r+WR0EQUXGexbntYPQ2brknKRo/+fTAqSmdEQskNgKCIIEJdUJPFZE2uRfEYo26VCAkSJURmdaAtDw7DtVNhF40sSEQRGqXB6lfuimgABRnKuUiLRPgVI+6suN1cig+oaShjz8+gCBkbRlEXy6OgAAo3VA9nJ2GHCSo7ejFDkP1BSoZ7a32Ji1WXSIo2bu0lCECmjjsgXH9wnT2rIe8K0MJDLTcc7y+pT/0zoVHUCKyflGLMFqy9ANf4Kp0+lFsRkrNmc+qkUtIsHKQkWyhxP49FWrDTihx/LoAGfjtBYZZZf8+KD0VItjUHW5FL7ipX+DmLi2DCaHE/l2pRqhf6AP3pCU6D59ZoXuG8ZtNYqw8xFg5HpTAHw0ycaI31d8rX6DEH5eYs54uv0gjGH9Q4qUNwkngMLO5u5qOxqXCeH7WjJ7aOoZ2BnKf2NoCXprS9WtKHxGngs4//xYhEg+jSEIAAAAASUVORK5CYII=",q={},X={id:"slider"},W={class:"container"},O={class:"banner-wrap"},J=p('<div class="left-col-banner"><h2> A New<br>Way to<br><div class="ms-slider"><ul class="ms-slider__words"><li class="ms-slider__word network">Network</li><li class="ms-slider__word brand">brand</li><li class="ms-slider__word prospect">prospect</li><li class="ms-slider__word network">Network</li></ul></div></h2><a href="#" class="basic-btn" aria-label="Read more about Design Your Profile">DESIGN YOUR PROFILE</a></div>',1),Q={class:"right-col-banner",id:"rotateBox"},$={class:"slides_container slider-wrap slideshow",id:"followMouseElement"},j={class:"slide",id:"slide1"},s2={src:M,class:"card-a card1",ref:"card1",alt:""},e2={src:Z,class:"card-a card2",ref:"card2",alt:""},t2={class:"icons",ref:"icons"},i2=p('<span class="icon s1"><svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" fill="none"><path d="M54.5975 0.814453L20.5093 0.814453C15.2372 0.820093 10.1827 2.9169 6.45485 6.6448C2.72696 10.3727 0.630151 15.4272 0.624512 20.6992L0.624512 54.7874C0.630151 60.0594 2.72696 65.1139 6.45485 68.8418C10.1827 72.5697 15.2372 74.6665 20.5093 74.6722H54.5975C59.8695 74.6665 64.924 72.5697 68.6519 68.8418C72.3798 65.1139 74.4766 60.0594 74.4822 54.7874V20.6992C74.4766 15.4272 72.3798 10.3727 68.6519 6.6448C64.924 2.9169 59.8695 0.820093 54.5975 0.814453ZM37.5534 54.7874C34.1824 54.7874 30.8871 53.7878 28.0842 51.9149C25.2813 50.0421 23.0967 47.3802 21.8067 44.2658C20.5167 41.1514 20.1791 37.7244 20.8368 34.4182C21.4944 31.1119 23.1177 28.075 25.5014 25.6913C27.885 23.3077 30.922 21.6844 34.2282 21.0267C37.5345 20.3691 40.9615 20.7066 44.0759 21.9966C47.1903 23.2866 49.8522 25.4712 51.725 28.2741C53.5978 31.077 54.5975 34.3723 54.5975 37.7433C54.5928 42.2622 52.7955 46.5947 49.6002 49.7901C46.4048 52.9855 42.0723 54.7827 37.5534 54.7874ZM58.8585 20.6992C58.0157 20.6992 57.1919 20.4493 56.4912 19.9811C55.7905 19.5129 55.2443 18.8474 54.9218 18.0688C54.5993 17.2902 54.5149 16.4335 54.6793 15.6069C54.8437 14.7804 55.2496 14.0211 55.8455 13.4252C56.4414 12.8293 57.2006 12.4235 58.0272 12.2591C58.8537 12.0946 59.7105 12.179 60.4891 12.5015C61.2677 12.824 61.9332 13.3702 62.4014 14.0709C62.8696 14.7716 63.1195 15.5954 63.1195 16.4382C63.1195 17.5683 62.6706 18.6521 61.8715 19.4512C61.0724 20.2503 59.9886 20.6992 58.8585 20.6992ZM48.9161 37.7433C48.9161 39.9906 48.2497 42.1875 47.0011 44.0561C45.7526 45.9247 43.978 47.3811 41.9017 48.2411C39.8254 49.1011 37.5408 49.3261 35.3366 48.8877C33.1325 48.4493 31.1078 47.3671 29.5187 45.778C27.9296 44.1889 26.8474 42.1642 26.409 39.9601C25.9705 37.7559 26.1956 35.4712 27.0556 33.395C27.9156 31.3187 29.372 29.5441 31.2406 28.2955C33.1092 27.047 35.306 26.3806 37.5534 26.3806C40.5669 26.3806 43.4571 27.5777 45.588 29.7086C47.7189 31.8396 48.9161 34.7297 48.9161 37.7433Z" fill="#FCE93B"></path></svg></span><span class="icon s2"><svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" fill="none"><path d="M74.8323 37.8602C74.8207 46.8858 71.5092 55.5957 65.5216 62.3492C59.5339 69.1027 51.2834 73.4337 42.3242 74.5264C42.1247 74.549 41.9227 74.529 41.7315 74.4678C41.5403 74.4066 41.3642 74.3056 41.2149 74.1714C41.0656 74.0372 40.9464 73.8728 40.8653 73.6892C40.7841 73.5056 40.7428 73.3068 40.7441 73.106V46.3823H49.2661C49.6556 46.3831 50.041 46.3039 50.3985 46.1495C50.756 45.9952 51.078 45.7689 51.3444 45.4849C51.6108 45.2008 51.8159 44.865 51.9471 44.4984C52.0783 44.1317 52.1326 43.742 52.1068 43.3534C52.0441 42.6229 51.7071 41.9433 51.1636 41.4512C50.6201 40.9591 49.9105 40.691 49.1774 40.7009H40.7441V32.1789C40.7441 30.6721 41.3426 29.227 42.4081 28.1615C43.4736 27.0961 44.9186 26.4975 46.4254 26.4975H52.1068C52.4962 26.4983 52.8817 26.4191 53.2392 26.2647C53.5967 26.1104 53.9187 25.8841 54.1851 25.6001C54.4515 25.316 54.6566 24.9802 54.7878 24.6136C54.9189 24.2469 54.9733 23.8572 54.9475 23.4686C54.8847 22.7369 54.5467 22.0562 54.0017 21.564C53.4567 21.0717 52.7453 20.8044 52.0109 20.8161H46.4254C43.4119 20.8161 40.5217 22.0132 38.3908 24.1442C36.2598 26.2751 35.0627 29.1653 35.0627 32.1789V40.7009H26.5406C26.1512 40.7001 25.7658 40.7793 25.4083 40.9337C25.0507 41.088 24.7288 41.3143 24.4624 41.5983C24.196 41.8824 23.9908 42.2182 23.8597 42.5848C23.7285 42.9515 23.6741 43.3412 23.6999 43.7298C23.7628 44.4615 24.1008 45.1422 24.6458 45.6344C25.1908 46.1267 25.9022 46.394 26.6365 46.3823H35.0627V73.1131C35.0639 73.3136 35.0227 73.512 34.9418 73.6954C34.8608 73.8787 34.742 74.0429 34.5931 74.177C34.4441 74.3112 34.2685 74.4123 34.0777 74.4737C33.887 74.5352 33.6853 74.5555 33.4861 74.5335C24.2871 73.4132 15.8439 68.8802 9.82771 61.8316C3.81153 54.783 0.66085 45.7326 0.999304 36.4718C1.70948 17.2972 17.2409 1.70893 36.4298 0.963254C41.3977 0.770818 46.3535 1.58235 51.0006 3.3493C55.6477 5.11626 59.8907 7.80234 63.4758 11.2469C67.0609 14.6914 69.9144 18.8237 71.8657 23.3964C73.817 27.9692 74.826 32.8885 74.8323 37.8602Z" fill="#FCE93B"></path></svg></span><span class="icon s3"><svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" fill="none"><path d="M68.6046 0.0527344L6.01492 0.0527344C4.50585 0.0527344 3.05858 0.652211 1.9915 1.71929C0.924428 2.78636 0.324951 4.23363 0.324951 5.7427L0.324951 68.3324C0.324951 69.8414 0.924428 71.2887 1.9915 72.3558C3.05858 73.4229 4.50585 74.0223 6.01492 74.0223H68.6046C70.1137 74.0223 71.5609 73.4229 72.628 72.3558C73.6951 71.2887 74.2946 69.8414 74.2946 68.3324V5.7427C74.2946 4.23363 73.6951 2.78636 72.628 1.71929C71.5609 0.652211 70.1137 0.0527344 68.6046 0.0527344ZM25.9298 54.1074C25.9298 54.862 25.6301 55.5856 25.0965 56.1192C24.563 56.6527 23.8394 56.9524 23.0848 56.9524C22.3303 56.9524 21.6067 56.6527 21.0731 56.1192C20.5396 55.5856 20.2398 54.862 20.2398 54.1074V31.3476C20.2398 30.593 20.5396 29.8694 21.0731 29.3359C21.6067 28.8023 22.3303 28.5026 23.0848 28.5026C23.8394 28.5026 24.563 28.8023 25.0965 29.3359C25.6301 29.8694 25.9298 30.593 25.9298 31.3476V54.1074ZM23.0848 25.6576C22.2408 25.6576 21.4157 25.4073 20.7139 24.9384C20.0122 24.4695 19.4652 23.803 19.1422 23.0232C18.8192 22.2434 18.7347 21.3854 18.8994 20.5576C19.064 19.7298 19.4705 18.9694 20.0673 18.3726C20.6641 17.7757 21.4245 17.3693 22.2523 17.2046C23.0801 17.04 23.9381 17.1245 24.7179 17.4475C25.4977 17.7705 26.1642 18.3175 26.6331 19.0192C27.102 19.721 27.3523 20.5461 27.3523 21.3901C27.3523 22.5219 26.9027 23.6074 26.1024 24.4077C25.3021 25.208 24.2166 25.6576 23.0848 25.6576ZM57.2247 54.1074C57.2247 54.862 56.9249 55.5856 56.3914 56.1192C55.8578 56.6527 55.1342 56.9524 54.3797 56.9524C53.6251 56.9524 52.9015 56.6527 52.368 56.1192C51.8344 55.5856 51.5347 54.862 51.5347 54.1074V41.305C51.5347 39.4187 50.7853 37.6096 49.4515 36.2757C48.1176 34.9419 46.3086 34.1926 44.4222 34.1926C42.5359 34.1926 40.7268 34.9419 39.3929 36.2757C38.0591 37.6096 37.3098 39.4187 37.3098 41.305V54.1074C37.3098 54.862 37.01 55.5856 36.4765 56.1192C35.9429 56.6527 35.2193 56.9524 34.4648 56.9524C33.7102 56.9524 32.9866 56.6527 32.4531 56.1192C31.9195 55.5856 31.6198 54.862 31.6198 54.1074V31.3476C31.6233 30.6507 31.8825 29.9794 32.3481 29.4609C32.8138 28.9425 33.4536 28.613 34.146 28.5349C34.8385 28.4568 35.5356 28.6357 36.105 29.0374C36.6744 29.4392 37.0765 30.036 37.2351 30.7146C39.1597 29.409 41.4035 28.6523 43.7257 28.5258C46.0479 28.3992 48.3607 28.9077 50.4157 29.9964C52.4708 31.0852 54.1904 32.7131 55.39 34.7055C56.5896 36.6979 57.2239 38.9794 57.2247 41.305V54.1074Z" fill="#FCE93B"></path></svg></span>',3),o2=[i2],a2=p('<section class="how-it-works row-block"><h3>How It Works</h3><div class="container container-xs"><div class="list-wrpper"><div class="col-fix fix-type1"><div class="count"><span>1</span></div><h2>Create<br>Your<br>Profile.</h2></div><div class="col-fix fix-type2"><div class="count"><span>2</span></div><h2>Connect<br>Your<br>Card.</h2></div><div class="col-fix fix-type3"><div class="count"><span>3</span></div><h2>Exchange<br>your<br>Info.</h2></div></div><div class="btn-center"><a href="#" class="regular-btn" aria-label="Get Started Now">GET STARTED NOW</a></div></div></section><section class="our-products row-block"><h3>Our Products</h3><div class="container container-xs"><div class="list-wrpper wrap-col"><div class="col-fix-2"><h2>Black Metal Cards</h2><img src="'+B+'" alt="" srcset=""></div><div class="col-fix-2 type2"><h2>Custom Digital Business Cards</h2><img src="'+K+'" alt="" srcset=""></div><div class="col-fix-2 type3"><h2>Google Review Cards</h2><img src="'+N+'" alt="" srcset=""></div><div class="col-fix-2 type4"><h2>NFC Table Stands</h2><img src="'+P+'" alt="" srcset=""></div></div></div></section><section class="business-card getting-started row-block"><div class="container container-xs"><h1>Getting Started</h1><ul id="cards"><li class="card" id="card_1"><div id="firstTab" class="tabcontent"><p class="tab-title">Step 1. Create Account</p><div class="btn-center"><a href="#" class="regular-btn" aria-label="Setup your account">Set up your account online</a></div><p class="basic-text">Or</p><div class="apstores"><a href="#" aria-label="Gpay Button"><img src="'+w+'" alt=""></a><a href="#" aria-label="App Store"><img src="'+b+'" alt=""></a></div></div></li><li class="card" id="card_2"><div id="secondTab" class="tabcontent"><p class="tab-title">Step 2. Build and Personalize your Profile</p><p><img src="'+Y+'" alt=""></p><p>Create your mTap profile effortlessly using our AI-assisted profile creation tool. Select from various templates with unique designs, customize links, and synchronize interface colors with your brand seamlessly through AI-assisted color coordination.</p></div></li><li class="card" id="card_3"><div id="thirdTab" class="tabcontent"><p class="tab-title">Step 3. Capture Contacts</p><p>Share your profile easily using the QR code the mTap mobile app, an NFC-enabled business card or accessory, or Apple Airdrop. Only one person needs mTap for both sides to exchange information.</p></div></li><li class="card" id="card_4"><div id="fouthTab" class="tabcontent"><p class="tab-title">Step 4: Follow Up</p><p>Connect your account to Hubspot, Salesforce, Keap, Pipedrive, ZOHO, or Redtail to automatically upload your new contact each time you meet someone new. Connect your email address to set up a customized message for each new contact, or send that same message using SMS.</p></div></li></ul></div></section><section class="our-commitment row-block"><div class="container container-xs"><div class="list-wrpper wrap-col"><div class="col-fix-full"><i><img src="'+z+'" alt=""></i><h2>Our Commitment to<br>Information Security</h2><p>We prioritize your data&#39;s privacy and security. Employing a security-first approach, Partnering with reputable vendors, conducting regular infrastructure tests, and respecting your data ownership, we never share or sell your information without your consent.</p></div></div></div></section>',4),r2={class:"our-accordion row-block"},n2={class:"container container-xs"};function c2(t,o,i,d,a,r){const e=F,n=A;return c(),l("main",null,[s("section",X,[s("div",W,[s("div",O,[J,s("div",Q,[s("div",$,[s("div",j,[s("img",s2,null,512),s("img",e2,null,512),s("div",t2,o2,512)])])])])])]),u(e),a2,s("section",r2,[s("div",n2,[u(n)])])])}const C2=m(q,[["render",c2]]);export{C2 as default};
