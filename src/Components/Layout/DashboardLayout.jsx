import React from 'react';
import { FaHome } from "react-icons/fa";

const DashboardLayout = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    return (
        <div className='flex bg-[#161420] min-h-screen'>
            <div className='lg:w-[22%] w-full'>
                <div className='flex justify-center items-center gap-4 mt-[40px] px-[40px]'>
                    <img src="/images/User.png" className='rounded-full w-[70px]' alt="" />
                    <p className='text-xl font-semibold text-white'>Mohammad Arif</p>
                </div>

                <div className='px-[20px] mt-16'>
              <button className='flex p-[20px] w-full rounded-xl  bg-[#272A30] border-[#272A30] border text-white gap-3 text-lg font-medium'> <img src="/images/dashBoardIcon.svg" alt="" />Dashboard</button>
              <div className="divider divide  text-white">OR</div>
              <button className='flex p-[20px] w-full rounded-xl  border-[#272A30] border text-white gap-3 text-lg font-medium'> <FaHome className="text-3xl"></FaHome>  Home </button>
                </div>
            </div>
            <div className='lg:w-[78%] border-l-[5px] border-[#3e3857] w-full'>

            </div>
        </div>
    );
};

export default DashboardLayout;