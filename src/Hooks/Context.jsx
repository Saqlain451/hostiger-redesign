import React, { useContext } from "react";
import { useState } from "react";
import slider from "../assets/Img/slider1.webp";
import slider2 from "../assets/Img/sliders2.webp";
import slider3 from "../assets/Img/slider3.webp";
import slider4 from "../assets/Img/slider4.webp";
import other1 from "../assets/Img/other1.webp";
import other2 from "../assets/Img/other2.webp";
import other3 from "../assets/Img/other3.webp";
import vpshero from "../assets/Img/vpshero.webp";
import CountUp from 'react-countup';

import {
  featuresData,
  featuresDataVps,
  homeIconData,
  priceData,
  qnaDomain,
  qnaHosting,
  qnaVps,
  serviceData,
  tableData,
  tableDataDomain,
  tableDataVps,
} from "./data";
import Card3 from "../components/card3/Card3";
import Card4 from "../components/Card4/Card4";
import Faq from "../components/Faq/Faq";
import Features from "../components/features/Features";
import TableRow from "../components/TableHead/TableRow";
import domainImg from "../assets/Img/domain.webp";
import person1 from "../assets/Img/person1.webp";
import person2 from "../assets/Img/person2.webp";
import person3 from "../assets/Img/person3.webp";
import person4 from "../assets/Img/person4.webp";
import Homeicon from "../components/homeicon/Homeicon";
const appContext = React.createContext();
const AppProvider = ({ children }) => {
  const titleChange = (str) => {
    return (document.title = str);
  };

  // ===============================start navbar==============================
  const [show, setShow] = useState(false);
  const toggle = () => {
    show ? setShow(false) : setShow(true);
  };

  const [navbar, setNavbar] = useState(false);
  const scrollbar = () => {
    window.scrollY >= 10 ? setNavbar(true) : setNavbar(false);
  };
  // ============================== end navbar ===============================

  // ===============================start home ===============================
  const firstCurousel = {
    title: "Everything you need to create a website",
    content:
      "Join 1,278,620 website owners who are building their businesses online.",
    img: slider,
    class1: "col-md-6 order-1",
    class2: "col-md-6 order-2",
    path : "/domain",

  };

  const secondCarousel = {
    title: "Shared Hosting Service",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sapiente iusto nam omnis aspernatur. Delectus blanditiis, animi iusto soluta laborum eos, quae ea minima consectetur veniam dolor atque nihil ullam.",
    img: slider2,
    class1: "col-md-6 order-2",
    class2: "col-md-6 order-1",
    path : "/hosting",
  };

  const thirdCarousel = {
    title: "Vps hosting Service",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate illo, unde atque ullam modi repudiandae dignissimos voluptatibus hic veritatis recusandae fugit totam, ducimus earum veniam autem deserunt doloremque quo libero",
    img: slider3,
    class1: "col-md-6 order-1",
    class2: "col-md-6 order-2",
    path : "/vps",
  };

  const fourthCarousel = {
    title: "Dedicated Hosting Service",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae dolores voluptatum expedita velit doloribus autem blanditiis possimus omnis, totam minus placeat error quis vero neque hic aperiam nam dolorum voluptates.",
    img: slider4,
    class1: "col-md-6 order-2",
    class2: "col-md-6 order-1",
    path : "/hosting",
  };
  // ==========================end home carousel section=============
  // ==========================start home textbtn section=============

  const txtbtnHome = {
    title: "Get 20% off Today",
    content: "by register a doamain name",
    placeholder: "Enter your Domain",
    btnName: "Search",
  };
  //===============home icon features section======================
   const homeicons = homeIconData.map((element,index)=>{
    const {classname, icon,content} = element;
    return(
      <Homeicon key={index} classname={classname} icon={icon} content={content} />
    )
   })
  //==============price card section======================

  const priceCard = priceData.map((element, index) => {
    const { price, service, para1, para2, para3, para4, para5, para6,path } =
      element;
    return (
      <Card3
        key={index}
        price={price}
        service={service}
        para1={para1}
        para2={para2}
        para3={para3}
        para4={para4}
        para5={para5}
        para6={para6}
        path = {path}
      />
    );
  });
  // =========================title price================
  const titlePrice = {
    title1: "Popul",
    span: "er p",
    title2: "ricing",
  };

  const txtbtnHome2 = {
    title: "Subscribe to get Our Newsletter",
    content: "",
    placeholder: "Enter your email address",
    btnName: "Subscribe",
  };
  // =========================title service================
  const titleService = {
    title1: "Our Servic",
    span: "es I",
    title2: "ncluded",
  };

  //  =====================service card section==========
  const serviceCard = serviceData.map((element, index) => {
    const { icon, title } = element;
    return <Card4 key={index} icon={icon} title={title} />;
  });
  // ======================other service hero===========
  const otheTitle = {
    title1: "Our Ot",
    span: "he",
    title2: "r Services",
  };
  const otherHero = {
    class1: "col-md-6",
    class2: "col-md-6",
    span: "Website",
    title: "Design & Developement",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis dolores ducimus pariatur optio sint autem odio, provident quia debitis in.",
    img: other1,
  };

  const otherSeo = {
    class1: "col-md-6 order-lg-2 order-md-2 order-sm-1",
    class2: "col-md-6 order-lg-1 order-md-1 order-sm-2",
    span: "Website",
    title: "SEO Services",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis dolores ducimus pariatur optio sint autem odio, provident quia debitis in.",
    img: other2,
 
  };

  const otherInternet = {
    class1: "col-md-6",
    class2: "col-md-6",
    span: "Internet",
    title: "Marketing",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis dolores ducimus pariatur optio sint autem odio, provident quia debitis in.",
    img: other3,
  };
  // ============================ footer mid =================================

  const firstMid = {
    title: "Pages",
    list1: "home",
    list2: "shared",
    list3: "vps",
    list4: "contact",
    list5: "domain",
    listPath1: "/",
    listPath2: "/hosting",
    listPath3: "/vps",
    listPath4: "/contact",
    listPath5: "/domain",
  };
  const secondMid = {
    title: "Company",
    list1: "About us",
    list2: "privacy policy",
    list3: "Acceptable usage policy",
    list4: "terms & condition",
    list5: "DMCA policy",
    listPath1: "/",
    listPath2: "/",
    listPath3: "/",
    listPath4: "/",
    listPath5: "/",
  };

  const thirdMid = {
    title: "ADD-on Services",
    list1: "SSL cirtificates",
    list2: "Dedicated IPs",
    list3: "control pannel licenses",
    list4: "WHMCS license",
    list5: "transfer",
    listPath1: "/",
    listPath2: "/",
    listPath3: "/",
    listPath4: "/",
    listPath5: "/",
  };

  // ================================= hosting features====================================

  const hostTitle = {
    title1: "Hostin",
    span: "g Fe",
    title2: "atures",
  };
  const hostingFeatures = featuresData.map((element, index) => {
    const { width, height, img, title, content } = element;
    return (
      <Features
        key={index}
        width={width}
        height={height}
        img={img}
        title={title}
        content={content}
      />
    );
  });
  // ===============hosting table header============
  const hostTableHeader = {
    th1: "server",
    th2: "cpu",
    th3: "ram",
    th4: "hdd",
    th5: "ip assignments",
    th6: "bandwidth",
    th7: "cost",
    th8: "cupon",
  };
  // ==========================hosting table row==========
  const tableRow = tableData.map((element, index) => {
    const { td1, td2, td3, td4, td5, td6, td7, td8 } = element;
    return (
      <TableRow
        key={index}
        td1={td1}
        td2={td2}
        td3={td3}
        td4={td4}
        td5={td5}
        td6={td6}
        td7={td7}
        td8={td8}
      />
    );
  });

  // ================================faq==========================
  const titleFaq = {
    title1: "Frequently A",
    span: "sk",
    title2: "ed Questions",
  };
  const faqHosting = qnaHosting.map((element, index) => {
    const { ques, ans } = element;
    return <Faq key={index} question={ques} answer={ans} />;
  });

  const faqDomain = qnaDomain.map((element, index) => {
    const { ques, ans } = element;
    return <Faq key={index} question={ques} answer={ans} />;
  });

  const faqVps = qnaVps.map((element, index) => {
    const { ques, ans } = element;
    return <Faq key={index} question={ques} answer={ans} />;
  });

  // ======================Domain================================
  const domainHero = {
    title: "Premium Quality Domain Name",
    content: "Looking For a premium quality domain name ?",
    img: domainImg,
    class1: "col-md-6",
    class2: "col-md-6",
  };
  // ==============domain table====================
  const domainTableHeader = {
    th1: "Domain",
    th2: "1 year",
    th3: "2 year",
    th4: "10 year",
    th5: "renew",
    th6: "transfer",
    th7: "Whois privacy",
    th8: "cancel access",
  };

  const tableRowDomain = tableDataDomain.map((element, index) => {
    const { td1, td2, td3, td4, td5, td6, td7, td8 } = element;
    return (
      <TableRow
        key={index}
        td1={td1}
        td2={td2}
        td3={td3}
        td4={td4}
        td5={td5}
        td6={td6}
        td7={td7}
        td8={td8}
      />
    );
  });

  // =============================================vps===================
  const vpsHero = {
    title: "Enjoy Complete Control with the Best VPS Hosting",
    content:
      "Adopt virtual private server hosting and get the swiftness, flexibility, and power you need",
    img: vpshero,
    class1: "col-md-6",
    class2: "col-md-6",
  };

  // ===========================vpsfeature title================

  const vpsfeatureTitle = {
    title1: "Vp",
    span: "s Fe",
    title2: "atures",
  };

  const vpsFeature = featuresDataVps.map((element, index) => {
    const { width, height, img, title, content } = element;
    return (
      <Features
        key={index}
        width={width}
        height={height}
        img={img}
        title={title}
        content={content}
      />
    );
  });

  const vpsTableHeader = {
    th1: "Plan Features",
    th2: "vps1",
    th3: "vps2",
    th4: "vps3",
    th5: "vps4",
  };

  const tableRowVps = tableDataVps.map((element, index) => {
    const { td1, td2, td3, td4, td5 } = element;
    return (
      <TableRow key={index} td1={td1} td2={td2} td3={td3} td4={td4} td5={td5} />
    );
  });
  // =============================testimonial data=================================

  const testTitle = {
    title1: "Loved By ",
    span: <CountUp  end={41169} duration={4} enableScrollSpy={true}  scrollSpyOnce={true} />,
    title2: " Peoples",
  }
  const testData1 = {
    name: "anna johnson",
    job: "web designer",
    img: person1,
    content:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  };

  const testData2 = {
    name: "peter jones",
    job: "intern",
    img: person2,
    content:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  };

  const testData3 = {
    name: "bill anderson",
    job: "the boss",
    img: person3,
    content:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  };

  const testData4 = {
    name: "susan smith",
    job: "web developer",
    img: person4,
    content:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  };

  return (
    <appContext.Provider
      value={{
        show,
        toggle,
        navbar,
        scrollbar,
        titleChange,
        firstCurousel,
        secondCarousel,
        thirdCarousel,
        fourthCarousel,
        txtbtnHome,
        priceCard,
        titlePrice,
        txtbtnHome2,
        titleService,
        serviceCard,
        otherHero,
        otherSeo,
        otherInternet,
        otheTitle,
        firstMid,
        secondMid,
        thirdMid,
        hostTitle,
        faqHosting,
        titleFaq,
        hostingFeatures,
        hostTableHeader,
        tableRow,
        domainHero,
        domainTableHeader,
        tableRowDomain,
        faqDomain,
        vpsHero,
        vpsFeature,
        vpsfeatureTitle,
        faqVps,
        vpsTableHeader,
        tableRowVps,
        testTitle,
        testData1,
        testData2,
        testData3,
        testData4,
        homeicons
      }}
    >
      {children}
    </appContext.Provider>
  );
};

const useGlobalHook = () => useContext(appContext);
export { AppProvider, useGlobalHook };
