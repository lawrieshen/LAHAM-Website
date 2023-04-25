import React from "react";

function PMF(){
    return(
        <section data-section="PMF">
            <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc" style={{display:'block',alignItems:'flex-start'}}>
                        <span className="heading-meta">Solution</span>
                        <h2 className="colorlib-heading">Project Management Framwork</h2>
                        <img src='images/PMF.png' alt='PMF' style={{maxWidth:'100%', paddingBottom:'20px',}}></img>
                            <div style={{paddingLeft:'12.5px'}}>
                                <p>Our innovative Project Management Framework is built on Scrum Agile Project Management approach, so film production can be transited into a digital environment seamlessly.</p>
                                <p>We strive to deliver the revenue to our clients as fast as possible by introducing value prioritisation and sprints. </p>
                                <p>A Scrum agile framework would be a good fit for a multimedia agency consultancy because it provides a flexible approach that can easily adapt to changing client needs and market trends. The iterative and collaborative nature of agile methodology allows for continuous feedback and improvement, leading to more efficient and effective project outcomes. Additionally, the emphasis on teamwork and communication aligns well with the collaborative nature of multimedia projects.</p>
                                <p>If deemed necessary, this PMF can be customised to align with the specific requirements of your business.</p>
                            </div>

                        <h2 className="colorlib-heading">Project Governance Structure</h2>
                        <img src='images/PGS.png' alt='PGS' style={{maxWidth:'100%', paddingBottom:'20px',}}></img>
                        <div style={{paddingLeft:'12.5px'}}>
                            <p>Our professional will integrated into your organisation and keep in tocuh to ensure all projects are in compliance with our PMF to delvier successful outcomes!</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
}

export default PMF;