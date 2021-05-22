import { GrClose } from "react-icons/gr"
import { HiMenuAlt3 } from "react-icons/hi"

const MenuButton = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <button className="text-2xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <GrClose /> : <HiMenuAlt3 />}
      </button>
    </>
  )
}

export default MenuButton
