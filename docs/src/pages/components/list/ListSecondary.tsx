// MUI Imports
import List from '@mui/material/List'
import Avatar from '@mui/material/Avatar'
import ListItem from '@mui/material/ListItem'
import IconButton from '@mui/material/IconButton'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'

import useBaseUrl from '@docusaurus/useBaseUrl'

const ListSecondary = () => {
  return (
    <List>
      <ListItem
        secondaryAction={
          <IconButton edge='end'>
            <i className='ri-add-line' />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar src={useBaseUrl('/images/avatars/2.png')} alt='Caroline Black' />
        </ListItemAvatar>
        <ListItemText primary='Caroline Black' secondary='Sweet dessert brownie.' />
        
      </ListItem>
      <ListItem
       secondaryAction={
        <IconButton edge='end'>
          <i className='ri-add-line' />
        </IconButton>
      }
      >
        <ListItemAvatar>
          <Avatar src={useBaseUrl('/images/avatars/1.png')} alt='Alfred Copeland' />
        </ListItemAvatar>
        <ListItemText primary='Alfred Copeland' secondary='Pudding pie tiramisu.' />
      </ListItem>
      <ListItem
       secondaryAction={
        <IconButton edge='end'>
          <i className='ri-add-line' />
        </IconButton>
      }
      >
        <ListItemAvatar>
          <Avatar src={useBaseUrl('/images/avatars/8.png')} alt='Celia Schneider' />
        </ListItemAvatar>
        <ListItemText primary='Celia Schneider' secondary='Muffin pie chupa chups.' />
        
      </ListItem>
    </List>
  )
}

export default ListSecondary
