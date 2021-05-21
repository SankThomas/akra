import { v4 as uuidv4 } from "uuid"
import { FaCartPlus, FaSearch } from "react-icons/fa"
import { AiOutlineUserAdd } from "react-icons/ai"

export const navbarLeft = [
  {
    id: uuidv4(),
    title: "Catalogue",
    url: "/catalogue",
  },
  {
    id: uuidv4(),
    title: "Technology",
    url: "/technology",
  },
  {
    id: uuidv4(),
    title: "Accessories",
    url: "/accessories",
  },
  {
    id: uuidv4(),
    title: "Electronics",
    url: "/electronics",
  },
  {
    id: uuidv4(),
    title: "Computers",
    url: "/computers",
  },
  {
    id: uuidv4(),
    title: "Peripherals",
    url: "/peripherals",
  },
  {
    id: uuidv4(),
    title: "Catalogue",
    url: "/catalogue",
  },
]

export const navbarRight = [
  {
    id: uuidv4(),
    title: <FaSearch />,
    url: "/search",
  },
  {
    id: uuidv4(),
    title: <FaCartPlus />,
    url: "/shopping-cart",
  },
  {
    id: uuidv4(),
    title: <AiOutlineUserAdd />,
    url: "/login",
  },
]
