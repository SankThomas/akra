import { useState } from "react"
import NavbarLeft from "./NavbarLeft"
import Logo from "./Logo"
import NavbarRight from "./NavbarRight"
import MenuButton from "./MenuButton"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="relative flex items-center justify-between p-5 shadow-md">
        {isOpen && (
          <div>
            <NavbarLeft setIsOpen={setIsOpen} />
          </div>
        )}

        <div>
          <Logo />
        </div>

        <nav>
          <NavbarRight />
        </nav>

        <div className="-mb-2 md:hidden">
          <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </header>
    </>
  )
}

export default Header
