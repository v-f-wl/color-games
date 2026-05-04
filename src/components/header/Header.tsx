import { Link } from "@tanstack/react-router";
import ILight from "../icons/ILight";

const Header = () => {
  return ( 
    <header 
      className="
        fixed top-0 left-1/2 -translate-x-1/2  w-full px-8 
        flex items-center justify-between py-4
      "
    >
      <Link to='/' className="font-semibold text-3xl">Color game</Link>
      <div className=""><ILight size={24}/></div>
    </header>
   );
}
 
export default Header;