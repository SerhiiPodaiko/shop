import React, { Component } from 'react';
import Header from '../Header/header';
import Carousel from '../Carousel/carousel';
import Services from '../Services/services';

export default class App extends Component {
    render() {
        return(
            <div>
                <Header />
                <Carousel />
                <Services />
            </div>
        )
    }
}