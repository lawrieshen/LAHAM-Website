import React from "react";

function Contact() {
    return(
        <section data-section="contact">
            <div className="colorlib-narrow-content">
                <h2 className="colorlib-heading" style={{fontSize:'24px'}}>Contact Us</h2>
            
                <div class="contact-info">
                    <div class="address">
                    <h3 style={{fontFamily: '"Quicksand", Arial, sans-serif', 
                                fontSize: '24px', 
                                fontWeight: '500',}}>Address</h3>
                    <p>Camperdown, NSW 2006</p>
                    </div>
                    
                    <div class="phone">
                    <h3 style={{fontFamily: '"Quicksand", Arial, sans-serif', 
                                fontSize: '24px', 
                                fontWeight: '500',}}>Phone</h3>
                    <p>(123) 456-7890</p>
                    </div>
                    
                    <div class="email">
                    <h3 style={{fontFamily: '"Quicksand", Arial, sans-serif', 
                                fontSize: '24px', 
                                fontWeight: '500',}}>Email</h3>
                    <p>info@lahampm.com</p>
                    </div>
                    <div class="InternationlOffice">
                    <h3 style={{fontFamily: '"Quicksand", Arial, sans-serif', 
                                fontSize: '24px', 
                                fontWeight: '500',}}>Internationl Offices</h3>
                    <p style={{paddingLeft:'12.5px'}}>We have interantional offices to augement potential tool of clients</p>
                    <img src='images/internationl-office.png' alt='international office' style={{maxWidth:'100%', paddingBottom:'20px'}}></img>
                    </div>
                </div>
                
                <div class="map" style={{marginBottom:'20px'}}>
                    <h3 style={{fontFamily: '"Quicksand", Arial, sans-serif', 
                                fontSize: '24px', 
                                fontWeight: '500',}}>Australia Office Location</h3>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.042070806406!2d151.1847744759459!3d-33.88857032008365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b1d4ab9ef1d9%3A0x1d017d69037a07c0!2sThe%20University%20of%20Sydney!5e0!3m2!1sen!2sau!4v1682414232641!5m2!1sen!2sau" width="600" height="450" style={{border:"0", maxWidth: "100%"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="inquiry" style={{paddingBottom:'20px', marginBottom:'20px'}} >
                    <h3 style={{fontFamily: '"Quicksand", Arial, sans-serif', 
                                fontSize: '24px', 
                                fontWeight: '500',}}>Inquiry</h3>
                    <form style={{ display: "flex", flexDirection: "column", alignItems: "center" }} action="submit-form.php" method="POST">
                    <label style={{ marginBottom: "1rem", fontWeight: "bold" }} htmlFor="name">Name</label>
                    <input style={{ padding: "0.5rem", fontSize: "1rem", borderRadius: "0.3rem", border: "none", boxShadow: "0 6px 12px rgba(0,0,0,0.1)", marginBottom: "1rem", width: "100%", maxWidth: "30rem" }} type="text" id="name" name="name" required />

                    <label style={{ marginBottom: "1rem", fontWeight: "bold" }} htmlFor="email">Email</label>
                    <input style={{ padding: "0.5rem", fontSize: "1rem", borderRadius: "0.3rem", border: "none", boxShadow: "0 6px 12px rgba(0,0,0,0.1)", marginBottom: "1rem", width: "100%", maxWidth: "30rem" }} type="email" id="email" name="email" required />

                    <label style={{ marginBottom: "1rem", fontWeight: "bold" }} htmlFor="subject">Subject</label>
                    <input style={{ padding: "0.5rem", fontSize: "1rem", borderRadius: "0.3rem", border: "none", boxShadow: "0 6px 12px rgba(0,0,0,0.1)", marginBottom: "1rem", width: "100%", maxWidth: "30rem" }} type="text" id="subject" name="subject" required />

                    <label style={{ marginBottom: "1rem", fontWeight: "bold" }} htmlFor="message">Message</label>
                    <textarea style={{ padding: "0.5rem", fontSize: "1rem", borderRadius: "0.3rem", border: "none", boxShadow: "0 6px 12px rgba(0,0,0,0.1)", marginBottom: "1rem", width: "100%", maxWidth: "30rem" }} id="message" name="message" required></textarea>

                    <button style={{ padding: "0.5rem 1rem", fontSize: "1rem", borderRadius: "0.3rem", backgroundColor: "#007bff", color: "#fff", border: "none", boxShadow: "0 2px 4px rgba(0,0,0,0.1)", cursor: "pointer", width: "100%", maxWidth: "30rem" }} type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>

    )
}

export default Contact;