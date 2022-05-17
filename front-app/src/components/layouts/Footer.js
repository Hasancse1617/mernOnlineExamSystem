import { useEffect, useState } from "react";

const Footer = () =>{
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 400){
                setShowTopBtn(true);
            }else{
                setShowTopBtn(false);
            }
        })
    },[]);
    const scrollToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return(
        <>
           <footer>
                <section className='footer-area'>
                    <div className='container'>
                        <div className='row'>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="footer-widget">
                            <div className="sidebar-widget-wrapper">
                                <div className="footer-widget-header clearfix">
                                    <h3>Contact Us</h3>
                                </div>
                                <div className="textwidget">                                       
                                    <i className="fa-solid fa-envelope fa-contact"></i> <p><a href="#">support@donation.com</a><br/><a href="#">helpme@donation.com</a></p>
                                    <i className="fa fa-location-arrow fa-contact"></i> <p>Road-2,3/A East Shibgonj<br/>Sylhet-3100, Bangladesh</p>
                                    <i className="fa fa-phone fa-contact"></i> <p>Office:&nbsp; (+880) 0823 560 433<br/>Cell:&nbsp; (+880) 0723 161 343</p>                              
                                </div>
                            </div>
                        </div>
                        </div> 
                        <div className="col-md-4 col-sm-12 col-xs-12">
                        <div className="footer-widget clearfix">
                            <div className="sidebar-widget-wrapper">
                                <div className="footer-widget-header clearfix">
                                    <h3>Support Links</h3>
                                </div>
                                <ul className="footer-useful-links">
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-caret-right fa-footer"></i>
                                            Thalassemia
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-caret-right fa-footer"></i>
                                            Cell Elofrosis
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-caret-right fa-footer"></i>
                                            Myelodysasia
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-caret-right fa-footer"></i>
                                            Blood Count
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-caret-right fa-footer"></i>
                                            Hemolytimia
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-caret-right fa-footer"></i>
                                            Ychromas Eosis 
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-caret-right fa-footer"></i>
                                            Hyrcoagulable
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-caret-right fa-footer"></i>
                                            Thrombo Xtosis
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-caret-right fa-footer"></i>
                                            Sicklenemiaxs
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-caret-right fa-footer"></i>
                                            Aplastic Anemia
                                        </a>
                                    </li>                                       
                                </ul>
                            </div>      
                        </div>           
                        </div>   
                        <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="footer-widget">
                            <div className="sidebar-widget-wrapper">
                                <div className="footer-widget-header clearfix">
                                    <h3>Subscribe Us</h3>
                                </div>
                                <p>Signup for regular newsletter and stay up to date with our latest news.</p>
                                <div className="footer-subscription">
                                    <p>
                                        <input id="mc4wp_email" className="form-control" required="" placeholder="Enter Your Email" name="EMAIL" type="email"/>
                                    </p>
                                    <p>
                                        <input className="btn btn-default" value="Subscribe Now" type="submit"/>
                                    </p>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                </section>
                <section className="footer-contents">
                    <div className="container">
                        <div className="row clearfix"> 
                            <div className="col-md-12 col-sm-12 text-center">
                                <p className="copyright-text"> Copyright 2018 - Online Exam by HasanLab. All Rights Reserved. </p>
                            </div>
                        </div>                                   
                    </div>
                </section>
            </footer>
           {showTopBtn? <a id="backTop" onClick={scrollToTop} className="custom" >Back To Top</a>:''}
        </>
    )
}
export default Footer;