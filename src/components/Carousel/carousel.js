import React, { Component } from 'react';
import './carousel.css';

export default class Carousel extends Component {

    render() {
        return(
            <div className="container-fluid carousel">
                <h1 className="text-center">Good Design Is Good Business</h1>
                <span className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies sagittis magnaa commodo.</span>
                   <p>Ut eget eros mauris, ut cursus urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.</p>
                <button>learn more</button>
            </div>
        )
    }
}