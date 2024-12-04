// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid2'

// Component Imports
import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'
import CustomTextField from '@core/components/mui/TextField'

const PickersBasic = () => {
  // States
  const [date, setDate] = useState<Date | null | undefined>(new Date())

  return (
    <Grid container spacing={6}>
      <Grid size={{ xs: 12, md: 4 }}>
        <AppReactDatepicker
          selected={date}
          id='basic-input'
          onChange={(date: Date | null) => setDate(date)}
          placeholderText='Click to select a date'
          customInput={<CustomTextField label='Basic' fullWidth />}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <AppReactDatepicker
          disabled
          selected={date}
          id='disabled-input'
          onChange={(date: Date | null) => setDate(date)}
          placeholderText='Click to select a date'
          customInput={<CustomTextField label='Disabled' fullWidth />}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <AppReactDatepicker
          readOnly
          selected={date}
          id='read-only-input'
          onChange={(date: Date | null) => setDate(date)}
          placeholderText='Click to select a date'
          customInput={
            <CustomTextField
              slotProps={{ input: { readOnly: true } }}
              label='Readonly'
              fullWidth
            />
          }
        />
      </Grid>
    </Grid>
  )
}

export default PickersBasic
