'use client'

// React Imports
import { useEffect } from 'react'

// MUI Imports
import { deepmerge } from '@mui/utils'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import CssBaseline from '@mui/material/CssBaseline'
import type {} from '@mui/material/themeCssVarsAugmentation' //! Do not remove this import otherwise you will get type errors while making a production build
import type {} from '@mui/lab/themeAugmentation' //! Do not remove this import otherwise you will get type errors while making a production build

// Third-party Imports
import stylisRTLPlugin from 'stylis-plugin-rtl'

// Type Imports
import type { ChildrenType, Direction } from '@core/types'
import type { Settings } from '@core/contexts/settingsContext'

// Core Theme Imports
import defaultCoreTheme from '@core/theme'

type Props = ChildrenType & {
  direction: Direction
}

const CustomThemeProvider = (props: Props) => {
  // Props
  const { children, direction } = props

  const settings = {
    skin: 'default'
  } as Settings

  const theme = createTheme(
    deepmerge(defaultCoreTheme(settings, 'light', direction), {
      cssVariables: {
        colorSchemeSelector: 'data'
      }
    })
  )

  useEffect(() => {
    document.body.setAttribute('data-light', '')
  }, [])

  return (
    <AppRouterCacheProvider
      options={{
        prepend: true,
        ...(direction === 'rtl' && {
          key: 'rtl',
          stylisPlugins: [stylisRTLPlugin]
        })
      }}
    >
      <ThemeProvider theme={theme} defaultMode='light'>
        <>
          <CssBaseline />
          {children}
        </>
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}

export default CustomThemeProvider
