import React from 'react';

import { Box, Typography, Button } from '@mui/material';

import { setUid } from '../utils/cookies';

type HeaderProps = {
    isLogin: boolean;
    onLogout: () => void;
};

function Header({ isLogin, onLogout }: HeaderProps) {

    const logout = () => {
      setUid('');
  
      onLogout();
    }

    return (
        <header>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="h1">Quiz Time</Typography>
          </Box>
          {isLogin && (
            <Box sx={{ display: 'flex', justifyContent: 'end', mr: 2 }}>
              <Button variant='contained' color='secondary' onClick={logout}>LOGOUT</Button>
            </Box>
          )}
        </header>
    );
}

export default Header;
