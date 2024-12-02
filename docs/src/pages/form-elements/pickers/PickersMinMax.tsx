// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid2'

// Third-party Imports
import { subDays, addDays } from 'date-fns'

// Component Imports
import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'
import CustomTextField from '@core/components/mui/TextField'

const PickersMinMax = () => {
  // States
  const [minDate, setMinDate] = useState<Date | null | undefined>(new Date())
  const [maxDate, setMaxDate] = useState<Date | null | undefined>(new Date())

  return (
    <Grid container spacing={6}>
      <Grid size={{ xs: 12, lg: 6 }}>
        <AppReactDatepicker
          id='min-date'
          selected={minDate}
          minDate={subDays(new Date(), 5)}
          onChange={(date: Date | null) => setMinDate(date)}
          customInput={<CustomTextField label='Min Date' fullWidth />}
        />
      </Grid>
      <Grid size={{ xs: 12, lg: 6 }}>
        <AppReactDatepicker
          id='max-date'
          selected={maxDate}
          maxDate={addDays(new Date(), 5)}
          onChange={(date: Date | null) => setMaxDate(date)}
          customInput={<CustomTextField label='Max Date' fullWidth />}
        />
      </Grid>
    </Grid>
  )
}

export default PickersMinMax
