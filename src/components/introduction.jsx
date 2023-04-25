import React, { Component } from 'react'

function Introduction() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/laham-bg-1.avif)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1  style={{color: "#fff", textShadow: "1px 1px 2px grey"}}>Hi! <br />We are LAHAM.</h1>
                          {/*<nav>
                            <p><a className="btn btn-primary btn-learn" href="#about" data-nav-section="about" rel="noopener noreferrer" style={{color: "#fff", border: "1px solid #fff", textShadow: "1px 1px 2px grey", boxShadow: "1px 1px 2px grey"}}>About Us <i className="icon-book" /></a></p>
                          </nav>*/}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/laham-bg-2.avif)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1 style={{color: "#fff", textShadow: "1px 1px 2px grey"}}>We're experts at <br /> MULTIMEDIA PROJECTS</h1>
                          {/*<p><a className="btn btn-primary btn-learn" href="#blog" target="_blank" rel="noopener noreferrer" style={{color: "#fff", border: "1px solid #fff", textShadow: "1px 1px 2px grey", boxShadow: "1px 1px 2px grey"}}><b>View Product </b><i className="icon-briefcase3" /></a></p>*/}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/laham-bg-3.avif)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1 style={{color: "#fff", textShadow: "1px 1px 2px grey"}}>We <br/>Transform ... </h1>
                          {/*<p><a className="btn btn-primary btn-learn" href="https://medium.com/@lawrenceshen1213" target="_blank" rel="noopener noreferrer" style={{color: "#fff", border: "1px solid #fff", textShadow: "1px 1px 2px grey", boxShadow: "1px 1px 2px grey"}}>See our PMF and Lifecycles<i className="icon-book" /></a></p>*/}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
}

export default Introduction;