import React, { Component } from 'react';
import LoginForm from './loginForm';
import SocialLogin from './socialLogin';
import { Paper } from '@material-ui/core';
import './css/loginPaper.css';

class LoginPaper extends Component {
    render() {
        return (
            <>
                <Paper style={{ width: '70%' }} elevation={18}>
                    <div className="rootLogin">
                        <div className="left">
                            <SocialLogin home={this.props.home} />
                        </div>
                        <div className="right" >
                            <LoginForm />
                        </div>
                    </div>
                </Paper>
            </>
        );
    }
}

export default LoginPaper;
