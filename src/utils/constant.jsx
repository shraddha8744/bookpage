import {
  Home,
  Users,
  BookOpen,
  Video,
  CheckCircle,
  UserRound,
  BookText,
  TriangleAlert,
  BadgeIndianRupee,
} from "lucide-react";
import third from "../assets/images/3.jpg";
import four from "../assets/images/4.jpg";

import five from "../assets/images/5.jpg";

import six from "../assets/images/6.jpg";
import seven from "../assets/images/7.jpg";

import eight from "../assets/images/8.jpg";

import nine from "../assets/images/9.jpg";

import ten from "../assets/images/10.jpg";

// import eleven from "../assets/images/11.jpg";

// import telwve from "../assets/images/12.jpg";

export const leftMenu = [
  {
    icon: <Home />,
    name: "Home",
    hindi: "घर",
    marathi: "घर",
  },
  {
    icon: <Users />,
    name: "Students",
    hindi: "छात्र",
    marathi: "विद्यार्थी",
  },
  {
    icon: <UserRound />,
    name: "Teachers",
    hindi: "अध्यापक",
    marathi: "शिक्षक",
  },
  {
    icon: <BookOpen />,
    name: "Courses",
    hindi: "पाठ्यक्रम",
    marathi: "अभ्यासक्रम",
  },
  {
    icon: <Video />,
    name: "Live Class",
    hindi: "Live वर्ग",
    marathi: "लाइव क्लास",
  },
  {
    icon: <CheckCircle />,
    name: "Attendance",
    hindi: "उपस्थिति",
    marathi: "उपस्थिति",
  },
  {
    icon: <BadgeIndianRupee />,
    name: "Payments",
    hindi: "भुगतान",
    marathi: "पेमेंट",
  },
  {
    icon: <BookText />,
    name: "Library",
    hindi: "पुस्तकालय",
    marathi: "ग्रंथालय",
  },
  {
    icon: <TriangleAlert />,
    name: "Reports",
    hindi: "रिपोर्ट",
    marathi: "अहवाल",
  },
];

export const popularBooks = [
  {
    image: third,
  },
  {
    image: six,
  },
  {
    image: nine,
  },
  {
    image: four,
  },
];

export const ongoingBooks = [
  {
    image: seven,
  },
  {
    image: eight,
  },
  {
    image: five,
  },

  {
    image: ten,
  },
];

export const bestSales = [
  {
    image: third,
    name: "Grow green",
  },
  {
    image: nine,
    name: "Raise a plant",
  },
  {
    image: ten,
    name: "One question",
  },
  {
    image: four,
    name: "Unplug day ",
  },
];

export const supported_languages = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "marathi", name: "Marathi" },
];

const lang = {
  en: {
    search: "Search",
    Button: "Learn more",
    name: "Shraddha Hanmant Adlinge",
    popular: "Popular",
    ongoing: "Ongoing",
    view_all: "View All",
    upgrade: "Upgrade to Pro for more facillities",
    book: "The Book is an essent",
    des: "This book is very nice .",
    upgradeButton: "Upgrade",
    unlock: "Unlocks achievement",
    success: "Goal achieved successfully unlocked",
    achivement: "achivement",
    day: " days left",
    sale: "Best Sales",
    skill: "skillSet",
  },
  hindi: {
    search: "खोज",
    Button: "और अधिक जानें",
    name: "श्रद्धा हनमंत आदलिंगे",
    popular: "लोकप्रिय",
    ongoing: "चल रहे",
    view_all: "सभी को देखें",
    upgrade: "अधिक सुविधाओं के लिए प्रो में अपग्रेड करें",
    unlock: "उपलब्धि को खोलता है",
    success: "लक्ष्य सफलतापूर्वक अनलॉक हो गया",

    book: "पुस्तक एक सार है",
    des: "यह किताब बहुत अच्छी है.",
    upgradeButton: "उन्नति",
    achivement: "उपलब्धि",
    day: "दिन शेष",
    sale: "सर्वोत्तम बिक्री",
    skill: "कौशल सेट",
  },
  marathi: {
    search: "शोध",
    Button: "अधिक जाणून घ्या",
    name: "श्रद्धा हनमंत आदलिंगे",
    popular: "लोकप्रिय",
    ongoing: "चालू",
    view_all: "सर्व पहा",
    upgrade: "अधिक सुविधांसाठी प्रो वर श्रेणीसुधारित करा",

    book: "पुस्तक हे सार आहे",
    des: "हे पुस्तक खूप छान आहे.",
    upgradeButton: "श्रेणीसुधारित",
    unlock: "उपलब्धी अनलॉक ",
    success: "ध्येय यशस्वीरित्या अनलॉक केले",
    achivement: "उपलब्धी",
    day: "दिवस बाकी",
    sale: "सर्वोत्तम विक्री",
    skill: "कौशल्य सेट",
  },
};
export default lang;
