import React from 'react';
import { Typography, Divider, Grid } from '@mui/material';

import LoginForm from './containers/LoginForm';

function App() {
  return (
    <div>
      <header>
        <Grid container alignItems='center' justifyContent='center'>
          <Typography variant="h1">Quiz Time</Typography>
        </Grid>
      </header>
      <Divider sx={{ my: 1 }} />
      <section style={{ minHeight: '50vh' }}>
        <Grid container alignItems='center' justifyContent='center'>
          <Grid item xs={6}>
            <LoginForm />
          </Grid>
        </Grid>
      </section>
    </div>
  );
}

export default App;
