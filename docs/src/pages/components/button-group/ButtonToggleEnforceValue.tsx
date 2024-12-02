// React Imports
import { useState } from 'react'
import type { MouseEvent } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid2'
import Typography from '@mui/material/Typography'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

const ButtonToggleEnforceValue = () => {
  // States
  const [formats, setFormats] = useState<string[]>(() => ['phone'])
  const [alignment, setAlignment] = useState<string | null>('left')

  const handleAlignment = (event: MouseEvent<HTMLElement>, newAlignment: string | null) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment)
    }
  }

  const handleFormat = (event: MouseEvent<HTMLElement>, newFormats: string[]) => {
    if (newFormats.length) {
      setFormats(newFormats)
    }
  }

  return (
    <Grid container spacing={6}>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Typography className='font-medium mbe-2'>Exclusive Selection</Typography>
        <ToggleButtonGroup exclusive value={alignment} onChange={handleAlignment} aria-label='text alignment'>
          <ToggleButton value='left' aria-label='left aligned'>
            <i className='tabler-align-left' />
          </ToggleButton>
          <ToggleButton value='center' aria-label='center aligned'>
            <i className='tabler-align-center' />
          </ToggleButton>
          <ToggleButton value='right' aria-label='right aligned'>
            <i className='tabler-align-right' />
          </ToggleButton>
          <ToggleButton value='justify' aria-label='justified' disabled>
            <i className='tabler-align-justified' />
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Typography className='font-medium mbe-2'>Multiple Selection</Typography>
        <ToggleButtonGroup value={formats} onChange={handleFormat} aria-label='device'>
          <ToggleButton value='laptop' aria-label='laptop'>
            <i className='tabler-device-laptop' />
          </ToggleButton>
          <ToggleButton value='desktop' aria-label='desktop'>
            <i className='tabler-device-desktop' />
          </ToggleButton>
          <ToggleButton value='phone' aria-label='phone'>
            <i className='tabler-device-mobile' />
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
    </Grid>
  )
}

export default ButtonToggleEnforceValue
