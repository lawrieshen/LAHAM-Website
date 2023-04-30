import React, { Component } from 'react';

function Demo() {
    return(
        <section data-section='demo'>
            <div className="colorlib-narrow-content">
                <div className="row">
                <div className="col-md-12">
                    <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                    <div className="col-md-12">
                        <div className="about-desc" style={{display:'block',alignItems:'flex-start'}}>
                            <span className="heading-meta">Solution</span>
                            <h2 className="colorlib-heading">Project Dashboard Demo</h2>
                            <p>We keep an eye on your projects for you! Our project dashboard allows you to monitor your project's schedule and cost 24/7.</p>
                            <div className='figma-embed'>
                                <iframe style={{border: '1px', solid: 'rgba(0, 0, 0, 0.1)'}} width="100%" height="auto" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FQZ0E1d8G7hWCUzoEjPSOrG%2FLAHAM-Dashboard%3Fnode-id%3D251-13558%26scaling%3Dcontain%26page-id%3D0%253A1%26starting-point-node-id%3D251%253A13558" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                </div>
        </section>
    )
}

export default Demo;