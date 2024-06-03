// Next Imports
import Link from 'next/link'
import { useParams } from 'next/navigation'

// MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Type Imports
import type { Locale } from '@/configs/i18n'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

const NotAuthorized = () => {
  const { lang: locale } = useParams()

  return (
    <div className='flex bs-full items-center justify-center'>
      <div className='flex items-center flex-col text-center'>
        <Typography>401</Typography>
        <Typography>You are not authorized! 🔐</Typography>
        <Typography>You don&#39;t have permission to access this page. Go Home!</Typography>
        <div>Image Here</div>
        <Button href={getLocalizedUrl('/', locale as Locale)} component={Link} variant='contained'>
          Back to Home
        </Button>
      </div>
    </div>
  )
}

export default NotAuthorized
