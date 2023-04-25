import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/image-profile.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">LAHAM</a></h1>
              <h3>Project Management Consultancy</h3>
              <span className="email"><i className="icon-mail"></i> lahampm@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About US</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#timeline" data-nav-section="timeline">Products</a></li>
                  <li>Activities</li>
                  <li><a href="#" data-nav-section="blog">Testimonial</a></li>
                </ul>
              </div>
            </nav>
            
          
          </aside>
        </div>
      </div>
    )
  }
}
