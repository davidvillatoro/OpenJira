'use client'
import { UIProvider } from "@/context/ui"
import { darkTheme } from "@/themes"
import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"





const Provaiders = ({children}:{children: React.ReactNode}) => {
  return (
    <UIProvider sidemenuOpen={false}>

    <ThemeProvider theme={darkTheme} >
      <CssBaseline/>
      
            {
              children
            }

    </ThemeProvider>
    </UIProvider>
  )
}

export default Provaiders