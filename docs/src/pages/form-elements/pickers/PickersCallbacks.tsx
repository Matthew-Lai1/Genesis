// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid2'

// Third-party Imports
import { toast } from 'react-toastify'

// Component Imports
import CustomInput from './PickersCustomInput'
import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'

const PickersCallbacks = () => {
  // States
  const [date, setDate] = useState<Date | null | undefined>(new Date())

  const handlePickerCallback = (msg: string) => {
    toast(msg, { autoClose: 2000 })
  }

  return (
    <Grid container spacing={6}>
      <Grid size={{xs:12, lg:6}}>
        <AppReactDatepicker
          selected={date}
          id='callback-open'
          dateFormat='MM/dd/yyyy'
          onChange={(date: Date | null) => setDate(date)}
          customInput={<CustomInput label='Open & Closed' />}
          onCalendarOpen={() => handlePickerCallback(`Selected Date: ${new Date(date || '').toLocaleDateString()}`)}
          onCalendarClose={() => handlePickerCallback(`Selected Date: ${new Date(date || '').toLocaleDateString()}`)}
        />
      </Grid>
      <Grid size={{xs:12, lg:6}}>
        <AppReactDatepicker
          selected={date}
          id='callback-blur'
          onChange={(date: Date | null) => setDate(date)}
          customInput={<CustomInput label='Blur' />}
          onBlur={() => handlePickerCallback('Picker Closed')}
        />
      </Grid>
      <Grid size={{xs:12, lg:6}}>
        <AppReactDatepicker
          selected={date}
          id='callback-change'
          customInput={<CustomInput label='onChange' />}
          onChange={(date: Date | null) => {
            setDate(date)
            handlePickerCallback(`Selected Date: ${new Date(date || '').toLocaleDateString()}`)
          }}
        />
      </Grid>
    </Grid>
  )
}

export default PickersCallbacks
