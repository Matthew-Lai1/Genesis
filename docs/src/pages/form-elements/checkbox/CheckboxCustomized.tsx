// MUI Imports
import { styled } from '@mui/material/styles'
import Checkbox from '@mui/material/Checkbox'
import type { CheckboxProps } from '@mui/material/Checkbox'

const BpIcon = styled('span')(({ theme }) => ({
  width: 16,
  height: 16,
  borderRadius: 3,
  backgroundColor: '#f5f8fa',
  'input:hover ~ &': {
    backgroundColor: '#ebf1f5',
    ...theme.applyStyles('dark', {
      backgroundColor: '#30404d'
    })
  },
  '.Mui-focusVisible &': {
    outlineOffset: 2,
    outline: '2px auto rgba(19,124,189,.6)'
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background: 'rgba(206,217,224,.5)',
    ...theme.applyStyles('dark', {
      background: 'rgba(57,75,89,.5)'
    })
  },
  boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  ...theme.applyStyles('dark', {
    backgroundColor: '#394b59',
    boxShadow: '0 0 0 1px rgb(16 22 26 / 40%)',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
  })
}))

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#137cbd !important',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  'input:hover ~ &': {
    backgroundColor: '#106ba3 !important'
  },
  '&:before': {
    width: 16,
    height: 16,
    content: '""',
    display: 'block',
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")"
  }
})

// Inspired by blueprintjs
const BpCheckbox = (props: CheckboxProps) => {
  return (
    <Checkbox
      {...props}
      disableRipple
      color='default'
      icon={<BpIcon />}
      checkedIcon={<BpCheckedIcon />}
      inputProps={{ 'aria-label': 'Checkbox demo' }}
      className='hover:bg-transparent'
    />
  )
}

const CheckboxCustomized = () => {
  return (
    <div>
      <BpCheckbox />
      <BpCheckbox defaultChecked />
      <BpCheckbox disabled />
    </div>
  )
}

export default CheckboxCustomized
