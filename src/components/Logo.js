import { Link } from "react-router-dom"
import logo from "../assets/akra.svg"

const Logo = () => {
  return (
    <>
      <Link to="/">
        <img
          src={logo}
          alt="Akra logo"
          title="Akra Ecommerce"
          className="w-20"
        />
      </Link>
    </>
  )
}

export default Logo
