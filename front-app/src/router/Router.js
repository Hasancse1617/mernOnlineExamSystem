import { Route, Routes as Switch } from "react-router-dom";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Contact from "../components/contact/Contact";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import Home from "../components/layouts/Home";

const Router = () =>{
    return(
        <>
            <Header/>
            <Switch>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
            </Switch>
            <Footer/>
        </>
    )
}
export default Router;