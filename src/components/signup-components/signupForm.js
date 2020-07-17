import React, { Component } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';

class SignUpForm extends Component {
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
                        <Typography variant='h4' color='primary'>Register</Typography>
                    </div>
                    <div style={{ marginTop: '40px', width: '100%' }}>
                        <TextField style={{ width: '100%' }} variant="outlined" name="name" color="primary" label="Your Name" />
                    </div>
                    <div style={{ marginTop: '40px', width: '100%' }}>
                        <TextField style={{ width: '100%' }} variant="outlined" name="email" color="primary" label="Your Email" />
                    </div>
                    <div style={{ marginTop: '40px', width: '100%' }}>
                        <TextField style={{ width: '100%' }} variant="outlined" name="password" color="primary" label="Your Password" />
                    </div>
                    <div style={{ marginTop: '40px', width: '100%' }}>
                        <Button style={{ width: '100%', padding: '12px' }} variant="contained" color="primary">Sign Up</Button>
                    </div>
                </div>
            </>
        );
    }
}

export default SignUpForm;
