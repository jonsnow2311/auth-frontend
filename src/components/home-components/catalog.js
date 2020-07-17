import React, { Component } from 'react';
import './css/catalog.css';

class Catalog extends Component {
    render() {
        return (
            <>
                <div className="imageGrid">
                    <div className="image1">
                        <img src={require('../../assets/tajmahal.jpg')} alt='catalogImage' width="100%" height="300px" />
                    </div>
                    <div className="image2">
                        <img src={require('../../assets/city.jpg')} alt='catalogImage' width="100%" height="300px" />
                    </div>
                    <div className="image3">
                        <img src={require('../../assets/tomb.jpg')} alt='catalogImage' width="100%" height="300px" />
                    </div>
                    <div className="image4">
                        <img src={require('../../assets/konark.jpg')} alt='catalogImage' width="100%" height="300px" />
                    </div>
                    <div className="image5">
                        <img src={require('../../assets/mosque.jpg')} alt='catalogImage' width="100%" height="300px" />
                    </div>
                    <div className="image6">
                        <img src={require('../../assets/redleaves.jpg')} alt='catalogImage' width="100%" height="300px" />
                    </div>
                </div>
            </>
        );
    }
}

export default Catalog;
