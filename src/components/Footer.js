import { useState } from "react"
import { footer } from "../data/footer"

const Footer = () => {
  // eslint-disable-next-line
  const [links, setLinks] = useState(footer)

  return (
    <>
      <footer>
        <ul>
          {links.map(({ id, icon }) => (
            <li key={id}>{icon}</li>
          ))}
        </ul>
      </footer>
    </>
  )
}

export default Footer
