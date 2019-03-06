import React, {Component} from 'react';
import './testimonials.css';
import man from '../../imgs/testimonials/man.png';
import woomen from '../../imgs/testimonials/woomen.png';


export default class Testimonials extends Component {

    render() {
        return(
            <div className="testimonials">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <hr/>
                            <div className="testimonials_inner d-flex flex-column align-items-center justify-content-center">
                                <h3>Testimonials</h3>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit mauris necip
                                    at lacus commodo suscipit praesent sollicitudin enim vel mirhon”</p>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="testimonials_icon d-flex flex-column align-items-center justify-content-center">
                                <p>Jon Doe / CEO of LoremIpsum</p>
                                <div className="wrapper">
                                    <div><img src={man} alt="man"/></div>
                                    <div><img src={woomen} alt="woomen"/></div>
                                    <div><img src={man} alt="man"/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

