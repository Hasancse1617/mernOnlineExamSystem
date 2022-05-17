import { NavLink } from "react-router-dom";

const Login = () =>{
    return(
        <>
           <section className="hero-area-outer">
               <div className="container">
                    <div className="row">
                         <div className="col-md-12 text-center">
                              <div className="hero-inner">
                                  <h3>Sign In</h3>
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
                                <h3 className="signin-title text-center">Login</h3>
                                <form>
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="user_email" name="user_email" placeholder="Email"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" id="user_password" name="user_password" placeholder="Password"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="checkbox" name="remember_me" className="remember_me"/>
                                        <label htmlFor="remember_me">Remember me</label>
                                    </div>
                                    <span><button type="submit" class="btn btn-theme">Login</button></span>
                                    <span className="text-right"><NavLink to="/" class="btn btn-theme">Forgotten Password?</NavLink></span>
                                </form>
                                <p className="text-center">-OR-</p>
                                <span className="social-icon"><button className="btn btn-success"><i class="fa-brands fa-facebook-f"></i>Facebook</button></span>
                                <span className="social-icon"><button className="btn btn-primary"><i class="fa-brands fa-google"></i>Google</button></span>
                                <p>If you haven't an Account. Please <NavLink to="/register">Sign Up</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
           </section>
        </>
    )
}
export default Login;