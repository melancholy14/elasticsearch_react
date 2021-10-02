import React, { useState } from 'react';

import { Button, Box, TextField } from '@mui/material';

function LoginForm() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <Box component='form' autoComplete='off' sx={{
            '& .MuiTextField-root': { my: 1 },
          }}>
            <div>
                <TextField fullWidth required id='email' label='EMAIL' type='email' value={email} onChange={(ele) => setEmail(ele.target.value)} />
            </div>
            <div>
                <TextField fullWidth required id='password' label='PASSWORD' type='password' value={password} onChange={(ele) => setPassword(ele.target.value)} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'end', marginTop: '8px' }}>
                <Button size='large' variant='contained'>LOGIN</Button>
            </div>
        </Box>      
    );
}

export default LoginForm;