import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { FaSun, FaMoon } from "react-icons/fa"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full"
    >
      {theme === "dark" ? (
        <FaSun className="h-4 w-4" />
      ) : (
        <FaMoon className="h-4 w-4" />
      )}
    </Button>
  )
}