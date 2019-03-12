import React, {Component} from 'react';
import './contact_fetch.css';
import twitter from '../../imgs/contact_fetch/twitter.png';
import facebook from '../../imgs/contact_fetch/facebook.png';
import tube from '../../imgs/contact_fetch/tube.png';
import vk from '../../imgs/contact_fetch/vk.png';
import linkedin from '../../imgs/contact_fetch/linkedin.png';
import google from '../../imgs/contact_fetch/google.png';


export default class Contact_fetch extends Component {

    render() {
        return(
            <div className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="text-center">GET IN TOUCH</h2>
                            <p className="text-center">Lorem ipsum dolor sit amet, dui ac bibendum fringilla, massa augue mattis enim, quis volutpat augue nisi vitae nibh. Proin nibh tortor, rutrum luctus euismod eu, rutrum eget nunc. Nam commodo tellus quis ante tempus quis auctor enim suscipit. Donec sit amet feugiat justo. Nulla vel nibh et erat consequat sollicitudin. Vivamus egestas erat ac arcu sagittis in tincidunt purus pharetra. Maecenas viverra suscipit arcu, ac adipiscing odio vehicula nec. Vestibulum non enim ac dui interdum tempus nam tortor odio.
                            </p>
                        </div>
                        <div className="col-sm-6 col-12">
                            <div className="form">
                                <span>Lorem ipsum dolor sit amet, consectetur * sign amentu kurmanci.</span>
                                <div id="user">
                                    <p>NAME *</p>
                                    <input type="text"/>
                                </div>
                                <div id="user">
                                    <p>E-MAIL ADDRESS *</p>
                                    <input type="email"/>
                                </div>
                                <div id="user">
                                    <p>SUBJECT *</p>
                                    <input type="text"/>
                                </div>
                                <div>
                                    <p>MESSAGE *</p>
                                    <input id="message" type="text"/>
                                </div>
                                <div>
                                    <button>Send</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-12">
                            <div className="map">
                                <h2 className="text-center">FOLLOW US ON SOCIAL MEDIA</h2>
                                <div>
                                    <img src={twitter} alt="twiiter"/>
                                    <img src={facebook} alt="facebook"/>
                                    <img src={tube} alt="tube"/>
                                    <img src={vk} alt="vk"/>
                                    <img src={linkedin} alt="linkedin"/>
                                    <img src={google} alt="google"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}