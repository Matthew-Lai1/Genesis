// MUI Imports
import Grid from '@mui/material/Grid2'

// Component Imports
import UserDetails from './UserDetails'
import UserPlan from './UserPlan'

const UserLeftOverview = () => {
  return (
    <Grid container>
      <Grid size={{ xs: 12 }}>
        <UserDetails />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <UserPlan />
      </Grid>
    </Grid>
  )
}

export default UserLeftOverview
