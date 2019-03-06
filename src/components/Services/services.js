import React, {Component} from 'react';
import './services.css';
import icon_first from '../../imgs/services/icon_first.png';
import icon_second from '../../imgs/services/icon_second.png';
import icon_third from '../../imgs/services/icon_third.png';
import icon_fourth from '../../imgs/services/icon_fourth.png';

export default class Services extends Component {

    render() {
        return(
            <div className="services">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 col-6">
                            <div className="services_info">
                                <img src={icon_first} alt="laptop"/>
                                <h5>Web Design</h5>
                                <p>Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.
                                    Mauris nec ipsum at lacus
                                    commodo suscipit. <span>Details...</span></p>
                            </div>
                        </div>
                        <div className="col-sm-3 col-6">
                            <div className="services_info">
                                <img src={icon_second} alt="search"/>
                                <h5>Search Optimization</h5>
                                <p>Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.
                                    Mauris nec ipsum at lacus
                                    commodo suscipit. <span>Details...</span></p>
                            </div>
                        </div>
                        <div className="col-sm-3 col-6">
                            <div className="services_info">
                                <img src={icon_third} alt="online"/>
                                <h5>Online Shop</h5>
                                <p>Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.
                                    Mauris nec ipsum at lacus
                                    commodo suscipit. <span>Details...</span></p>
                            </div>
                        </div>
                        <div className="col-sm-3 col-6">
                            <div className="services_info">
                                <img src={icon_fourth} alt="like"/>
                                <h5>Social Media</h5>
                                <p>Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.
                                    Mauris nec ipsum at lacus
                                    commodo suscipit. <span>Details...</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

