// MUI Imports
import type { Theme } from '@mui/material/styles'

const chip: Theme['components'] = {
  MuiChip: {
    styleOverrides: {
      root: ({ ownerState }) => ({
        ...(ownerState.variant === 'tonal' && {
          backgroundColor: `var(--mui-palette-${ownerState.color}-lightOpacity)`,
          color: `var(--mui-palette-${ownerState.color}-main)`,
          '&.Mui-focusVisible': {
            backgroundColor: `var(--mui-palette-${ownerState.color}-mainOpacity)`
          },
          '& .MuiChip-deleteIcon': {
            color: `rgb(var(--mui-palette-${ownerState.color}-mainChannel) / 0.7)`,
            '&:hover': {
              color: `var(--mui-palette-${ownerState.color}-main)`
            }
          },
          '&.MuiChip-clickable:hover': {
            backgroundColor: `var(--mui-palette-${ownerState.color}-main)`,
            color: 'var(--mui-palette-common-white)'
          }
        })
      })
    }
  }
}

export default chip
