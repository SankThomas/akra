import { useState } from "react"
import { NavLink } from "react-router-dom"
import { navbarLeft } from "../data/navbar"

const NavbarLeft = ({ setIsOpen }) => {
  // eslint-disable-next-line
  const [leftLinks, setLeftLinks] = useState(navbarLeft)

  return (
    <>
      <ul className="flex flex-wrap items-center justify-center absolute w-72 left-9 top-20 bg-white shadow-md p-5 rounded-lg">
        {leftLinks.map(({ id, title, url }) => (
          <li key={id} onClick={() => setIsOpen(false)} className="m-5 text-sm">
            <NavLink to={url}>{title}</NavLink>
          </li>
        ))}
      </ul>
    </>
  )
}

export default NavbarLeft
