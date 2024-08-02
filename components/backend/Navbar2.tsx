import DarkMode from "./DarkMode"
import LinksDropdown from "./LinksDropdown"
import Logo from "./Logo"
import NavSerch from "./NavSearch"

const Navbar = () => {
  return (
      <nav className="border-b">
          <div className=" py-8 container flex flex-col sm:flex-row sm:justify-between sm:items-center  flex-wrap gap-4">
            <Logo />  
              <NavSerch />
              <div className="flex gap-4 items-center">
                  <DarkMode />
                  <LinksDropdown/>
              </div>

          </div>
    </nav>
  )
}

export default Navbar
