import NavbarLeft from "./NavbarLeft"
import Logo from "./Logo"
import NavbarRight from "./NavbarRight"

const Header = () => {
  return (
    <>
      <header className="flex">
        <div>
          <NavbarLeft />
        </div>

        <div>
          <Logo />
        </div>

        <nav>
          <NavbarRight />
        </nav>
      </header>
    </>
  )
}

export default Header
