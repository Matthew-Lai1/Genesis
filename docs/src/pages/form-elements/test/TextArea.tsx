// React Imports
import { useState } from 'react'
import type { ChangeEvent } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid2'
import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

const Textarea = () => {
  // States
  const [value, setValue] = useState<string>('Controlled')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <Card>
      <CardHeader title='Textarea' />
      <CardContent>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 4 }}>
          <TextField 
            fullWidth
            multiline
            maxRows={4}
            value={value}
            label='Multiline'
            onChange={handleChange}
            id='textarea-outlined-controlled'
          />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
          <TextField 
            fullWidth multiline id='textarea-outlined' placeholder='Placeholder' label='Multiline Placeholder' />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
          <TextField 
            fullWidth
            rows={4}
            multiline
            label='Multiline'
            defaultValue='Default Value'
            id='textarea-outlined-static'
          />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
          <TextField 
            fullWidth
            multiline
            maxRows={4}
            value={value}
            variant='filled'
            label='Multiline'
            onChange={handleChange}
            id='textarea-filled-controlled'
          />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
          <TextField 
            fullWidth
            multiline
            variant='filled'
            id='textarea-filled'
            placeholder='Placeholder'
            label='Multiline Placeholder'
          />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
          <TextField 
            fullWidth
            rows={4}
            multiline
            variant='filled'
            label='Multiline'
            id='textarea-filled-static'
            defaultValue='Default Value'
          />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField 
              fullWidth
              multiline
              maxRows={4}
              value={value}
              label='Multiline'
              variant='standard'
              onChange={handleChange}
              id='textarea-standard-controlled'
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField 
              fullWidth
              multiline
              variant='standard'
              id='textarea-standard'
              placeholder='Placeholder'
              label='Multiline Placeholder'
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField 
              fullWidth
              rows={4}
              multiline
              label='Multiline'
              variant='standard'
              defaultValue='Default Value'
              id='textarea-standard-static'
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Textarea
