import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Typography, Divider, Grid } from '@mui/material';

import LoginForm from './containers/LoginForm';

const queryClient = new QueryClient();

function App() {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <QueryClientProvider client={queryClient}>
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
              {!isLogin && <LoginForm onLogin={() => setIsLogin(true)} />}
              {isLogin && <Typography variant='body1'>You Logged in!</Typography>}
            </Grid>
          </Grid>
        </section>
      </div>
    </QueryClientProvider>
  );
}

export default App;
