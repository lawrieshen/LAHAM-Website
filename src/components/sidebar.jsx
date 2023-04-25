import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/LAHAM_logo.png)'}} />
              <h1 id="colorlib-logo"><a href="index.html">LAHAM</a></h1>
              <h3>Project Management Consultancy</h3>
              <span className="email"><i className="icon-mail"></i> lahampm@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About US</a></li>
                  <li>Products</li>
                  <li><a href="#activities" data-nav-section="activities">Activities</a></li>
                  <li>Testimonial</li>
                  <li>PMF</li>
                </ul>
              </div>
            </nav>
            
          
          </aside>
        </div>
      </div>
    )
  }
}
