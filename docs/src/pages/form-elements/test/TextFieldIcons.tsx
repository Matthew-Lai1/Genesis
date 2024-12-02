// MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid2'
import Input from '@mui/material/Input'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import CardHeader from '@mui/material/CardHeader'
import FilledInput from '@mui/material/FilledInput'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'

const TextFieldIcons = () => {
  return (
    <Card>
      <CardHeader title='Icons' />
      <CardContent>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 4 }}>
            <FormControl fullWidth>
              <InputLabel>With a start adornment</InputLabel>
              <OutlinedInput
                label='With a start adornment'
                startAdornment={
                  <InputAdornment position='start'>
                    <i className='tabler-user-circle' />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              label='TextField'
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position='start'>
                      <i className='tabler-user-circle' />
                    </InputAdornment>
                  )
                }
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Grid container className='items-center'>
              <Grid size={{ xs: 1 }}>
                <i className='tabler-user-circle text-actionActive' />
              </Grid>
             <Grid size={{ xs: 11 }}>
                <TextField fullWidth label='With a grid' />
              </Grid>
            </Grid>
          </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <FormControl fullWidth variant='filled'>
            <InputLabel>With a start adornment</InputLabel>
            <FilledInput
              startAdornment={
                <InputAdornment position='start'>
                  <i className='tabler-user-circle' />
                </InputAdornment>
              }
            />
          </FormControl>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
          <TextField
            fullWidth
            label='TextField'
            variant='filled'
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position='start'>
                    <i className='tabler-user-circle' />
                  </InputAdornment>
                )
              }
            }}
          />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Grid container className='items-center'>
              <Grid size={{ xs: 1 }}>
                <i className='tabler-user-circle text-actionActive' />
              </Grid>
             <Grid size={{ xs: 11 }}>
                <TextField fullWidth variant='filled' label='With a grid' />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
          <FormControl fullWidth variant='standard'>
            <InputLabel>With a start adornment</InputLabel>
            <Input
              startAdornment={
                <InputAdornment position='start'>
                  <i className='tabler-user-circle' />
                </InputAdornment>
              }
            />
          </FormControl>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
          <TextField
            fullWidth
            label='TextField'
            variant='standard'
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position='start'>
                    <i className='tabler-user-circle' />
                  </InputAdornment>
                )
              }
            }}
          />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Grid container className='items-center'>
              <Grid size={{ xs: 1 }}>
                <i className='tabler-user-circle mbs-3 text-actionActive' />
              </Grid>
             <Grid size={{ xs: 11 }}>
                <TextField fullWidth variant='standard' label='With a grid' />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default TextFieldIcons
