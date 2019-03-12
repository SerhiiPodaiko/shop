import React, {Component} from 'react';
import './about_fetch.css';
import web from '../../imgs/about_fetch/web.png';
import phone from '../../imgs/about_fetch/phone.png';
import commercial from '../../imgs/about_fetch/commercial.png';
import media from '../../imgs/about_fetch/media.png';


export default class About_fetch extends Component {

    render() {
        return(
            <div className="about_fetch">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="text-center">WHO ARE WE?</h2>
                            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a faucibus elit. Nulla facilisi. Ut eu erat metus. Nulla diam venenatis at scelerisque et, mattis quis mi. Maurisac consequat velit. Nullam eget massa vitae sem ullamcorper conse quat. In bibendum orci quis magna facilisis cursus. Maecenas rutrum felis vel nibh ultrices quis tincidunt ipsum dolor sit amet dniof ortigonta alamond druntilortu.</p>
                            <p className="text-center">Sed lobortis, dui ac bibendum fringilla, massa augue mattis enim, quis volutpat augue nisi vitae nibh. Proin nibh tortor, rutrum luctus euismod eu, rutrum eget nunc. Nam commodo tellus quis ante tempus quis auctor enim suscipit. Donec sit amet feugiat justo. Nulla vel nibh et erat consequat sollicitudin. Vivamus egestas erat ac arcu sagittis in tincidunt purus pharetra. Maecenas viverra suscipit arcu, ac adipiscing odio vehicula nec.
                                Vestibulum non enim ac dui interdum tempus nam tortor odio.</p>
                            <h1 className="text-center">we   belive   in   good   design</h1>
                        </div>
                            <div className="col-sm-3 col-12">
                                <div className="about_fetch_info d-flex flex-column justify-content-sm-center align-items-sm-center">
                                    <div className="about_fetch_info_icon"><img src={web} alt="web"/></div>
                                    <h4 className="text-center">Web Design</h4>
                                    <p className="text-center">Lorem ipsum dolor sit ametconsec tetur adipiscing elit. Aliquam nulla nibh, fermentum nec interdum in, ultrices eget sapien. Ut sit amet vehicula risus. Nulla sed erat eu nisl porta bibendum. Sed tellus felis. </p>
                                </div>
                            </div>
                            <div className="col-sm-3 col-12">
                                <div className="about_fetch_info d-flex flex-column justify-content-sm-center align-items-sm-center">
                                    <div className="about_fetch_info_icon"><img src={phone} alt="phone"/></div>
                                    <h4 className="text-center">Phone App</h4>
                                    <p className="text-center">Lorem ipsum dolor sit ametconsec tetur adipiscing elit. Aliquam nulla nibh, fermentum nec interdum in, ultrices eget sapien. Ut sit amet vehicula risus. Nulla sed erat eu nisl porta bibendum. Sed tellus felis. </p>
                                </div>
                            </div>
                            <div className="col-sm-3 col-12">
                                <div className="about_fetch_info d-flex flex-column justify-content-sm-center align-items-sm-center">
                                    <div className="about_fetch_info_icon"><img src={commercial} alt="commercial"/></div>
                                    <h4 className="text-center">Commercial</h4>
                                    <p className="text-center">Lorem ipsum dolor sit ametconsec tetur adipiscing elit. Aliquam nulla nibh, fermentum nec interdum in, ultrices eget sapien. Ut sit amet vehicula risus. Nulla sed erat eu nisl porta bibendum. Sed tellus felis. </p>
                                </div>
                            </div>
                            <div className="col-sm-3 col-12">
                                <div className="about_fetch_info d-flex flex-column justify-content-sm-center align-items-sm-center">
                                    <div className="about_fetch_info_icon"><img src={media} alt="media"/></div>
                                    <h4 className="text-center">Media Planing</h4>
                                    <p className="text-center">Lorem ipsum dolor sit ametconsec tetur adipiscing elit. Aliquam nulla nibh, fermentum nec interdum in, ultrices eget sapien. Ut sit amet vehicula risus. Nulla sed erat eu nisl porta bibendum. Sed tellus felis. </p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}