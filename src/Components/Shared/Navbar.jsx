
import { NavLink } from "react-router-dom";
import Container from "./Container";

const Navbar = () => {
    const link = <>
    <NavLink to={'/'} className='border-b-[2px] hover:border-b-[2px] hover:border-[#3AA39F] px-1 pb-[2px] '>Home</NavLink>
    <NavLink to={'/dashboard'} className='border-b-[2px] hover:border-b-[2px] hover:border-[#3AA39F] px-1 pb-[2px] '>Dashboard</NavLink>

    </>
    return (
        <div className="bg-[#292731] text-white">
          <Container>
          <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <div className="flex items-center gap-1">
      <img className="w-[35px]" src="/logo.png" alt="" />  
      <h2 className="text-xl">TaskFlow</h2>
    </div>
      
     </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal gap-5 menuItemLInk px-1">
     {link}
    </ul>
  </div>
  <div className="navbar-end">
  <button className='px-4 py-2  rounded-xl  border-none bg-[#3AA39F] text-white hover:bg-[#28706e]'>Get Started</button>
  </div>
</div> 
          </Container>
          
        </div>
    );
};

export default Navbar;