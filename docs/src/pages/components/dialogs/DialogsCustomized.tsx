// React Imports
import { useState } from 'react'

// MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'

const DialogsCustomized = () => {
  // States
  const [open, setOpen] = useState<boolean>(false)

  const handleClickOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  return (
    <>
      <Button variant='outlined' onClick={handleClickOpen}>
        Open dialog
      </Button>
      <Dialog onClose={handleClose} aria-labelledby='customized-dialog-title' open={open} closeAfterTransition={false}>
        <DialogTitle id='customized-dialog-title' className='p-4'>
          <Typography variant='h6' component='span'>
            Modal title
          </Typography>
          <IconButton
            aria-label='close'
            onClick={handleClose}
            className='absolute top-2.5 right-2.5 text-[var(--mui-palette-grey-500)]'
          >
            <i className='ri-close-line' />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers className='p-4'>
          <Typography className='mbe-4'>
            Chupa chups jelly-o candy sweet roll wafer cake chocolate bar. Brownie sweet roll topping cake chocolate
            cake cheesecake tiramisu chocolate cake. Jujubes liquorice chocolate bar pastry. Chocolate jujubes caramels
            pastry.
          </Typography>
          <Typography className='mbe-4'>
            Ice cream marshmallow dragée bonbon croissant. Carrot cake sweet donut ice cream bonbon oat cake danish
            sugar plum. Gingerbread gummies marzipan gingerbread.
          </Typography>
          <Typography>
            Soufflé toffee ice cream. Jelly-o pudding sweet roll bonbon. Marshmallow liquorice icing. Jelly beans
            chocolate bar chocolate marzipan candy fruitcake jujubes.
          </Typography>
        </DialogContent>
        <DialogActions className='p-4'>
          <Button onClick={handleClose}>Save changes</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DialogsCustomized
