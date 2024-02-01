'use client'

// MUI Imports
import { useTheme } from '@mui/material/styles'

// Next Imports
// import { useParams } from 'next/navigation'

// Type Imports
// import type { getDictionary } from '@/utils/getDictionary'

// Context Imports
import { HorizontalNavProvider } from '@menu/contexts/horizontalNavContext'

// Component Imports
import { RouterLink } from '@menu/components/RouterLink'
import HorizontalNav, { Menu, SubMenu, MenuItem } from '@menu/horizontal-menu'

// import { GenerateHorizontalMenu } from '@components/GenerateMenu'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'

// Style Imports
import menuItemStyles from '@core/styles/horizontal/menuItemStyles'

// Menu Data Imports
// import menuData from '@/data/navigation/horizontalMenuData'

const HorizontalMenu = (/* { dictionary }: { dictionary: Awaited<ReturnType<typeof getDictionary>> } */) => {
  // Hooks
  // const params = useParams()
  const theme = useTheme()
  const { settings } = useSettings()

  return (
    <HorizontalNavProvider>
      <HorizontalNav hideMenu>
        <Menu
          menuItemStyles={{
            ...menuItemStyles(settings, theme),
            ...{ subMenuStyles: { zIndex: 'calc(var(--header-z-index) + 1)' } }
          }}
          popoutMenuOffset={{
            mainAxis: ({ level }) => (level && level > 0 ? 10 : 8),
            alignmentAxis: ({ level }) => (level && level > 0 ? -5 : 0)
          }}
        >
          <MenuItem component={<RouterLink href='/' />}>Home</MenuItem>
          <MenuItem component='div'>About</MenuItem>
          <MenuItem href='/about'>About</MenuItem>
          <MenuItem href='/email'>Email</MenuItem>
          <MenuItem href='/chat'>Chat</MenuItem>
          <SubMenu label='Authentication'>
            <SubMenu label='Login'>
              <MenuItem href='/pages/auth/login-v1'>Login v1</MenuItem>
              <MenuItem href='/pages/auth/login-v2'>Login v2</MenuItem>
            </SubMenu>
          </SubMenu>
          <SubMenu label='Manage Users'>
            <MenuItem href='/user-list'>User List</MenuItem>
            <MenuItem href='/user-details'>User Details</MenuItem>
          </SubMenu>
        </Menu>
        {/* <Menu
          menuItemStyles={{
            ...menuItemStyles(settings, theme),
            ...{ subMenuStyles: { zIndex: 'calc(var(--header-z-index) + 1)' } }
          }}
          popoutMenuOffset={{
            mainAxis: ({ level }) => (level && level > 0 ? 10 : 8),
            alignmentAxis: ({ level }) => (level && level > 0 ? -5 : 0)
          }}
        >
          <GenerateHorizontalMenu menuData={menuData(dictionary, params)} />
        </Menu> */}
      </HorizontalNav>
    </HorizontalNavProvider>
  )
}

export default HorizontalMenu
