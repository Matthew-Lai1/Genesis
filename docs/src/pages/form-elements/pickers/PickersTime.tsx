// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid2'

// Component Imports
import CustomInput from './PickersCustomInput'
import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'

const PickersTime = () => {
  // States
  const [time, setTime] = useState<Date | null | undefined>(new Date())
  const [dateTime, setDateTime] = useState<Date | null | undefined>(new Date())

  return (
    <Grid container spacing={6}>
      <Grid size={{xs:12, lg:6}}>
        <AppReactDatepicker
          showTimeSelect
          selected={time}
          timeIntervals={15}
          showTimeSelectOnly
          dateFormat='h:mm aa'
          id='time-only-picker'
          onChange={(date: Date | null) => setTime(date)}
          customInput={<CustomInput label='Time Only' />}
        />
      </Grid>
      <Grid size={{xs:12, lg:6}}>
        <AppReactDatepicker
          showTimeSelect
          timeFormat='HH:mm'
          timeIntervals={15}
          selected={dateTime}
          id='date-time-picker'
          dateFormat='MM/dd/yyyy h:mm aa'
          onChange={(date: Date | null) => setDateTime(date)}
          customInput={<CustomInput label='Date & Time' />}
        />
      </Grid>
    </Grid>
  )
}

export default PickersTime
