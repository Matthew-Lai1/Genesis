// React Imports
import { useState } from 'react'
import type { ChangeEvent } from 'react'

// MUI Imports
import Button from '@mui/material/Button'
import Switch from '@mui/material/Switch'
import Dialog from '@mui/material/Dialog'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import FormControlLabel from '@mui/material/FormControlLabel'
import DialogContentText from '@mui/material/DialogContentText'
import type { SelectChangeEvent } from '@mui/material/Select'
import type { Breakpoint } from '@mui/material/styles'

// Component Imports
import CustomTextField from '@core/components/mui/TextField'

// Styled component for the form
const Form = styled('form')({
  margin: 'auto',
  display: 'flex',
  width: 'fit-content',
  flexDirection: 'column'
})

const DialogsSizes = () => {
  // States
  const [open, setOpen] = useState<boolean>(false)
  const [fullWidth, setFullWidth] = useState<boolean>(true)
  const [maxWidth, setMaxWidth] = useState<Breakpoint>('sm')

  const handleClickOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  const handleMaxWidthChange = (event: SelectChangeEvent) => {
    setMaxWidth(event.target.value as Breakpoint)
  }

  const handleFullWidthChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFullWidth(event.target.checked)
  }

  return (
    <>
      <Button variant='outlined' onClick={handleClickOpen}>
        Open dialog
      </Button>
      <Dialog
        open={open}
        maxWidth={maxWidth}
        fullWidth={fullWidth}
        onClose={handleClose}
        aria-labelledby='max-width-dialog-title'
      >
        <DialogTitle id='max-width-dialog-title'>Optional sizes</DialogTitle>
        <DialogContent>
          <DialogContentText className='mbe-4'>
            You can set my maximum width and whether to adapt or not.
          </DialogContentText>
          <Form noValidate>
            <CustomTextField
              select
              label='maxWidth'
              value={maxWidth}
              slotProps={{
                select: { onChange: handleMaxWidthChange },
                htmlInput: { name: 'max-width', id: 'max-width' }
              }}
            >
              <MenuItem value={false as any}>false</MenuItem>
              <MenuItem value='xs'>xs</MenuItem>
              <MenuItem value='sm'>sm</MenuItem>
              <MenuItem value='md'>md</MenuItem>
              <MenuItem value='lg'>lg</MenuItem>
              <MenuItem value='xl'>xl</MenuItem>
            </CustomTextField>
            <FormControlLabel
              label='Full width'
              className='mbs-2'
              control={
                <Switch checked={fullWidth} onChange={handleFullWidthChange} />
              }
            />
          </Form>
        </DialogContent>
        <DialogActions className='dialog-actions-dense'>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DialogsSizes
