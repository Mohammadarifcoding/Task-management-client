import React from 'react';

import moment from 'moment'
import TaskCard from '../TaskCard';

const AllTask = ({data}) => {
    

    
      const pending = data?.filter(item => item.status == 'pending')
      const ongoing = data?.filter(item => item.status == 'ongoing')
      const completed = data?.filter(item => item.status == 'completed')




    return (
        <div className='mt-10'>
            <h2 className='flex gap-2 items-center'>
            <div className='bg-[#FF7A00] px-[5px] h-[10px] rounded-full'></div> Completd Task
            </h2>
            <div className='flex flex-col'>
                {
                        completed?.length ? <div className='flex  flex-wrap   mt-6 gap-4'>
                        {completed?.map(task=> <TaskCard task={task} key={task.Id}></TaskCard>)}
                </div> : <div className='h-[160px] flex text-white justify-center items-center'>
                         <h2 className='lg:text-2xl font-semibold text-xl md:text-2xl sm:text-2xl'>No task Completed </h2>
                </div>
                }
            

            <h2 className='flex gap-2 items-center mt-6'>
            <div className='bg-[#00B81D] px-[5px] h-[10px] rounded-full'></div> Ongoing Task
            </h2>
            {
                        ongoing?.length ? <div className='flex  flex-wrap   mt-6 gap-4'>
                        {ongoing?.map(task=> <TaskCard task={task} key={task.Id}></TaskCard>)}
                </div> : <div className='h-[160px] flex text-white justify-center items-center'>
                         <h2 className='lg:text-2xl font-semibold text-xl md:text-2xl sm:text-2xl'>No task Ongoing </h2>
                </div>
                }
            <h2 className='flex gap-2 items-center mt-6'>
            <div className='bg-[#562CFF] px-[5px] h-[10px] rounded-full'></div> Pending
            </h2>
            {
                        pending?.length ? <div className='flex  flex-wrap   mt-6 gap-4'>
                        {pending?.map(task=> <TaskCard task={task} key={task.Id}></TaskCard>)}
                </div> : <div className='h-[160px] flex text-white justify-center items-center'>
                         <h2 className='lg:text-2xl font-semibold text-xl md:text-2xl sm:text-2xl'>No task Pending </h2>
                </div>
                }
            </div>
           
        </div>
    );
};

export default AllTask;