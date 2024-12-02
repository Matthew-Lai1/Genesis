// MUI Imports
import { useColorScheme } from "@mui/material/styles"

// Docusaurus Imports
import { useColorMode } from "@docusaurus/theme-common/internal"

const ChangeMuiMode = () => {
  // Hooks
  const { colorMode } = useColorMode()
  const { mode, setMode } = useColorScheme()

  if (colorMode === "light" && mode !== "light") {
    setMode("light")
  }
  if (colorMode === "dark" && mode !== "dark") {
    setMode("dark")
  }

  return null
}

export default ChangeMuiMode