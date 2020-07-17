import React, { Component } from 'react';
import { Paper } from '@material-ui/core';
import SocialSignUp from './socialSignup';
import SignUpForm from './signupForm';
import './css/signupPaper.css';

class SignUp extends Component {
    render() {
        return (
            <>
                <Paper style={{ width: '70%' }} elevation={18}>
                    <div className="rootSignup">
                        <div className="left">
                            <SocialSignUp home={this.props.home} />
                        </div>
                        <div className="right" >
                            <SignUpForm />
                        </div>
                    </div>
                </Paper>
            </>
        );
    }
}

export default SignUp;
