import React, {Component} from 'react';
import './footer.css';
// import man from '../../imgs/testimonials/man.png';



export default class Footer extends Component {

    render() {
        return(
           <footer>
               <div className="container">
                   <div className="row">
                       <div className="col-sm-3 col-12">
                           <div className="footer_info">
                               <h3>Twitter FEEDs</h3>
                               <p>Check out this great theme item</p>
                               <p style={{color: "#2190c1"}}>http://tadjalskfj.com</p>
                               <p>2 weeks ago</p>
                               <hr/>
                               <p>Check out this great theme item</p>
                               <p style={{color: "#2190c1"}}>http://tadjalskfj.com</p>
                               <p>2 weeks ago</p>
                               <hr/>
                               <p>Check out this great theme item</p>
                               <p style={{color: "#2190c1"}}>http://tadjalskfj.com</p>
                               <p>2 weeks ago</p>
                           </div>
                       </div>
                       <div className="col-sm-3 col-12">
                           <div className="footer_info">
                               <h3>NEWSLETTER</h3>
                               <p>Lorem ipsum dolor sit amet, consectetur adip
                                    iscing elit. Ut ultricies sagittis magna a comm.
                                    Ut eget eros mauris, ut cursus urna.</p>
                               <hr/>
                               <label style={{color: "#2190c1"}} htmlFor="email">Your Email Address</label>
                               <input id="email" type="email"/>
                               <button>Sign Up</button>
                           </div>
                       </div>
                       <div className="col-sm-3 col-12">
                           <div className="footer_info">
                               <h3>recent projects</h3>
                               <p>Sketchy Business Card</p>
                               <p style={{color: "#2190c1"}}>http://tadjalskfj.com</p>
                               <p>2 weeks ago</p>
                               <hr/>
                               <p>Message Boards in Nature</p>
                               <p style={{color: "#2190c1"}}>http://tadjalskfj.com</p>
                               <p>2 weeks ago</p>
                               <hr/>
                               <p>Website Design Kit</p>
                               <p style={{color: "#2190c1"}}>http://tadjalskfj.com</p>
                               <p>2 weeks ago</p>
                           </div>
                       </div>
                       <div className="col-sm-3 col-12">
                           <div className="footer_info">
                               <h3>Contact</h3>
                               <p>1 - 000 - 000-0000</p>
                               <p>1 - 000 - 000-0000</p>
                               <p>1 - 000 - 000-0000</p>
                               <p>1 - 000 - 000-0000</p>
                               <p>abcdefg@hijs.dfh</p>
                               <p>fjashfaf@jkfs.ckd</p>
                           </div>
                       </div>
                   </div>
               </div>
           </footer>
        )
    }
}

