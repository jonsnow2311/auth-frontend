import React, { Component } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';

class LoginForm extends Component {
    render() {
        return (
            <>
                <div
                    style={{
                        margin: '40px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingLeft: '20px',
                        paddingRight: '20px',
                        paddingBottom: '20px'
                    }}>
                    <div style={{ marginBottom: '20px' }}>
                        <Typography variant='h4' color='primary'>Log In</Typography>
                    </div>
                    <div style={{ marginTop: '40px', width: '100%' }}>
                        <TextField style={{ width: '100%' }} variant="outlined" name="email" color="primary" label="Your Email" />
                    </div>
                    <div style={{ marginTop: '40px', width: '100%' }}>
                        <TextField style={{ width: '100%' }} variant="outlined" name="password" color="primary" label="Your Password" />
                    </div>
                    <div style={{ marginTop: '40px', width: '100%' }}>
                        <Button style={{ width: '100%', padding: '12px' }} variant="contained" color="primary">Log In</Button>
                    </div>
                </div>
            </>
        );
    }
}

export default LoginForm;
