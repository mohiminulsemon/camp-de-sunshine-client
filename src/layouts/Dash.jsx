import { Outlet } from "react-router-dom";
import Nav from "../Pages/Nav";
import Footer from "../Pages/Footer";


const Dash = () => {
    return (
       <div>
        <Nav></Nav>
        <Outlet></Outlet>
        <Footer></Footer>
       </div>
    );
};

export default Dash;