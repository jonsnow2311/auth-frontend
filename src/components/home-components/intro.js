import React, { Component } from 'react';
import { Typography, Button } from '@material-ui/core';
import './css/intro.css';

class Intro extends Component {
    render() {
        return (
            <>
                <div className="rootIntro">
                    <div style={{ width: '70%' }}>
                        <Typography variant='h2' color='primary' style={{ fontWeight: 'bold' }}>
                            Frontend Authentication Project
                    </Typography>
                    </div>
                    <div style={{ width: '50%' }}>
                        <Typography variant='h5' color='primary' style={{ padding: '50px' }}>
                            Some features include logging , signing up , forget password , change password.
                    </Typography>
                    </div>
                    <div>
                        <Button
                            variant="contained"
                            color="secondary"
                            style={{
                                width: '200px',
                                height: '50px',
                                fontSize: '25px',
                                marginRight: '10px',
                                border: '2px solid #344955'
                            }}
                            onClick={this.props.login}>
                            LOGIN
                        </Button>
                        <Button
                            variant="outlined"
                            color="primary"
                            style={{
                                width: '200px',
                                height: '50px',
                                fontSize: '25px',
                                border: '2px solid #344955',
                                marginLeft: '10px'
                            }}
                            onClick={this.props.signup}>
                            SIGN UP
                        </Button>
                    </div>
                </div>
            </>
        );
    }
}

export default Intro;
