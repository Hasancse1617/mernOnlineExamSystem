import { NavLink } from "react-router-dom";

const Contact = () =>{
    return(
        <>
           <section className="hero-area-outer">
               <div className="container">
                    <div className="row">
                         <div className="col-md-12 text-center">
                              <div className="hero-inner">
                                  <h3>Contact Us</h3>
                                  <NavLink to="/">Home</NavLink> / Contact
                              </div>
                         </div>
                    </div>
               </div>
           </section>
           <section className="contact-area pb-5 pt-5">
               <div className="container">
                   <div className="row">
                       <div className="col-md-6">
                           <div className="contact-form-block">
                               <h3 className="contact-title">Say hello to us</h3>
                               <form role="form" id="contact-form">
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="user_name" name="user_name" placeholder="Name"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="user_email" name="user_email" placeholder="Email"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="email_subject" name="email_subject" placeholder="Subject"/>
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" rows="5" name="email_message" id="email_message" placeholder="Message"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-theme">Send Now</button>
                                    </div>
                                </form>
                           </div>
                       </div>
                       <div className="col-md-6"></div>
                   </div>
               </div>
           </section>
        </>
    )
}
export default Contact;