import {
  HiHome,
  HiUser,
  HiSquare2Stack,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";
import { RxDesktop } from "react-icons/rx";
import { SiNextdotjs } from "react-icons/si";
import { MdOutlineWork } from "react-icons/md";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

export const navData = [
  { name: "Home", path: "/", icon: <HiHome /> },
  { name: "adout", path: "/", icon: <HiUser /> },
  { name: "Expericence", path: "/", icon: <MdOutlineWork /> },
  { name: "Skils", path: "/", icon: <HiRectangleGroup /> },
  { name: "work", path: "/", icon: <HiSquare2Stack /> },
  { name: "contact", path: "/", icon: <HiEnvelope />,
  },
];


export const adoutData = [
  {
    title: 'expertise',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <FaNodeJs key="nodejs" />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma key="figma" />],
      },
    ],
  },
  {
    title: 'experience',
    info:[
      {
        title: 'UI/UX Design',
        year: '23 e 23',
      },
      {
        title: 'UI/UX Design',
        year: '23 e 23',
      },
      {
        title: 'UI/UX Design',
        year: '23 e 23',
      },
    ],
  },
  {
    title: 'education',
    info:[
      {
        title: '',
        year: '',
      },
      {
        title: '',
        year: '',
      },
      {
        title: '',
        year: '',
      }
    ],
  }
]