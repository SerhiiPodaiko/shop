import React, {Component} from 'react';
import './portfolio.css';
import icon_photo from '../../imgs/portfolio/icon_photo.png';


export default class Portfolio extends Component {

    render() {
        return(
            <div className="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-8">
                            <div className="portfolio_awesome">
                                <h3>Our Portfolio Awesome</h3>
                            </div>
                        </div>
                        <div className="col-sm-6 col-4">
                            <div className="portfolio_btn d-flex justify-content-end">
                                <button className="btn-primary">More Works</button>
                            </div>
                        </div>
                        <div className="col-sm-4 col-4">
                            <div className="portfolio_inner">
                                <div className="grey_bloc">
                                    <img src={icon_photo} alt="photo"/>
                                </div>
                            </div>
                            <div>
                                <h5>Lorem Ipsum Dolar Sit Amet</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Mauris nec ipsum at lacus commodo suscipit.</p>
                            </div>
                        </div>
                        <div className="col-sm-4 col-4">
                            <div className="portfolio_inner">
                                <div className="grey_bloc">
                                    <img src={icon_photo} alt="photo"/>
                                </div>
                            </div>
                            <div>
                                <h5>Lorem Ipsum</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscinglit.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-4 col-4">
                            <div className="portfolio_inner">
                                <div className="grey_bloc">
                                    <img src={icon_photo} alt="photo"/>
                                </div>
                            </div>
                            <div>
                                <h5>Ipsum Amet Dolar Sit </h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Mauris nec ipsum at lacus commodo suscipit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

