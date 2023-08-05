'use client'
import { darkTheme } from "@/themes"
import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"





const Provaiders = ({children}:{children: React.ReactNode}) => {
  return (
    <ThemeProvider theme={darkTheme} >
      <CssBaseline/>
      
            {
                children
            }

            
    </ThemeProvider>
  )
}

export default Provaiders