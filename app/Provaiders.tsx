'use client'

import { EntriesProvider } from "@/context/entries"
import { UIProvider } from "@/context/ui"
import { darkTheme } from "@/themes"
import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"





const Provaiders = ({children}:{children: React.ReactNode}) => {
  return (
    <EntriesProvider entries={[]}>

    <UIProvider sidemenuOpen={false} isAddingEntry={false} isDragging={false}>

    <ThemeProvider theme={darkTheme} >
      <CssBaseline/>
      
            {
              children
            }

    </ThemeProvider>
    </UIProvider>
    </EntriesProvider>
  )
}

export default Provaiders