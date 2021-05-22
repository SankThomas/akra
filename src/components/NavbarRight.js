import { useState } from "react"
import { NavLink } from "react-router-dom"
import { navbarRight } from "../data/navbar"

const NavbarRight = () => {
  // eslint-disable-next-line
  const [rightLinks, setRightLinks] = useState(navbarRight)

  return (
    <>
      <ul>
        {rightLinks.map(({ id, title, url }) => (
          <li key={id}>
            <NavLink to={url}>{title}</NavLink>
          </li>
        ))}
      </ul>
    </>
  )
}

export default NavbarRight
