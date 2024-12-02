// MUI Imports
import { styled } from '@mui/material/styles'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    // backgroundColor: 'var(--mui-palette-customColors-trackBg)'
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
    ...theme.applyStyles('dark', {
      backgroundColor: '#308fe8'
    })
  }
}))

const ProgressLinearCustomization = () => {
  return <BorderLinearProgress variant='determinate' value={70} />
}

export default ProgressLinearCustomization
