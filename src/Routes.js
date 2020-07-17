import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './routes/home-routes/home';
import SignupRoute from './routes/signup-routes/signupRoute';
import LoginRoute from './routes/login-routes/loginRoute';

class Routes extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/signup" component={SignupRoute} />
                    <Route path="/login" component={LoginRoute} />
                </Switch>
            </>
        );
    }
}


export default Routes;
