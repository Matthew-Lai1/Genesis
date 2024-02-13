// MUI Imports
import Autocomplete from '@mui/material/Autocomplete'

const options = ['Option 1', 'Option 2']

const AutocompleteCustomInput = () => {
  return (
    <Autocomplete
      options={options}
      id='autocomplete-custom-input'
      renderInput={params => (
        <div ref={params.InputProps.ref}>
          <input type='text' {...params.inputProps} />
        </div>
      )}
      className='inline-block'
      sx={{
        '& input': {
          width: 200,
          borderWidth: 2,
          backgroundColor: 'background.paper',
          color: theme => theme.palette.getContrastText(theme.palette.background.paper)
        }
      }}
    />
  )
}

export default AutocompleteCustomInput
