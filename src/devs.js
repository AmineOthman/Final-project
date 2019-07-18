import React, {Component} from 'react';
import amine from './amine.png';
import asma from './asma.png';
import adel from './adel.png';
import './devs.css';

class Devs extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            // <div id="devs">
            
                   
                    <div className="devs">
                    <div className="dev1">
                    
                        <img src={amine} alt="amine"></img>
                        <div className="card">
                            <p>Amine Othmane <br></br>FullStack developer<br></br>Contacts:</p>
                            <a href="https://www.facebook.com/amine.othman"><i class="fa fa-facebook"></i></a>
                            <a href="#"><i class="fa fa-linkedin"></i></a>
                            <a href="https://github.com/AmineOthman"><i class="fa fa-github"></i></a>
                        </div>
                    </div>
                    

                    <div className="dev2">
                        <img src={asma} alt="asma"></img>
                        <div className="card">
                        <p>Asma Kheder <br></br>FullStack developer<br></br>Contacts:</p>
                            <a href="https://www.facebook.com/20.AsMa20"><i class="fa fa-facebook"></i></a>
                            <a href="#"><i class="fa fa-linkedin"></i></a>
                            <a href="https://github.com/khedher-asma"><i class="fa fa-github"></i></a>
                        </div>

                    </div>
                   
                    <div className="dev3">
                        <img src={adel} alt="adel"></img>
                        <div className="card">
                        <p>Adel ben salem <br></br>FullStack developer<br></br>Contacts:</p>
                            <a href="https://www.facebook.com/bokhla"><i class="fa fa-facebook"></i></a>
                            <a href="#"><i class="fa fa-linkedin"></i></a>
                            <a href="https://github.com/avatar92"><i class="fa fa-github"></i></a>
                        </div>

                    </div>
                    </div>
                    // </div>

            
         );
    }
}
 
export default Devs;