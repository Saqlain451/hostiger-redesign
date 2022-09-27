import { ImHome } from "react-icons/im";
import { RiPagesFill, RiCustomerService2Fill } from "react-icons/ri";
import { GrMail } from "react-icons/gr";
import { AiOutlineGoogle } from "react-icons/ai";
import {
  FaLaptopCode,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import { FcTreeStructure } from "react-icons/fc";
import { DiCss3Full, DiCss3 } from "react-icons/di";
import { BiCodeAlt } from "react-icons/bi";
import { MdSettingsSuggest } from "react-icons/md";
import data from "../assets/Img/data.webp";
import dataPro from "../assets/Img/datapro.webp";
import fire from "../assets/Img/fire.webp";
import lock from "../assets/Img/lock.webp";
import control from "../assets/Img/control.svg";
import dataCenter from "../assets/Img/data center.svg";
import performance from "../assets/Img/performance.svg";
import security from "../assets/Img/security.svg";
import { HiMail } from "react-icons/hi";
import { FaHome } from "react-icons/fa";
import { BsFillTelephoneFill, BsPerson } from "react-icons/bs";
import { GiRotaryPhone } from "react-icons/gi";
import { IoMdChatboxes } from "react-icons/io";
import { TbTicket } from "react-icons/tb";
import { SiSemanticuireact } from "react-icons/si";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { RiCupLine } from "react-icons/ri";

import CountUp from "react-countup";

const priceData = [
  {
    price: "₹999",
    service: "Shared Hosting",
    para1: "2GB RAM",
    para2: "20GB SSD Cloud Storage",
    para3: "Weekly Backups",
    para4: "DDoS Protection",
    para5: "Full Root Access",
    para6: "24/7 Tech Support",
    path: "/hosting",
  },
  {
    price: "₹1999",
    service: "Reseller Hosting",
    para1: "4GB RAM",
    para2: "50Gb SSD Cloud Storage",
    para3: "Weekly Backups",
    para4: "DDoS Protection",
    para5: "Full Root Access",
    para6: "24/7 Tech Support",
    path: "/domain",
  },
  {
    price: "₹2,999",
    service: "Cloud Vps",
    para1: "8Gb RAM",
    para2: "80Gb SSD Cloud Storage",
    para3: "Weekly Backups",
    para4: "DDoS Protection",
    para5: "Full Root Access",
    para6: "24/7 Tech Support",
    path: "/vps",
  },
];

const serviceData = [
  {
    title: "8 Real Home Pages",
    icon: <ImHome />,
  },
  {
    title: "40+ inner Pages",
    icon: <RiPagesFill />,
  },
  {
    title: "Google Fonts",
    icon: <AiOutlineGoogle />,
  },
  {
    title: "Active Contact Form",
    icon: <GrMail />,
  },
  {
    title: "Fully Resposive",
    icon: <FaLaptopCode />,
  },
  {
    title: "Easy to customize",
    icon: <FcTreeStructure />,
  },
  {
    title: "ITCSS Architecture",
    icon: <DiCss3Full />,
  },
  {
    title: "SCSS Supported",
    icon: <DiCss3 />,
  },
  {
    title: "Clean Code",
    icon: <BiCodeAlt />,
  },
  {
    title: "24/7 Chat Support",
    icon: <RiCustomerService2Fill />,
  },
  {
    title: "WHMCS Template Included",
    icon: <MdSettingsSuggest />,
  },
  {
    title: "Bootstrap V5.2 Ready",
    icon: <FaBootstrap />,
  },
];

const featuresData = [
  {
    width: "65px",
    height: "47px",
    img: fire,
    title: "Firewall",
    content:
      "Lorem ipsum dolor sit amet, placeat necessitatibus adipisicing elit.",
  },
  {
    width: "42px",
    height: "54px",
    img: lock,
    title: "Data Encryption",
    content:
      "Lorem ipsum dolor sit amet, placeat necessitatibus adipisicing elit.",
  },
  {
    width: "55px",
    height: "54px",
    img: data,
    title: "Data Analysis",
    content:
      "Lorem ipsum dolor sit amet, placeat necessitatibus adipisicing elit.",
  },
  {
    width: "44px",
    height: "54px",
    img: dataPro,
    title: "Data Protection",
    content:
      "Lorem ipsum dolor sit amet, placeat necessitatibus adipisicing elit.",
  },
];

const featuresDataVps = [
  {
    width: "",
    height: "",
    img: control,
    title: "Flexibility",
    content:
      "VPS hosting is a highly flexible web hosting that offers complete control over your operating system. The full root access allows you to configure the server environment freely.",
  },
  {
    width: "",
    height: "",
    img: performance,
    title: "Performance",
    content:
      "The CPU, disk space, RAM, and all other resources are yours only. No need to worry about your website’s performance being affected by other people’s site traffic. ",
  },
  {
    width: "",
    height: "",
    img: dataCenter,
    title: "Manifold Data",
    content:
      "Our data centers are located in Singapore, the Netherlands, Lithuania, the United Kingdom, and the United States. This ensures minimum latency and maximum dependability",
  },

  {
    width: "",
    height: "",
    img: security,
    title: "Security",
    content:
      "BitNinja’s full-stack server protection and the built-in advanced DDoS protection keep your virtual server secure. The live snapshots and automated backups enable.",
  },
];

const qnaHosting = [
  {
    ques: "what is a dedicated hosting",
    ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates illum aspernatur odio similique voluptatibus itaque magni dicta quasi nesciunt. Possimus animi in, voluptatem facere sint aut quibusdam expedita. Voluptates, laudantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt aliquam cumque praesentium iusto delectus rem officia quas quos tempore quaerat laudantium incidunt minus, quae veniam itaque expedita voluptatum perspiciatis adipisci!",
  },
  {
    ques: "how do i transfer webpage to a server?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates illum aspernatur odio similique voluptatibus itaque magni dicta quasi nesciunt. Possimus animi in, voluptatem facere sint aut quibusdam expedita. Voluptates, laudantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt aliquam cumque praesentium iusto delectus rem officia quas quos tempore quaerat laudantium incidunt minus, quae veniam itaque expedita voluptatum perspiciatis adipisci!",
  },
  {
    ques: "purchased a hosting now what do i do?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates illum aspernatur odio similique voluptatibus itaque magni dicta quasi nesciunt. Possimus animi in, voluptatem facere sint aut quibusdam expedita. Voluptates, laudantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt aliquam cumque praesentium iusto delectus rem officia quas quos tempore quaerat laudantium incidunt minus, quae veniam itaque expedita voluptatum perspiciatis adipisci!",
  },
  {
    ques: "how do i purchase a dedicated hosting for my hosting account?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates illum aspernatur odio similique voluptatibus itaque magni dicta quasi nesciunt. Possimus animi in, voluptatem facere sint aut quibusdam expedita. Voluptates, laudantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt aliquam cumque praesentium iusto delectus rem officia quas quos tempore quaerat laudantium incidunt minus, quae veniam itaque expedita voluptatum perspiciatis adipisci!",
  },
  {
    ques: "What kind of web hosting plan do i need?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates illum aspernatur odio similique voluptatibus itaque magni dicta quasi nesciunt. Possimus animi in, voluptatem facere sint aut quibusdam expedita. Voluptates, laudantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt aliquam cumque praesentium iusto delectus rem officia quas quos tempore quaerat laudantium incidunt minus, quae veniam itaque expedita voluptatum perspiciatis adipisci!",
  },
];

const tableData = [
  {
    td1: "Intel® i5-4590 New (Quad-Core, 4x 3,7 Ghz)",
    td2: "3.7 GHz",
    td3: "32 GB DDR3",
    td4: "2x 256 SSD (96,000 IOPS)",
    td5: "1 usable IPv4 (up to 3 more)",
    td6: "1,000 Mbit/s Unlimited/MONTH	",
    td7: "$224.99/mo	",
    td8: "10offall",
  },
  {
    td1: "Intel® i5-4590 New (Quad-Core, 4x 3,7 Ghz)",
    td2: "3.7 GHz",
    td3: "32 GB DDR3",
    td4: "2x 256 SSD (96,000 IOPS)",
    td5: "1 usable IPv4 (up to 3 more)",
    td6: "1,000 Mbit/s Unlimited/MONTH",
    td7: "$224.99/mo",
    td8: "10offall",
  },
  {
    td1: "Intel® i5-4590 New (Quad-Core, 4x 3,7 Ghz)",
    td2: "3.7 GHz",
    td3: "32 GB DDR3",
    td4: "2x 256 SSD (96,000 IOPS)",
    td5: "1 usable IPv4 (up to 3 more)",
    td6: "1,000 Mbit/s Unlimited/MONTH",
    td7: "$224.99/mo",
    td8: "10offall",
  },
  {
    td1: "Intel® i5-4590 New (Quad-Core, 4x 3,7 Ghz)",
    td2: "3.7 GHz",
    td3: "32 GB DDR3",
    td4: "2x 256 SSD (96,000 IOPS)",
    td5: "1 usable IPv4 (up to 3 more)",
    td6: "1,000 Mbit/s Unlimited/MONTH",
    td7: "$224.99/mo",
    td8: "10offall",
  },
];

const tableDataDomain = [
  {
    td1: ".com",
    td2: "₹ 792.34",
    td3: "₹ 1477.18",
    td4: "₹ 7166.13",
    td5: "₹ 712.71",
    td6: "₹ 714.72",
    td7: "₹ 159.27",
    td8: "₹ 159.27",
  },
  {
    td1: ".net",
    td2: "₹ 792.34",
    td3: "₹ 1477.18",
    td4: "₹ 7166.13",
    td5: "₹ 712.71",
    td6: "₹ 714.72",
    td7: "₹ 159.27",
    td8: "₹ 159.27",
  },
  {
    td1: ".org",
    td2: "₹ 792.34",
    td3: "₹ 1477.18",
    td4: "₹ 7166.13",
    td5: "₹ 712.71",
    td6: "₹ 714.72",
    td7: "₹ 159.27",
    td8: "₹ 159.27",
  },
  {
    td1: ".edu",
    td2: "₹ 792.34",
    td3: "₹ 1477.18",
    td4: "₹ 7166.13",
    td5: "₹ 712.71",
    td6: "₹ 714.72",
    td7: "₹ 159.27",
    td8: "₹ 159.27",
  },
  {
    td1: ".guru",
    td2: "₹ 792.34",
    td3: "₹ 1477.18",
    td4: "₹ 7166.13",
    td5: "₹ 712.71",
    td6: "₹ 714.72",
    td7: "₹ 159.27",
    td8: "₹ 159.27",
  },
  {
    td1: ".biz",
    td2: "₹ 792.34",
    td3: "₹ 1477.18",
    td4: "₹ 7166.13",
    td5: "₹ 712.71",
    td6: "₹ 714.72",
    td7: "₹ 159.27",
    td8: "₹ 159.27",
  },
  {
    td1: ".us",
    td2: "₹ 792.34",
    td3: "₹ 1477.18",
    td4: "₹ 7166.13",
    td5: "₹ 712.71",
    td6: "₹ 714.72",
    td7: "₹ 159.27",
    td8: "₹ 159.27",
  },
];

const qnaDomain = [
  {
    ques: "what is domain",
    ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates illum aspernatur odio similique voluptatibus itaque magni dicta quasi nesciunt. Possimus animi in, voluptatem facere sint aut quibusdam expedita. Voluptates, laudantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt aliquam cumque praesentium iusto delectus rem officia quas quos tempore quaerat laudantium incidunt minus, quae veniam itaque expedita voluptatum perspiciatis adipisci!",
  },
  {
    ques: "how do i transfer my domain name ",
    ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates illum aspernatur odio similique voluptatibus itaque magni dicta quasi nesciunt. Possimus animi in, voluptatem facere sint aut quibusdam expedita. Voluptates, laudantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt aliquam cumque praesentium iusto delectus rem officia quas quos tempore quaerat laudantium incidunt minus, quae veniam itaque expedita voluptatum perspiciatis adipisci!",
  },

  {
    ques: "purchased a hosting now what do i do?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates illum aspernatur odio similique voluptatibus itaque magni dicta quasi nesciunt. Possimus animi in, voluptatem facere sint aut quibusdam expedita. Voluptates, laudantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt aliquam cumque praesentium iusto delectus rem officia quas quos tempore quaerat laudantium incidunt minus, quae veniam itaque expedita voluptatum perspiciatis adipisci!",
  },

  {
    ques: "how do i purchase a domain for my business?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates illum aspernatur odio similique voluptatibus itaque magni dicta quasi nesciunt. Possimus animi in, voluptatem facere sint aut quibusdam expedita. Voluptates, laudantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt aliquam cumque praesentium iusto delectus rem officia quas quos tempore quaerat laudantium incidunt minus, quae veniam itaque expedita voluptatum perspiciatis adipisci!",
  },
  {
    ques: "What kind of domain extension do i need?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates illum aspernatur odio similique voluptatibus itaque magni dicta quasi nesciunt. Possimus animi in, voluptatem facere sint aut quibusdam expedita. Voluptates, laudantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt aliquam cumque praesentium iusto delectus rem officia quas quos tempore quaerat laudantium incidunt minus, quae veniam itaque expedita voluptatum perspiciatis adipisci!",
  },
];

const qnaVps = [
  {
    ques: "What is VPS?",
    ans: "A Virtual Private Server (VPS) is one of the most flexible web hosting options. You’ll get a private partition on a physical server with dedicated resources. You can configure, control, and customize your virtual server according to your preference. Hence, it is an outstanding choice for professionals looking for power and flexibility for their projects.",
  },
  {
    ques: "What is a self-managed service?",
    ans: "We don’t offer fully managed VPS hosting. Instead, we provide self-managed VPS hosting plans, meaning you are entirely responsible for your VPS configuration and management. On the one hand, you’ll enjoy unparalleled flexibility and freedom with unmanaged VPS. On the other hand, you’ll need to have some technical expertise to exploit your hosting account fully. Despite not offering fully managed hosting, the Hostinger team takes care of the VPS back-end, supervises the physical servers, and assures uptime, speed, and stability.",
  },
  {
    ques: "Can VPS services be used for my website?",
    ans: "Yes, especially if you require high flexibility and power. VPS solutions offer dedicated resources. No need to share your CPU power, disk space, or RAM. There is an allocated amount of resources that you control entirely.",
  },
  {
    ques: "how do i purchase a dedicated hosting for my hosting account?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates illum aspernatur odio similique voluptatibus itaque magni dicta quasi nesciunt. Possimus animi in, voluptatem facere sint aut quibusdam expedita. Voluptates, laudantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt aliquam cumque praesentium iusto delectus rem officia quas quos tempore quaerat laudantium incidunt minus, quae veniam itaque expedita voluptatum perspiciatis adipisci!",
  },
  {
    ques: "Will I get a dedicated IP address for VPS plans?",
    ans: "Yes, all VPS hosting plans have a dedicated IP address. With a dedicated IP, you can access your website directly via FTP, generate a domain-based email address that won’t be regarded as spam, and other cutting-edge safety features.",
  },
];

const tableDataVps = [
  {
    td1: "price",
    td2: "₹ 249/mo",
    td3: "₹ 429/mo",
    td4: "₹ 779/mo",
    td5: "₹ 1,135/mo",
  },
  {
    td1: "vCPU",
    td2: "1 core",
    td3: "2 core",
    td4: "3 core",
    td5: "4 core",
  },
  {
    td1: "memory (ram)",
    td2: "1 GB",
    td3: "2 GB",
    td4: "3 GB",
    td5: "4 GB",
  },
  {
    td1: "SSD Storage",
    td2: "20 GB",
    td3: "40 GB",
    td4: "60 GB",
    td5: "80 GB",
  },
  {
    td1: "Multi-Core Geekbench Score",
    td2: "608",
    td3: "991",
    td4: "1 407",
    td5: "1 770",
  },
  {
    td1: "Bandwidth",
    td2: "1 TB",
    td3: "2 TB",
    td4: "3 TB",
    td5: "4 TB",
  },
  {
    td1: "Inode Limit",
    td2: "1 310 720",
    td3: "2 621 440",
    td4: "3 932 160",
    td5: "5 242 880",
  },
];

const address = [
  {
    icon: <FaHome />,
    content: "Namkhana, Kolkata 700144",
  },
  {
    icon: <HiMail />,
    content: "jobs.sakil.mustak@gmail.com",
  },
  {
    icon: <BsFillTelephoneFill />,
    content: "+91 9845207684",
  },
  {
    icon: <GiRotaryPhone />,
    content: "+91-212-9876543",
  },
];

const contactData = [
  {
    icon: <HiMail />,
    title: "Email Support",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae reprehenderit impedit aut facilis!",
    btnText: "send mail",
  },
  {
    icon: <IoMdChatboxes />,
    title: "Live Chat",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae reprehenderit impedit aut facilis!",
    btnText: "start chat",
  },
  {
    icon: <RiCustomerService2Fill />,
    title: "Call Support",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae reprehenderit impedit aut facilis!",
    btnText: "Call Us",
  },
  {
    icon: <TbTicket />,
    title: "Support Ticket",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae reprehenderit impedit aut facilis!",
    btnText: "submit ticket",
  },
];

const homeIconData = [
  {
    classname: "html",
    icon: <FaHtml5 />,
    content: "HTML5 clean technology",
  },
  {
    classname: "css",
    icon: <FaCss3Alt />,
    content: "css3 clean technology",
  },
  {
    classname: "bootstrap",
    icon: <FaBootstrap />,
    content: "Latest Bootstrap toolkit",
  },
  {
    classname: "js",
    icon: <FaJs />,
    content: "Modern JavaScript",
  },
  {
    classname: "react",
    icon: <SiSemanticuireact />,
    content: "React Js Technology",
  },
];

const countUpData = [
  {
    icon: <BsPerson />,
    title: "Domain Registered",
    content: <CountUp end={2500} duration={4} enableScrollSpy={true} />,
  },
  {
    icon: <HiOutlineEmojiHappy />,
    title: "Happy Clients",
    content: <CountUp end={400} duration={4} enableScrollSpy={true} />,
  },
  {
    icon: <BiCodeAlt />,
    title: "Line of Code",
    content: <CountUp end={9478815} duration={6} enableScrollSpy={true} />,
  },
  {
    icon: <RiCupLine />,
    title: "Cup of Tea",
    content: <CountUp end={78815} duration={5} enableScrollSpy={true} />,
  },
];

export {
  contactData,
  address,
  priceData,
  serviceData,
  qnaHosting,
  featuresData,
  tableData,
  tableDataDomain,
  qnaDomain,
  featuresDataVps,
  qnaVps,
  tableDataVps,
  homeIconData,
  countUpData,
};
