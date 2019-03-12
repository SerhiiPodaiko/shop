import React, {Component} from 'react';
import './portfolio_fetch.css';
import blueway from '../../imgs/portfolio_fetch/blueway.png';
import theme from '../../imgs/portfolio_fetch/theme.png';
import template from '../../imgs/portfolio_fetch/template.png';
import mearket from '../../imgs/portfolio_fetch/mearket.png';
import lorem from '../../imgs/portfolio_fetch/lorem.png';
import seyyahil from '../../imgs/portfolio_fetch/seyyahil.png';


export default class Portfolio_fetch extends Component {

    render() {
        return(
            <div className="portfolio_fetch">
                <h1 className="text-center">TASTE IT THE GOOD PROJECTS</h1>
                <nav id="nav" className="d-flex justify-content-center">
                    <ul className="list-group d-flex justify-content-center list-group-horizontal">
                        <li className="list-group-item"><a href="#">ALL</a></li>
                        <li className="list-group-item"><a href="#">WEB DESIGN</a></li>
                        <li className="list-group-item"><a href="#">ADVERTISTING</a></li>
                        <li className="list-group-item"><a href="#">IDENTITY</a></li>
                        <li className="list-group-item"><a href="#">ILLUSTRATION</a></li>
                        <li className="list-group-item"><a id="btn_category" href="#">CATEGORY</a></li>
                    </ul>
                </nav>

                <div className="clients">
                    <div className="container-fluid">
                        <h2 className="text-center">CLIENTS</h2>
                        <marquee scrollamount="15" infinite>
                            <div>
                                <img src={blueway} alt="blueway"/>
                                <img src={theme} alt="theme"/>
                                <img src={template} alt="template"/>
                                <img src={mearket} alt="mearket"/>
                                <img src={lorem} alt="lorem"/>
                                <img src={seyyahil} alt="seyyahil"/>
                            </div>
                        </marquee>
                    </div>
                </div>
            </div>
        )
    }
}