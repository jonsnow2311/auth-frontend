import React, { Component } from 'react';
import SignupPaper from '../../components/signup-components/signupPaper';

class SignupRoute extends Component {
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
                    background: 'linear-gradient(to right, #fccb77, #bd7a06)'
                }}>
                    <SignupPaper home={this.handleHome} />
                </div>
            </>
        );
    }
}

export default SignupRoute;
