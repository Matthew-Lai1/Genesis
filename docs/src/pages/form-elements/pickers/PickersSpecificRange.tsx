// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid2'

// Third-party Imports
import { addDays, setHours, setMinutes } from 'date-fns'

// Component Imports
import CustomInput from './PickersCustomInput'
import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'

const PickersSpecificRange = () => {
  // States
  const [date, setDate] = useState<Date | null | undefined>(new Date())
  const [time, setTime] = useState<Date | null | undefined>(new Date())

  return (
    <Grid container spacing={6}>
      <Grid size={{xs:12}}>
        <AppReactDatepicker
          selected={date}
          id='specific-date'
          minDate={new Date()}
          maxDate={addDays(new Date(), 5)}
          onChange={(date: Date | null) => setDate(date)}
          customInput={<CustomInput label='Specific Date Range' />}
        />
      </Grid>
      <Grid size={{xs:12}}>
        <AppReactDatepicker
          showTimeSelect
          selected={time}
          id='specific-time'
          dateFormat='MM/dd/yyyy h:mm aa'
          onChange={(date: Date | null) => setTime(date)}
          minTime={setHours(setMinutes(new Date(), 0), 17)}
          maxTime={setHours(setMinutes(new Date(), 30), 20)}
          customInput={<CustomInput label='Specific Time' />}
        />
      </Grid>
    </Grid>
  )
}

export default PickersSpecificRange
