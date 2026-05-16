import { Link } from "@tanstack/react-router";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {

  return (
    <header
      className="
        absolute top-0 left-1/2 -translate-x-1/2  w-full px-8 
        flex items-center justify-between py-4
      "
    >
      <Link to='/' className="font-semibold text-3xl text-black dark:text-white">Color game</Link>
      <ThemeSwitcher/>
    </header>
  );
}

export default Header;