// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid2'

// Component Imports
import CustomInput from './PickersCustomInput'
import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'

const PickersBasic = () => {
  // States
  const [date, setDate] = useState<Date | null | undefined>(new Date())

  return (
    <Grid container spacing={6}>
      <Grid size={{xs:12, md:4}}>
        <AppReactDatepicker
          selected={date}
          id='basic-input'
          onChange={(date: Date | null) => setDate(date)}
          placeholderText='Click to select a date'
          customInput={<CustomInput label='Basic' />}
        />
      </Grid>
      <Grid size={{xs:12, md:4}}>
        <AppReactDatepicker
          disabled
          selected={date}
          id='disabled-input'
          onChange={(date: Date | null) => setDate(date)}
          placeholderText='Click to select a date'
          customInput={<CustomInput label='Disabled' />}
        />
      </Grid>
      <Grid size={{xs:12, md:4}}>
        <AppReactDatepicker
          readOnly
          selected={date}
          id='read-only-input'
          onChange={(date: Date | null) => setDate(date)}
          placeholderText='Click to select a date'
          customInput={<CustomInput readOnly label='Readonly' />}
        />
      </Grid>
    </Grid>
  )
}

export default PickersBasic
