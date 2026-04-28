import { Link } from "@tanstack/react-router";

const Header = () => {
  return ( 
    <header className="wrapper max-w-7xl flex items-center justify-between py-4">
      <Link to='/'>Color game</Link>
      <div className="">Theme</div>
    </header>
   );
}
 
export default Header;