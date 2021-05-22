import { useState } from "react"
import { NavLink } from "react-router-dom"
import { navbarRight } from "../data/navbar"

const NavbarRight = () => {
  // eslint-disable-next-line
  const [rightLinks, setRightLinks] = useState(navbarRight)

  return (
    <>
      <ul className="flex items-center justify-between">
        {rightLinks.map(({ id, title, url }) => (
          <li key={id} className="mx-2 text-lg">
            <NavLink to={url}>{title}</NavLink>
          </li>
        ))}
      </ul>
    </>
  )
}

export default NavbarRight
