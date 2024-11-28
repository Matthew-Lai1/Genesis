// MUI Imports
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid2'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

const FaqFooter = () => {
  return (
    <>
      <div className='flex justify-center items-center flex-col text-center'>
        <Chip label='Question' color='primary' />
        <Typography>You still have a question?</Typography>
        <Typography>
          If you cannot find a question in our FAQ, you can always contact us. We will answer you shortly!
        </Typography>
      </div>
      <Grid container>
        <Grid size={{ xs: 12, md: 6 }}>
          <div className='flex justify-center items-center flex-col rounded bg-actionHover'>
            <Avatar variant='rounded'>
              <i className='ri-phone-fill' />
            </Avatar>
            <Typography>+ (810) 2548 2568</Typography>
            <Typography>We are always happy to help!</Typography>
          </div>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <div className='flex justify-center items-center flex-col rounded bg-actionHover'>
            <Avatar variant='rounded'>
              <i className='ri-mail-line' />
            </Avatar>
            <Typography>hello@help.com</Typography>
            <Typography>Best way to get answer faster!</Typography>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default FaqFooter
