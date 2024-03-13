import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Dataset Configuration",
  "Federated System",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Speech to Text",
    text: "Over the current support for ReLu , The model will be enhanced later on to get speech models over the federation",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Procedural Content Generation",
    text: "In future it can be employed to generate game content procedurally, such as levels, maps, textures, or game assets.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Federated Consensus Mechanisms",
    text: "Implement federated consensus mechanisms to reach agreement on the global model updates and ensure consistency across the network.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap3,
  },
];

export const collabText =
  "model training across a network of nodes, leveraging collective computational resources.";

export const collabContent = [
  {
    id: "0",
    title: "Decentralized Training",
    text: collabText,
  },
  {
    id: "1",
    title: "Privacy-Preserving Aggregation",
  },
  {
    id: "2",
    title: "Blockchain Transparency",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Basic Milon",
    price: "0",
    features: [
      "Access to our federated network",
      "Train models at 1/4th the cost",
      "Access from anywhere , anytime",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced Milon",
    price: "9.99",
    features: [
      "Get your queues sorted faster",
      "Store your models on our services",
      "Access to Large context of models available ",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Customized for companies",
    price: null,
    features: [
      "Dashboard management for the enterprise",
      "Share models inside the company",
      "Better support",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Privacy and Data Protection",
    text: "Enabling privacy-preserving model training by allowing nodes to contribute to the global model addressing data privacy concerns. The decentralized nature of the network can reduce the risk of data breaches.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Flexibility and Customization",
    text: "decentralized architecture of the service can enable clients to customize the training process according to their specific requirements",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Resource Sharing and Cost Optimization",
    text: "Pooling the computational resources of participating nodes, the service can offer cost-effective and efficient model training solutions.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Incentivized Participation and Collaboration",
    text: "Incorporating incentive mechanisms, such as token rewards or fees, the service can encourage nodes to contribute their computational resources honestly",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Fault Tolerance and Resilience",
    text: " Distributed nature of the network ensures that the training process can continue even if some nodes fail or drop out, enhancing the overall resilience",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Scalable and Efficient Model Training",
    text: "Parallel processing of training epochs across multiple nodes in the network can significantly accelerate the training process, allowing for faster model development",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
