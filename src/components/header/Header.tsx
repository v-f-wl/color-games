import { Link } from "@tanstack/react-router";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {

  return (
    <header
      className="
        absolute top-4 left-1/2 -translate-x-1/2  px-8 
        flex items-center justify-center gap-24 py-4
        bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-full
      "
    >
      <Link to='/' className="font-semibold text-3xl">Color game</Link>
      <ThemeSwitcher/>
    </header>
  );
}

export default Header;