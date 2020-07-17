import React, { Component } from 'react';
import NavBar from '../../components/home-components/navbar';
import Footer from '../../components/home-components/footer';
import '../../components/home-components/css/home.css';
import Intro from '../../components/home-components/intro';
import Catalog from '../../components/home-components/catalog';

class Home extends Component {
    handleLogin = () => {
        this.props.history.push("/login");
    }
    handleSignUp = () => {
        this.props.history.push("signup");
    }
    render() {
        return (
            <>
                <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                    <NavBar login={this.handleLogin} signup={this.handleSignUp} />
                    <Intro login={this.handleLogin} signup={this.handleSignUp} />
                    <Catalog />
                    <Footer />
                </div>
            </>
        );
    }
}

export default Home;
