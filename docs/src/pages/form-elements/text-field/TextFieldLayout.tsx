// MUI Imports
import Grid from "@mui/material/Grid2";

// Component Imports
import CustomTextField from "@core/components/mui/TextField";

const TextFieldLayout = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12 }}>
        <CustomTextField fullWidth
          label="Full width"
          id="outlined-full-width"
          className='mbe-4'
        />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <CustomTextField
          label="None"
          className='mie-4'
          id="outlined-margin-none"
          defaultValue="Margin None"
          helperText="Some important text"
        />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
      <CustomTextField
        label="Dense"
        margin="dense"
        className='mie'
        id="outlined-margin-dense"
        defaultValue="Margin Dense"
        helperText="Some important text"
      />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
      <CustomTextField
        label="Normal"
        margin="normal"
        id="outlined-margin-normal"
        defaultValue="Margin Normal"
        helperText="Some important text"
      />
      </Grid>
    </Grid>
  );
};

export default TextFieldLayout;
