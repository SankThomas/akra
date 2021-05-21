import { GrFacebook } from "react-icons/gr"
import { FaInstagram, FaTwitter, FaPinterest, FaTumblr } from "react-icons/fa"
import { v4 as uuidv4 } from "uuid"

export const footer = [
  {
    id: uuidv4(),
    icon: <GrFacebook />,
    text: "Facebook",
  },
  {
    id: uuidv4(),
    icon: <FaInstagram />,
    text: "Instagram",
  },
  {
    id: uuidv4(),
    icon: <FaTwitter />,
    text: "Twitter",
  },
  {
    id: uuidv4(),
    icon: <FaPinterest />,
    text: "Pinterest",
  },
  {
    id: uuidv4(),
    icon: <FaTumblr />,
    text: "Tumblr",
  },
]
