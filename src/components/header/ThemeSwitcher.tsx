import { useEffect } from "react"
import ILight from "../icons/ILight"

const ThemeSwitcher = () => {
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme) {
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark')
      }
    } else {
      const systemDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches

      if (systemDark) {
        document.documentElement.classList.add('dark')
      }
    }
  }, [])

  const toggleTheme = () => {
    const root = document.documentElement

    root.classList.toggle('dark')

    const isDark = root.classList.contains('dark')

    localStorage.setItem(
      'theme',
      isDark ? 'dark' : 'light'
    )
  }
  return ( 
    <div
      onClick={toggleTheme}
      className="text-black dark:text-white"
    >
      <ILight size={24} />
    </div>
  );
}

export default ThemeSwitcher;