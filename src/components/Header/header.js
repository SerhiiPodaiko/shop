import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import './header.css';
import square from '../../imgs/header/square.png';
import circle from '../../imgs/header/circle.png';
import WOW from 'wowjs';


export default class Header extends Component {

    componentDidMount(){
        new WOW.WOW().init();
    }

    render() {
        return(
                <header className="wow slideInDown">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 wow slideInLeft delay-1s">
                                <div className="logo">
                                    <img src={circle} alt="circle"/>
                                    <img src={square} alt="square"/>
                                    <span>Your Logo</span>
                                </div>
                            </div>
                            <div className="col-md-7 col-sm-7 col-6 wow slideInDown delay-1s">
                                <div className="navigation">
                                    <nav>
                                        <ul className="list-group list-group-horizontal">
                                            <li className="list-group-item active"><NavLink exact to="/header">Home</NavLink></li>
                                            <li className="list-group-item"><NavLink to="/portfolio_fetch">Portfolio</NavLink></li>
                                            <li className="list-group-item"><NavLink to="/about_fetch">About</NavLink></li>
                                            <li className="list-group-item"><NavLink to="/contact_fetch">Contact</NavLink></li>
                                            <li className="list-group-item"><NavLink to="#">Blog</NavLink></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-5 col-6 wow slideInRight delay-1s">
                                <div className="search">
                                    <span>Search</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
        )
    }
}