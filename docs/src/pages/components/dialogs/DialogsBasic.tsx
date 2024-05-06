// React Imports
import { useState } from 'react'

// MUI Imports
import List from '@mui/material/List'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import MuiAvatar from '@mui/material/Avatar'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'
import DialogTitle from '@mui/material/DialogTitle'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemAvatar from '@mui/material/ListItemAvatar'

// Component Imports
import CustomAvatar from '@site/src/components/mui/Avatar'

const emails = ['username@gmail.com', 'user02@gmail.com']

const DialogsBasic = () => {
  // States
  const [open, setOpen] = useState<boolean>(false)
  const [selectedValue, setSelectedValue] = useState<string>(emails[1])

  const handleClickOpen = () => setOpen(true)

  const handleDialogClose = () => setOpen(false)

  const handleClose = (value: string) => {
    setOpen(false)
    setSelectedValue(value)
  }

  return (
    <div>
      <Typography variant='subtitle1' className='mbe-2' color='text.primary'>
        Selected: {selectedValue}
      </Typography>
      <Button variant='outlined' onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <Dialog onClose={handleDialogClose} aria-labelledby='simple-dialog-title' open={open}>
        <DialogTitle id='simple-dialog-title'>Set backup account</DialogTitle>
        <List className='pt-0 px-0'>
          {emails.map(email => (
            <ListItem key={email} disablePadding onClick={() => handleClose(email)}>
              <ListItemButton>
                <ListItemAvatar>
                  <CustomAvatar color='primary' skin='light'>
                    <i className='tabler-user' />
                  </CustomAvatar>
                </ListItemAvatar>
                <ListItemText primary={email} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding onClick={() => handleClose('addAccount')}>
            <ListItemButton>
              <ListItemAvatar>
                <MuiAvatar>
                  <i className='tabler-plus' />
                </MuiAvatar>
              </ListItemAvatar>
              <ListItemText primary='Add account' />
            </ListItemButton>
          </ListItem>
        </List>
      </Dialog>
    </div>
  )
}

export default DialogsBasic
