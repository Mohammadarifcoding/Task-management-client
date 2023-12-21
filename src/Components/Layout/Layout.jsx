import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Container from "../Shared/Container";
import { useState } from "react";

const Layout = () => {
  const location = useLocation()

  console.log(location.pathname)
  return (
    <div className="max-w-[1700px] bg-[#161420] mx-auto">
     {
                location.pathname == '/dashboard' || (location.pathname == '/login' || location.pathname == '/register') ? '':<Navbar ></Navbar>
            }
            
        <Outlet></Outlet>
    </div>

        

    
  );
};

export default Layout;
