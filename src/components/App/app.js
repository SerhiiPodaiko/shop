import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import Header from '../Header/header';
import Carousel from '../Carousel/carousel';
import Services from '../Services/services';
import Portfolio from '../Portfolio/portfolio';
import Testimonials from '../Testimonials/testimonials';
import Footer from '../Footer/footer';

import Portfolio_fetch from '../../fetch/Portfolio_fetch/portfolio_fetch';
import About_fetch from '../../fetch/About_fetch/about_fetch';
import Contact_fetch from '../../fetch/Contact_fetch/contact_fetch';

export default class App extends Component {
    render() {
        return(
            <BrowserRouter>
                <div>
                    <Header />
                    <Carousel />
                    <Services />
                    <Portfolio />
                    <Route path="/portfolio_fetch" component={Portfolio_fetch}/>
                    <Route path="/about_fetch" component={About_fetch}/>
                    <Route path="/contact_fetch" component={Contact_fetch}/>
                    <Testimonials />
                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
}