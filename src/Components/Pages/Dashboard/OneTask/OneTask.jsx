import React from 'react';
import TaskCard from '../TaskCard';

const OneTask = ({data,task}) => {

    return (
        <div className='mt-10'>
            {
                task == 'pending' && <h2 className='flex gap-2 items-center mt-6'>
                <div className='bg-[#562CFF] px-[5px] h-[10px] rounded-full'></div> Pending
                </h2>
            }
            {
                task == 'ongoing' && <h2 className='flex gap-2 items-center mt-6'>
                <div className='bg-[#00B81D] px-[5px] h-[10px] rounded-full'></div> Ongoing Task
                </h2>
            }
            {
                task == 'completed' ? <h2 className='flex gap-2 items-center'>
                <div className='bg-[#FF7A00] px-[5px] h-[10px] rounded-full'></div> Completd Task
                </h2> :''
            }
             {
                        data?.length ? <div className='flex  flex-wrap   mt-6 gap-4'>
                        {data?.map(task=> <TaskCard task={task} key={task.Id}></TaskCard>)}
                </div> : <div className='h-[160px] flex text-white justify-center items-center'>
                         <h2 className='lg:text-2xl font-semibold text-xl md:text-2xl sm:text-2xl'>No task {task} </h2>
                </div>
                }
        </div>
    );
};

export default OneTask;