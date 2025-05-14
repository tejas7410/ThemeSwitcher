import { useEffect, useState } from 'react'
import './App.css'
import ThemeBtn from './Components/ThemeBtn'
import Card from './Components/Card'
import useTheme, { ThemeProvide } from './Context/Theme'

function App() {
  const [themeMode, setthemeMode] = useState("light")
  const lightTheme = () => {
    setthemeMode("light")
  }
  const darkTheme = () => {
    setthemeMode("dark")
  }

  // actual change in the theme is done by the following 

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvide value={{ themeMode, darkTheme, lightTheme }}>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>

    </ThemeProvide>
  )
}

export default App
