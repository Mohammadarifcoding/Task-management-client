import React, { useState } from 'react';
import { FaHome } from "react-icons/fa";
import Drawer from 'react-modern-drawer'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoNotificationsCircle } from "react-icons/io5";

//import styles 👇
import 'react-modern-drawer/dist/index.css'
import { Link, NavLink, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    return (

        <>
                <div className='lg:flex hidden bg-[#161420] min-h-screen '>
            <div className='lg:w-[22%]  fixed top-0 h-full w-full lg:block hidden border-r-[5px] border-[#3e3857]'>
                <div className='flex justify-center items-center gap-4 mt-[40px] px-[40px]'>
                    <img src="/images/User.png" className='rounded-full xl:w-[70px] w-[60px]' alt="" />
                    <p className='xl:text-xl text-lg font-semibold text-white'>Mohammad Arif</p>
                </div>

                <div className='px-[20px] mt-16 dashboarItem'>
                    <NavLink to='/dashboard/dash'>
                    <button className='flex p-[20px] w-full rounded-xl  bg-[#272A30] border-[#272A30] border text-white gap-3 text-lg font-medium'> <img src="/images/dashBoardIcon.svg" alt="" />Dashboard</button>
                    </NavLink>
                        <NavLink to={'/dashboard/notify'}>
                      <button className='flex p-[20px] mt-4 w-full rounded-xl  bg-[#272A30] border-[#272A30] border text-white items-center gap-3 text-lg font-medium'> <IoNotificationsCircle className="text-3xl"/> Notifications</button>
                          </NavLink>
              
                     <div className="divider divide  text-white">OR</div>
                      <Link to={'/'}>
                       <button className='flex p-[20px] w-full rounded-xl  border-[#272A30] hover:bg-[#282931] border text-white gap-3 text-lg font-medium'> <FaHome className="text-3xl"></FaHome>  Home </button>
                      </Link>
              
            
                </div>
            </div>
            <div className='lg:w-[78%] ml-auto w-full  '>
              <Outlet></Outlet>
            </div>
            
        </div>




        {/* Mobile Dashboard */}

     <div className='flex flex-col lg:hidden'>
       
     <div className="navbar bg-[#161420] h-[68px] text-white  border-b-[5px] border-[#3e3857]">
    <div onClick={toggleDrawer} className='text-2xl text-white  hover:bg-[#292731] py-3 px-4 rounded-lg'>
   {
    isOpen ? '' : <RxHamburgerMenu  />
   } 
      </div> 
</div>


<div className='min-h-[calc(100vh-68px)] bg-[#161420]'>
    <Outlet></Outlet>
</div>



    
     </div>

     <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                
                style={{
                    backgroundColor:'#161420',
                    
                }}
                className='bg-[#161420] border-l-4 border-[#3e3857]'
            >
                <div className='flex justify-center items-center gap-4 mt-[40px] px-[40px]'>
                    <img src="/images/User.png" className='rounded-full w-[50px]' alt="" />
                    <p className=' font-semibold text-white'>Mohammad Arif</p>
                </div>

                <div className='px-[20px] mt-16 dashboarItem'>
                    <NavLink to='/dashboard/dash'>
                    <button className='flex p-[20px] w-full rounded-xl  bg-[#272A30] border-[#272A30] border text-white gap-3 text-lg font-medium'> <img src="/images/dashBoardIcon.svg" alt="" />Dashboard</button>
                    </NavLink>
                        <NavLink to={'/dashboard/notify'}>
                      <button className='flex p-[20px] mt-4 w-full rounded-xl  bg-[#272A30] border-[#272A30] border text-white items-center gap-3 text-lg font-medium'> <IoNotificationsCircle className="text-3xl"/> Notifications</button>
                          </NavLink>
              
                     <div className="divider divide  text-white">OR</div>
                      <Link to={'/'}>
                       <button className='flex p-[20px] w-full rounded-xl  border-[#272A30] hover:bg-[#282931] border text-white gap-3 text-lg font-medium'> <FaHome className="text-3xl"></FaHome>  Home </button>
                      </Link>
              
            
                </div>
            </Drawer>
        </>

    );
};

export default DashboardLayout;