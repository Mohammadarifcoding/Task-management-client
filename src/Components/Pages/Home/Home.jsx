import React from 'react';
import Container from '../../Shared/Container';

const Home = () => {
    return (
        <div className='bg-[#161420] flex justify-center pb-20'>
            <Container>
                <h2 className='lg:text-[50px] md:text-[40px] sm:text-[30px] text-[25px] font-extrabold  text-center max-w-[900px] mb-[20px] lg:mt-[120px] md:mt-[70px] mt-[50px]  text-white'>Free Task Management Software <br /> without any limits</h2>
                <p className='text-gray-400 md:text-lg sm:text-base text-sm max-w-[750px] px-5 text-center flex justify-center'>Manage projects and tasks, collaborate with teammates, and status reports at a glance with just one click</p>
            </Container>
        </div>
    );
};

export default Home;