// MUI Imports
import Grid from '@mui/material/Grid2'
import InputAdornment from '@mui/material/InputAdornment'

// Component Imports
import CustomTextField from '@core/components/mui/TextField'

const TextFieldIcons = () => {
  return (
    <form className='flex items-center'>
      <Grid container spacing={6}>
        <Grid>
          <CustomTextField
            id='input-with-icon-adornment'
            label='With adornment'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <i className='tabler-user-circle' />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid>
          <Grid container spacing={2}>
            <Grid className='flex items-center'>
              <i className='tabler-user-circle text-base mbs-3' />
            </Grid>
            <Grid>
              <CustomTextField
                fullWidth
                id='input-with-icon-grid'
                label='With a grid'
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  )
}

export default TextFieldIcons;
