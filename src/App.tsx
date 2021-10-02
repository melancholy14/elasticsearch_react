import React from 'react';
import { Typography, Divider, Grid } from '@mui/material';

function App() {
  return (
    <div>
      <header>
        <Grid container alignItems='center' justifyContent='center'>
          <Typography variant="h1">Quiz Time</Typography>
        </Grid>
      </header>
      <Divider />
      <section>
        <Grid container alignItems='center' justifyContent='center'>
          <Grid item xs={6}>
            <Typography variant='body1'>This is for logging in</Typography>
          </Grid>
        </Grid>
      </section>
    </div>
  );
}

export default App;
