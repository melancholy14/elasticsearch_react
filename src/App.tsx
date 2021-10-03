import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Box, Typography, Divider, Grid } from '@mui/material';

import LoginForm from './containers/LoginForm';
import QuizForm from './containers/QuizForm';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    }
  }
});

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
        <Box component="section" sx={{ minHeight: '50vh' }}>
          <Grid container alignItems='center' justifyContent='center'>
            <Grid item xs={6}>
              {!isLogin && <LoginForm onLogin={() => setIsLogin(true)} />}
              {isLogin && <QuizForm />}
            </Grid>
          </Grid>
        </Box>
      </div>
    </QueryClientProvider>
  );
}

export default App;
