import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";

const TaskCard = ({task}) => {
    const [timeData,setTime] = useState({hours:0,minutes:0,seconds:0})
    function convertSeconds(seconds) {
        let hours = Math.floor(seconds / 3600);
        let minutes = Math.floor((seconds % 3600) / 60);
        let remainingSeconds = seconds % 60;
    
        return {
            hours: hours,
            minutes: minutes,
            seconds: remainingSeconds
        };
    }

    let date1 = moment(new Date());
    let date2 = moment(task?.task_deadline);
    
    // Calculate the difference in seconds
    let differenceInSeconds = date2.diff(date1, 'seconds');
    
    let time = convertSeconds(differenceInSeconds);

     

    
    // console.log(`${time.hours} hours, ${time.minutes} minutes, ${time.seconds} seconds.`);
    return (
        <div className='bg-[#292731] rounded-lg lg:p-5 sm:p-4 p-3 min-w-[250px] w-full max-w-[400px]' key={task.Id}>
            <div className='flex gap-5 items-center'>
            <div className={`px-3 py-2 text-white w-fit rounded-full text-[12px] ${task?.status == 'pending' ? 'bg-[#562CFF] ':''} ${task?.status == 'ongoing' ? 'bg-[#00B81D] ':''} ${task?.status == 'completed' ? 'bg-[#FF7A00] ':''}`}>{task?.status}</div>
            <div className={`px-3 py-2 text-white w-fit rounded-full text-[12px] ${task?.status == 'pending' ? 'bg-[#562CFF] ':''} ${task?.status == 'ongoing' ? 'bg-[#00B81D] ':''} ${task?.status == 'completed' ? 'bg-[#FF7A00] ':''}`}>{task?.priority}</div>
                        {/* <div>{time.hours} : {time.minutes} :{time.seconds}</div> */}
            </div>
                       
                      <h2 className='mt-4 font-semibold '> {task.task_title}</h2> 
                      <p className='mt-3 text-sm text-gray-300'>{task?.task_description}</p>
                         <div className='flex flex-wrap justify-between items-center'>
                         <p className='text-sm mt-4'>Deadline : {
                            time.hours < 0 ? 'Time Finished' : <>{time.hours} Hou : {time.minutes} Min :{time.seconds} Sec</>
                         } </p>
                        
                            <FaArrowRight className='text-white mt-2'></FaArrowRight>
                        
                         </div>
                      
                    </div>
    );
};

export default TaskCard;