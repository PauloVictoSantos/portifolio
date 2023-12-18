import {
  HiHome,
  HiUser,
  HiSquare2Stack,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";
import { RxDesktop } from "react-icons/rx";
import { BiBug } from "react-icons/bi";
import {
  FaBug,
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiNextdotjs, SiFigma } from "react-icons/si";

export const navData = [
  { name: "Home", path: "/", icon: <HiHome /> },
  { name: "adout", path: "/adout", icon: <HiUser /> },
  { name: "servieces", path: "/servieces", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiSquare2Stack /> },

  {
    name: "testetimonials",
    path: "/testetimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];
