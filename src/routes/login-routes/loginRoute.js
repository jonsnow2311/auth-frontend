import React, { Component } from 'react';
import LoginPaper from '../../components/login-components/loginPaper';

class LoginRoute extends Component {
    handleHome = () => {
        this.props.history.push("/home");
    }
    render() {
        return (
            <>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                    background: 'linear-gradient(to right,#fccb77, #bd7a06)'
                }}>
                    <LoginPaper home={this.handleHome} />
                </div>
            </>
        );
    }
}

export default LoginRoute;
