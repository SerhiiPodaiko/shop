import React, {Component} from 'react';
import './carousel.css';
import WOW from "wowjs";

export default class Carousel extends Component {

    componentDidMount(){
        new WOW.WOW().init();
    }


    render() {
        return(
            <div className="container-fluid carousel wow slideInUp delay-1s">
                <h1 className="text-center">Good Design Is Good Business</h1>
                <span className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies sagittis magnaa commodo.</span>
                   <p>Ut eget eros mauris, ut cursus urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.</p>
                <button>learn more</button>
            </div>
        )
    }
}