import React, { Component } from 'react';
import './header.css';
import square from '../../imgs/header/square.png';
import circle from '../../imgs/header/circle.png';

export default class Header extends Component {
    render() {
        return(
                <header>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="logo">
                                    <img src={circle} alt="circle"/>
                                    <img src={square} alt="square"/>
                                    <span>Your Logo</span>
                                </div>
                            </div>
                            <div className="col-sm-7">
                                <div className="navigation">
                                    <nav>
                                        <ul className="list-group list-group-horizontal">
                                            <li className="list-group-item active"><a href="#">Home</a></li>
                                            <li className="list-group-item"><a href="#">Portfolio</a></li>
                                            <li className="list-group-item"><a href="#">About</a></li>
                                            <li className="list-group-item"><a href="#">Contact</a></li>
                                            <li className="list-group-item"><a href="#">Blog</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-sm-2">
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