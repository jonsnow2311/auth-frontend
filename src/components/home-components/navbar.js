import React, { Component } from 'react';
import { Typography, Button, AppBar, Toolbar, Avatar } from '@material-ui/core';
import './css/navbar.css';

class NavBar extends Component {
    render() {
        return (
            <>
                <AppBar>
                    <Toolbar style={{ flexGrow: '1', background: '#232f34' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', flexGrow: '1', marginLeft: '100px', marginRight: '100px' }}>
                            <Avatar style={{
                                height: '40px',
                                width: '40px'
                            }} alt="brand Logo" src={require('../../assets/logoIcon.PNG')} variant="square" />
                            <Typography variant="h5" color="secondary" style={{ flexGrow: '1', marginLeft: '10px', fontFamily: 'MuseoModerno' }}>
                                abhi TECH
                        </Typography>
                            <Button color="secondary" variant="outlined" style={{ marginRight: '20px' }} onClick={this.props.login}>Login</Button>
                            <Button color="secondary" variant="outlined" onClick={this.props.signup}>Signup</Button>
                        </div>
                    </Toolbar>
                </AppBar>
            </>
        );
    }
}

export default NavBar;
