import React, { FormEvent, useState } from 'react';
import { useMutation } from 'react-query';

import { Button, Box, TextField, Typography } from '@mui/material';

import request from '../utils/request';
import { setUid } from '../utils/cookies';

type LoginFormProps = {
    onLogin: () => void;
}

function LoginForm({ onLogin }: LoginFormProps) {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const mutation = useMutation(() => {
        return request('users/login', {
            method: 'post',
            headers: {
                'Authorization': `${email}:${password}`,
            }
        });
    }, {
        onError: (err) => {
            console.error(err);
        },
        onSuccess: (response) => {
            const { data } = response;
            
            setUid(data.id);

            onLogin();
        }
    });

    const login = (event: FormEvent) => {
        event.preventDefault();

        mutation.mutate();
    }

    return (
        <Box
            component='form'
            autoComplete='off'
            sx={{
                '& .MuiTextField-root': { my: 1 },
            }}
            onSubmit={login}
        >
            <div>
                <TextField fullWidth required id='email' label='EMAIL' type='email' value={email} onChange={(ele) => setEmail(ele.target.value)} />
            </div>
            <div>
                <TextField fullWidth required id='password' label='PASSWORD' type='password' value={password} onChange={(ele) => setPassword(ele.target.value)} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'end', marginTop: '8px' }}>
                {mutation.error && (<Typography variant='body1'>
                    Something went wrong. Try again.
                </Typography>)}
                <Button type='submit' size='large' variant='contained'>
                    {mutation.isLoading ? 'Loading...' : 'LOGIN'}
                </Button>
            </div>
        </Box>      
    );
}

export default LoginForm;