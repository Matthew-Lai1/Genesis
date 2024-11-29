// MUI Imports
import Grid from '@mui/material/Grid2'
import Input from '@mui/material/Input'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import InputAdornment from '@mui/material/InputAdornment'

const TextFieldIcons = () => {
  return (
    <Grid container spacing={6}>
      <Grid size={{xs:12}}>
      <FormControl fullWidth variant='standard'>
        <InputLabel htmlFor='input-with-icon-adornment'>With a start adornment</InputLabel>
        <Input
          id='input-with-icon-adornment'
          startAdornment={
            <InputAdornment position='start'>
              <i className='ri-account-circle-line' />
            </InputAdornment>
          }
        />
      </FormControl>
      </Grid>
      <Grid size={{xs:12}}>
      <TextField
        fullWidth
        label='TextField'
        variant='standard'
        id='input-with-icon-textfield'
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position='start'>
                <i className='ri-account-circle-line' />
              </InputAdornment>
            )
          }
        }}
      />
      </Grid>
      <Grid size={{xs:12}}>
        <Grid container spacing={2} className='items-end'>
        <Grid size={{xs:1}} className='flex justify-center'>
            <i className='ri-account-circle-line text-actionActive' />
          </Grid>
         <Grid size={{xs:11}}>
            <TextField fullWidth variant='standard' id='input-with-icon-grid' label='With a grid' />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default TextFieldIcons
