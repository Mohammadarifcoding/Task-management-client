import React, { useState } from 'react';
import { FaHome } from "react-icons/fa";
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'

const DashboardLayout = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    return (
        <div className='flex bg-[#161420] min-h-screen'>
            <div className='lg:w-[22%] w-full lg:block hidden border-r-[5px] border-[#3e3857]'>
                <div className='flex justify-center items-center gap-4 mt-[40px] px-[40px]'>
                    <img src="/images/User.png" className='rounded-full xl:w-[70px] w-[60px]' alt="" />
                    <p className='xl:text-xl text-lg font-semibold text-white'>Mohammad Arif</p>
                </div>

                <div className='px-[20px] mt-16'>
              <button className='flex p-[20px] w-full rounded-xl  bg-[#272A30] border-[#272A30] border text-white gap-3 text-lg font-medium'> <img src="/images/dashBoardIcon.svg" alt="" />Dashboard</button>
              <div className="divider divide  text-white">OR</div>
              <button className='flex p-[20px] w-full rounded-xl  border-[#272A30] border text-white gap-3 text-lg font-medium'> <FaHome className="text-3xl"></FaHome>  Home </button>
              <button onClick={toggleDrawer}>Show</button>
            
                </div>
            </div>
            <div className='lg:w-[78%] w-full  '>

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

                <div className='px-[20px] mt-16'>
              <button className='flex p-[20px] w-full rounded-xl  bg-[#272A30] border-[#272A30] border text-white gap-3 text-lg font-medium'> <img src="/images/dashBoardIcon.svg" alt="" />Dashboard</button>
              <div className="divider divide  text-white">OR</div>
              <button className='flex p-[20px] w-full rounded-xl  border-[#272A30] border text-white gap-3 text-lg font-medium'> <FaHome className="text-3xl"></FaHome>  Home </button>
              <button onClick={toggleDrawer}>Show</button>
            
                </div>
            </Drawer>
        </div>
    );
};

export default DashboardLayout;