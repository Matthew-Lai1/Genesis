// MUI Imports
import Grid from '@mui/material/Grid2'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Chip from '@mui/material/Chip'

// Type Imports
import type { TeamsTabType } from '@/types/pages/profileTypes'

// Component Imports
import OptionMenu from '@core/components/option-menu'
import Link from '@components/Link'

const Teams = ({ data }: { data?: TeamsTabType[] }) => {
  return (
    <Grid container>
      {data &&
        data.map((item, index) => {
          return (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
              <Card>
                <CardContent>
                  <div className='flex items-center justify-between gap-2'>
                    <div className='flex items-center'>
                      <Avatar src={item.avatar} className='bs-[38px] is-[38px]' />
                      <Typography>{item.title}</Typography>
                    </div>
                    <div className='flex items-center'>
                      <IconButton size='small'>
                        <i className='ri-star-line' />
                      </IconButton>
                      <OptionMenu
                        options={[
                          'Rename Team',
                          'View Details',
                          'Add to Favorite',
                          { divider: true },
                          { text: 'Delete Team', menuItemProps: { className: 'text-error' } }
                        ]}
                      />
                    </div>
                  </div>
                  <Typography>{item.description}</Typography>
                  <div className='flex items-center justify-between flex-wrap'>
                    <AvatarGroup
                      total={item.extraMembers ? item.extraMembers + 3 : 3}
                      sx={{ '& .MuiAvatar-root': { width: '2rem', height: '2rem', fontSize: '1rem' } }}
                      className='items-center pull-up'
                    >
                      {item.avatarGroup.map((person, index) => {
                        return (
                          <Tooltip key={index} title={person.name}>
                            <Avatar src={person.avatar} alt={person.name} />
                          </Tooltip>
                        )
                      })}
                    </AvatarGroup>
                    <div className='flex items-center'>
                      {item.chips.map((chip, index) => (
                        <Link key={index}>
                          <Chip size='small' label={chip.title} color={chip.color} />
                        </Link>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
    </Grid>
  )
}

export default Teams
