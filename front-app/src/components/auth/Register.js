import { NavLink } from "react-router-dom";

const Register = () =>{
    return(
        <>
           <section className="hero-area-outer">
               <div className="container">
                    <div className="row">
                         <div className="col-md-12 text-center">
                              <div className="hero-inner">
                                  <h3>Sign Up</h3>
                              </div>
                         </div>
                    </div>
               </div>
           </section>
           <section className="signin-area pb-5 pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="signin-inner-area">
                                <h3 className="signin-title text-center">Register</h3>
                                <form>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="user_name" name="user_name" placeholder="Name"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="user_email" name="user_email" placeholder="Email"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" id="user_password" name="user_password" placeholder="Password"/>
                                    </div>
                                    <span><button type="submit" class="btn btn-theme">Register</button></span>
                                    {/* <span className="text-right"><NavLink to="/" class="btn btn-theme">Forgotten Password?</NavLink></span> */}
                                </form>
                                <p className="text-center">-OR-</p>
                                <span className="social-icon"><button className="btn btn-success"><i class="fa-brands fa-facebook-f"></i>Facebook</button></span>
                                <span className="social-icon"><button className="btn btn-primary"><i class="fa-brands fa-google"></i>Google</button></span>
                                <p>If you have an Account. Please <NavLink to="/register">Sign In</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
           </section>
        </>
    )
}
export default Register;