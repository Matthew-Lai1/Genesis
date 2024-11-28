// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid2'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import LinearProgress from '@mui/material/LinearProgress'
import type { ButtonProps } from '@mui/material/Button'

// Type Imports
import type { PricingPlanType } from '@/types/pages/pricingTypes'
import type { ThemeColor } from '@core/types'

// Component Imports
import ConfirmationDialog from '@components/dialogs/confirmation-dialog'
import UpgradePlan from '@components/dialogs/upgrade-plan'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'

const CurrentPlan = ({ data }: { data?: PricingPlanType[] }) => {
  const buttonProps = (children: string, color: ThemeColor, variant: ButtonProps['variant']): ButtonProps => ({
    children,
    variant,
    color
  })

  return (
    <Card>
      <CardHeader title='Current Plan' />
      <CardContent>
        <Grid container>
          <Grid size={{ xs: 12, md: 6 }}>
            <div>
              <Typography>Your Current Plan is Basic</Typography>
              <Typography>A simple start for everyone</Typography>
            </div>
            <div>
              <Typography>Active until Dec 09, 2021</Typography>
              <Typography>We will send you a notification upon Subscription expiration</Typography>
            </div>
            <div>
              <div className='flex items-center'>
                <Typography>$199 Per Month</Typography>
                <Chip color='primary' label='Popular' size='small' />
              </div>
              <Typography>Standard plan for small to medium businesses</Typography>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Alert severity='warning'>
              <AlertTitle>We need your attention!</AlertTitle>
              Your plan requires update
            </Alert>
            <div className='flex items-center justify-between'>
              <Typography>Days</Typography>
              <Typography>12 of 30 Days</Typography>
            </div>
            <LinearProgress variant='determinate' value={40} />
            <Typography>18 days remaining until your plan requires update</Typography>
          </Grid>
          <Grid size={{ xs: 12 }} className='flex gap-4 flex-wrap'>
            <OpenDialogOnElementClick
              element={Button}
              elementProps={buttonProps('Upgrade Plan', 'primary', 'contained')}
              dialog={UpgradePlan}
              dialogProps={{ data: data }}
            />
            <OpenDialogOnElementClick
              element={Button}
              elementProps={buttonProps('Cancel Subscription', 'secondary', 'outlined')}
              dialog={ConfirmationDialog}
              dialogProps={{ type: 'unsubscribe' }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CurrentPlan
