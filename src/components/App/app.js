import React, { Component } from 'react';
import Header from '../Header/header';
import Carousel from '../Carousel/carousel';
import Services from '../Services/services';
import Portfolio from '../Portfolio/portfolio';
import Testimonials from '../Testimonials/testimonials';

export default class App extends Component {
    render() {
        return(
            <div>
                <Header />
                <Carousel />
                <Services />
                <Portfolio />
                <Testimonials />
            </div>
        )
    }
}