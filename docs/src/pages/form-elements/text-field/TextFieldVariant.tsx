// MUI Imports
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid2";

const TextFieldVariant = () => {
  return (
    <Grid container spacing={6}>
      <Grid size={{xs:12, md:4}}>
        <TextField fullWidth id="outlined-basic" label="Outlined" />
      </Grid>
      <Grid size={{xs:12, md:4}}>
      <TextField fullWidth id="filled-basic" label="Filled" variant="filled" />
      </Grid>
      <Grid size={{xs:12, md:4}}>
      <TextField
        fullWidth
        id="standard-basic"
        label="Standard"
        variant="standard"
      />
      </Grid>
    </Grid>
  );
};

export default TextFieldVariant;
