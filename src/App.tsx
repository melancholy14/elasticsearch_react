import React, { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Box, Divider, Grid } from '@mui/material';

import LoginForm from './containers/LoginForm';
import QuizForm from './containers/QuizForm';
import ReviewTable from './containers/ReviewTable';
import Header from './containers/Header';

import { getUid } from './utils/cookies';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    }
  }
});

enum SCREEN {
  LOGIN='login',
  QUIZ='quiz',
  REVIEW='review'
}

function App() {
  const [currentScreen, setCurrentScreen] = useState<SCREEN>(SCREEN.LOGIN);
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const uid = getUid();

  useEffect(() => {
    setIsLogin(!!uid);

    if (uid) {
      setCurrentScreen(SCREEN.QUIZ);
    } else {
      setCurrentScreen(SCREEN.LOGIN);
    }
  }, [uid]);

  const logout = () => {
    setIsLogin(false);
    setCurrentScreen(SCREEN.LOGIN);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Header isLogin={isLogin} onLogout={logout} />
        <Divider sx={{ my: 1 }} />
        <Box component="section" sx={{ minHeight: '50vh' }}>
          <Grid container alignItems='center' justifyContent='center'>
            <Grid item xs={6}>
              {currentScreen === SCREEN.LOGIN && <LoginForm onLogin={() => setCurrentScreen(SCREEN.QUIZ)} />}
              {currentScreen === SCREEN.QUIZ && <QuizForm onReview={() => setCurrentScreen(SCREEN.REVIEW)} />}
              {currentScreen === SCREEN.REVIEW && <ReviewTable />}
            </Grid>
          </Grid>
        </Box>
      </div>
    </QueryClientProvider>
  );
}

export default App;
