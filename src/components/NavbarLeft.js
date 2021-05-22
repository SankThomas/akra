import { useState } from "react"
import { NavLink } from "react-router-dom"
import { navbarLeft } from "../data/navbar"

const NavbarLeft = () => {
  // eslint-disable-next-line
  const [leftLinks, setLeftLinks] = useState(navbarLeft)

  return (
    <>
      <ul>
        {leftLinks.map(({ id, title, url }) => (
          <li key={id}>
            <NavLink to={url}>{title}</NavLink>
          </li>
        ))}
      </ul>
    </>
  )
}

export default NavbarLeft
