// MUI Imports
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'

const ButtonsSizes = () => {
  return (
    <div className='flex gap-4 flex-col'>
      <div className='flex gap-4 items-center'>
        <Button variant='text' size='small'>
          Small
        </Button>
        <Button variant='text' size='medium'>
          Medium
        </Button>
        <Button variant='text' size='large'>
          Large
        </Button>
      </div>
      <div className='flex gap-4 items-center'>
        <Button variant='outlined' size='small'>
          Small
        </Button>
        <Button variant='outlined' size='medium'>
          Medium
        </Button>
        <Button variant='outlined' size='large'>
          Large
        </Button>
      </div>
      <div className='flex gap-4 items-center'>
        <Button variant='tonal' size='small'>
          Small
        </Button>
        <Button variant='tonal' size='medium'>
          Medium
        </Button>
        <Button variant='tonal' size='large'>
          Large
        </Button>
      </div>
      <div className='flex gap-4 items-center'>
        <Button variant='contained' size='small'>
          Small
        </Button>
        <Button variant='contained' size='medium'>
          Medium
        </Button>
        <Button variant='contained' size='large'>
          Large
        </Button>
      </div>
      <div className='flex gap-4 items-center'>
        <IconButton aria-label='capture screenshot' color='primary' size='small'>
          <i className='tabler-aperture text-xl' />
        </IconButton>
        <IconButton aria-label='capture screenshot' color='primary'>
          <i className='tabler-aperture' />
        </IconButton>
        <IconButton aria-label='capture screenshot' color='primary' size='large'>
          <i className='tabler-aperture text-[28px]' />
        </IconButton>
      </div>
    </div>
  )
}

export default ButtonsSizes
