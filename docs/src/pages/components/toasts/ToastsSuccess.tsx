// MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Third-party Imports
import { toast } from 'react-toastify'

const ToastsSuccess = () => {
  return (
    <div
     className='flex text-center flex-col items-center'
    >
      <i className='tabler-circle-check mbe-2 text-[42px]' />
      <Typography className='mbe-4' variant='h5'>Success</Typography>
      <Typography className='mbe-3'>Indicate that an action was completed successfully.</Typography>
      <Button color='success' variant='contained' onClick={() => toast.success('Successfully toasted!')}>
        Success
      </Button>
    </div>
  )
}

export default ToastsSuccess
