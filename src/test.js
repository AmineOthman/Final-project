import React, { Component } from 'react';
import Typed from 'typed.js'
import './test.css'

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    // $(".animated-text").typed({
    //     strings: [
    //         "fully responsive",
    //         "onepage template",
    //         "mobile first",
    //         "startup template"
    //     ],
    //     typeSpeed: 40,
    //     loop: true,
    // });
    render() {
        return (
          
            <section id="home">
            <div className="container">
              <div className="row">
                <div className="col-md-6 caption">
                  <h1>Welcome To Vortex</h1>
                  <h2>
                    I am
                    <span className="animated-text" id='asma'></span>
                    <span className="typed-cursor"></span>
                  </h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, quibusdam. Sit, quas tempora quia officia!</p>
                  <a href="#" className="btn btn-transparent">Get Started</a>
                  <a className="btn btn-blue popup-youtube" href="https://www.youtube.com/watch?v=Q8TXgCzxEnw">
                    <i className="material-icons">play_circle_filled</i>Watch Video
                  </a>
                </div>
                <div className="col-md-5 col-md-offset-1">
                  <form className="signup-form">
                    <h2 className="text-center">Signup Now</h2>
                    <hr />
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Full Name" required="required" />
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control" placeholder="Email Address" required="required" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="User Name" required="required" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Password" required="required" />
                    </div>
                    <div className="form-group text-center">
                      <button type="submit" className="btn btn-blue btn-block">Start Now</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
                                );
                           }
           typed=new Typed('.animated-text',{
    strings:['adel','asma','amine'],
    typeSpeed:30


})          
   }
                        

 export default Test;