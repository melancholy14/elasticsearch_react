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

    const { mutate: usersLogin, isLoading, error } = useMutation(() => {
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
            const { id } = response;
            
            setUid(id);

            onLogin();
        }
    });

    const login = (event: FormEvent) => {
        event.preventDefault();

        usersLogin();
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
            <Box>
                <TextField fullWidth required id='email' label='EMAIL' type='email' value={email} onChange={(ele) => setEmail(ele.target.value)} />
            </Box>
            <Box>
                <TextField fullWidth required id='password' label='PASSWORD' type='password' value={password} onChange={(ele) => setPassword(ele.target.value)} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end', marginTop: '8px' }}>
                {error && (<Typography sx={{ color: 'red', mr: 'auto' }}>
                    Given email and password are incorrect. Try again.
                </Typography>)}
                <Button type='submit' size='large' variant='contained'>
                    {isLoading ? 'LOADING...' : 'LOGIN'}
                </Button>
            </Box>
        </Box>      
    );
}

export default LoginForm;