// React Imports
import { useState } from 'react'

// MUI Imports
import List from '@mui/material/List'
import Switch from '@mui/material/Switch'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListSubheader from '@mui/material/ListSubheader'

const ListWithSwitch = () => {
  // States
  const [checked, setChecked] = useState<string[]>(['wifi', 'location'])

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }

  return (
    <List subheader={<ListSubheader>Settings</ListSubheader>}>
      <ListItem
        secondaryAction={
          <Switch edge='end' checked={checked.indexOf('wifi') !== -1} onChange={handleToggle('wifi')} />
        }
      >
        <ListItemIcon>
          <i className='ri-wifi-line text-xl' />
        </ListItemIcon>
        <ListItemText primary='Wi-Fi' />
      </ListItem>
      <ListItem
        secondaryAction={
          <Switch edge='end' checked={checked.indexOf('bluetooth') !== -1} onChange={handleToggle('bluetooth')} />
        }
      >
        <ListItemIcon>
          <i className='ri-bluetooth-line text-xl' />
        </ListItemIcon>
        <ListItemText primary='Bluetooth' />
      </ListItem>
      <ListItem
        secondaryAction={
          <Switch edge='end' checked={checked.indexOf('location') !== -1} onChange={handleToggle('location')} />
        }
      >
        <ListItemIcon>
          <i className='ri-map-pin-line text-xl' />
        </ListItemIcon>
        <ListItemText primary='Location' />
      </ListItem>
      <ListItem
        secondaryAction={
          <Switch edge='end' checked={checked.indexOf('airplane') !== -1} onChange={handleToggle('airplane')} />
        }
      >
        <ListItemIcon>
          <i className='ri-plane-line text-xl' />
        </ListItemIcon>
        <ListItemText primary='Airplane Mode' />
      </ListItem>
      <ListItem
       secondaryAction={
          <Switch edge='end' checked={checked.indexOf('hotspot') !== -1} onChange={handleToggle('hotspot')} />
       }
      >
        <ListItemIcon>
          <i className='ri-hotspot-line text-xl' />
        </ListItemIcon>
        <ListItemText primary='Hotspot' />
      </ListItem>
      <ListItem
        secondaryAction={
          <Switch edge='end' checked={checked.indexOf('do-not-disturb') !== -1} onChange={handleToggle('do-not-disturb')} />
        }
      >
        <ListItemIcon>
          <i className='ri-indeterminate-circle-line text-xl' />
        </ListItemIcon>
        <ListItemText primary='Do not disturb' />
      </ListItem>
    </List>
  )
}

export default ListWithSwitch
