import React, { Component } from 'react'

function About() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Us</span>
                    <h2 className="colorlib-heading">Who Are We?</h2>
                    <p>LAHAM Project Consultancy is an innovative management consultancy offering unique project management approach to the niche market of multi-media projects in the Entertainment industry.</p>
                    <p>We offer expertise in multimedia projects, advanced knowledge in project delivery. We provide advisory and consultancy services to clients. Our Project Management Framework Is effective in implementing these services.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What we do?</span>
                <h2 className="colorlib-heading">Here are some of our expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Digital Integration</h3>
                    <p>The integration brings customers easier access to content they desire to watch. Our innovative solution packages empower traditional film production adapting to modern streaming ecosystem.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Multimedia Consultancy</h3>
                    <p>We aim to leverage our extensive knowledge and experience in this field, along with a team of experts, to offer tailored solutions to meet the unique needs of each client. Our goal is to be recognized as the go-to consultancy for multimedia businesses seeking to enhance their operations and achieve long-term success.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-user2" />
                </span>
                <div className="desc">
                    <h3>Superb Professionalism</h3>
                    <p>We believe each colleague In our organisation has their personal expertise In an area of work. We utilise and enhance that skill so that our team Is effective and successful In managing multimedia projects in all contexts.</p>
                </div>
                </div>
            </div>
            {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
            </div>
        </div>
        </section>
      </div>
    )
}

export default About;