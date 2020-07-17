import React, { Component } from 'react';
import LocationOnSharpIcon from '@material-ui/icons/LocationOnSharp';
import CallSharpIcon from '@material-ui/icons/CallSharp';
import AlternateEmailSharpIcon from '@material-ui/icons/AlternateEmailSharp';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import './css/footer.css';
import { Typography } from '@material-ui/core';

class Footer extends Component {
    render() {
        return (
            <>
                <div style={{ marginTop: 'auto', width: '100%', backgroundColor: '#232f34' }}>
                    <footer >
                        <div className="grid">
                            <div
                                className="address"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: '20px',
                                    justifyContent: 'start',
                                    alignItems: 'center',
                                    padding: '10px'
                                }}>
                                <LocationOnSharpIcon
                                    color="secondary"
                                    style={{
                                        backgroundColor: '#4a6572',
                                        borderRadius: '50px',
                                        padding: '10px',
                                        fontSize: '50px'
                                    }} />
                                <div>
                                    <Typography color="secondary" variant='h6'>
                                        Room No. 329, Boys Hostel 1
                                </Typography>
                                    <Typography color="secondary" variant='h6'>
                                        ABV IIITM Gwalior , 474015
                                </Typography>
                                </div>
                            </div>
                            <div
                                className="tele"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: '20px',
                                    justifyContent: 'start',
                                    alignItems: 'center',
                                    padding: '10px'
                                }}>
                                <CallSharpIcon
                                    color="secondary"
                                    style={{
                                        backgroundColor: '#4a6572',
                                        borderRadius: '50px',
                                        padding: '10px',
                                        fontSize: '50px'
                                    }} />
                                <Typography color="secondary" variant='h6'>
                                    9140307041
                                </Typography>
                            </div>
                            <div
                                className="email"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: '20px',
                                    justifyContent: 'start',
                                    alignItems: 'center',
                                    padding: '10px'
                                }}>
                                <AlternateEmailSharpIcon
                                    color="secondary"
                                    style={{
                                        backgroundColor: '#4a6572',
                                        borderRadius: '50px',
                                        padding: '10px',
                                        fontSize: '50px'
                                    }} />
                                <Typography color="secondary" variant='h6'>
                                    abhijeetc4299@gmail.com
                                </Typography>
                            </div>
                            <div
                                className="aboutTitle"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: '20px',
                                    justifyContent: 'start',
                                    alignItems: 'end',
                                    padding: '10px'
                                }}>
                                <Typography
                                    color="secondary"
                                    variant='h6'
                                    style={{
                                        fontWeight: 'bolder'
                                    }}>
                                    ABOUT US
                                </Typography>
                            </div>
                            <div
                                className="aboutText"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: '20px',
                                    justifyContent: 'start',
                                    alignItems: 'center',
                                    paddingLeft: '10px'
                                }}>
                                <Typography color="secondary" variant='body1'>
                                    Voluptate adipisicing enim voluptate duis consectetur irure ad non aute. Commodo excepteur laborum sunt sint dolor cillum nostrud consectetur aliqua eiusmod excepteur deserunt. Eu adipisicing laborum culpa dolor ex. Reprehenderit sunt non nulla et tempor pariatur irure aute aliqua occaecat. Laboris ipsum exercitation laborum adipisicing amet Lorem proident et culpa ullamco. Elit duis do irure minim Lorem. Fugiat enim sint aliquip cillum laborum cupidatat.
                                </Typography>
                            </div>
                            <div
                                className="sociallinks"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: '20px',
                                    justifyContent: 'start',
                                    alignItems: 'center',
                                    padding: '10px'
                                }}>
                                <FacebookIcon
                                    color="secondary"
                                    style={{
                                        backgroundColor: '#4a6572',
                                        borderRadius: '50px',
                                        padding: '10px',
                                        fontSize: '50px'
                                    }} />
                                <TwitterIcon
                                    color="secondary"
                                    style={{
                                        backgroundColor: '#4a6572',
                                        borderRadius: '50px',
                                        padding: '10px',
                                        fontSize: '50px'
                                    }} />
                                <LinkedInIcon
                                    color="secondary"
                                    style={{
                                        backgroundColor: '#4a6572',
                                        borderRadius: '50px',
                                        padding: '10px',
                                        fontSize: '50px'
                                    }} />
                                <GitHubIcon
                                    color="secondary"
                                    style={{
                                        backgroundColor: '#4a6572',
                                        borderRadius: '50px',
                                        padding: '10px',
                                        fontSize: '50px'
                                    }} />
                            </div>
                        </div>
                        <div
                            style={{
                                width: '100%',
                                background: '#344955',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '10px'
                            }}>
                            <Typography variant='h6' color='secondary'>
                                Copyright
                            </Typography>
                            <Typography
                                variant='h6'
                                color='secondary'
                                style={{
                                    borderRight: '2px solid #f79e02',
                                    borderLeft: '2px solid #f79e02',
                                    fontFamily: 'MuseoModerno',
                                    marginLeft: '20px',
                                    marginRight: '20px',
                                    paddingLeft: '20px',
                                    paddingRight: '20px'
                                }}>
                                abhi TECH
                            </Typography>
                            <Typography variant='h6' color='secondary'>
                                2020
                            </Typography>
                        </div>
                    </footer>
                </div>
            </>
        );
    }
}

export default Footer;
