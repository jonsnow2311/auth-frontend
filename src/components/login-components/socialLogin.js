import React, { Component } from 'react';
import { GrFacebook, GrGoogle, GrGithub } from 'react-icons/gr';
import { Button } from '@material-ui/core';

class SocialLogin extends Component {
    render() {
        return (
            <>
                <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: '30px' }}>
                    <div>
                        <img
                            width="300px"
                            height="300px"
                            alt="brandLogo"
                            src={require('../../assets/logo.PNG')}
                            onClick={this.props.home}
                        />
                    </div>
                    <div>
                        <Button
                            startIcon={<GrGoogle color="white" />}
                            variant="contained"
                            style={{
                                background: '#de5246',
                                width: '50%',
                                marginTop: '20px',
                                marginBottom: '10px',
                                color: 'white',
                                padding: '15px'
                            }}>
                            Google
                            </Button>
                    </div>
                    <div>
                        <Button
                            startIcon={<GrFacebook color="white" />}
                            variant="contained"
                            color="secondary"
                            style={{
                                background: '#4267b2',
                                width: '50%',
                                marginTop: '10px',
                                marginBottom: '10px',
                                color: 'white',
                                padding: '15px'
                            }}>
                            Facebook </Button>
                    </div>
                    <div>
                        <Button
                            startIcon={<GrGithub color="white" />}
                            variant="contained"
                            color="secondary"
                            style={{
                                background: '#211f1f',
                                width: '50%',
                                marginTop: '10px',
                                marginBottom: '10px',
                                color: 'white',
                                padding: '15px'
                            }}>
                            Github </Button>
                    </div>

                </div>
            </>
        );
    }
}

export default SocialLogin;
