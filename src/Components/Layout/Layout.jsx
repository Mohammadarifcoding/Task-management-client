import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Container from "../Shared/Container";

const Layout = () => {
  return (
    <div className="max-w-[1700px] mx-auto">
<Navbar></Navbar>
        <Outlet></Outlet>
    </div>

        

    
  );
};

export default Layout;
