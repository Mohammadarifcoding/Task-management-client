import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Dashboard = () => {
     const [itemNumber,setItemNumber] = useState(0)
    const items = [ {
        item : 'All Tasks',
        id:0
    },
    {
        item : 'Ongoing',
        id:1
    },
    {
        item : 'Completed',
        id:2
    },
    {
        item : 'Pending',
        id:3
    }

]


    return (
        <div className="text-white lg:p-[30px] md:p-[20px] p-2">
        <h2 className="lg:text-[30px] ml-3 mt-3 font-medium md:text-[26px] items-center text-[24px] flex flex-wrap gap-4">Hello, Mohammad <span className='flex items-center'>Arif <img className="lg:w-10  w-8" src="/images/hand.png" alt="" /></span> </h2>
        
        <div className=" ml-3 mt-10  flex sm:flex-row flex-col gap-5 ">
            <h2 className="">Today you have </h2> 
            
            <h2 className="sm:text-base text-sm leading-[70px] gap-2 flex flex-wrap">
                 <h4><span className="bg-[#562CFF] ml-1  p-3 font-bold sm:text-xl text-base rounded-full ">02</span>  Open Task</h4>
                 <h4> <span className="bg-[#FF7A00] ml-1  p-3 font-bold sm:text-xl text-base rounded-full">01</span>  completed</h4>
                 <h4><span className="bg-[#00B81D] ml-1  p-3 font-bold sm:text-xl text-base rounded-full">01</span> is ongoing </h4>
 </h2>
         
        </div>


        {/* Tabs */}

      <div className='mt-10'>
      <Tabs >
      <TabList className='border-b-0 flex sm:justify-start justify-center gap-3 flex-wrap'>
      {items?.map((item) => (
        <Tab 
        
        onClick={()=>{setItemNumber(item.id)}}
          className={` rounded-full md:px-4 md:py-2 px-3 py-1 border-2 outline-none  border-[#3e3857] ${
            itemNumber  !== item.id ? 'bg-[#161420]  text-white ' : 'bg-[#060608] focus:bg-[#060608] focus:rounded-full focus:text-white'
          }`}
          key={item.id}
        >
          {item.item}
        </Tab>
      ))}
{/* <Tab
        onClick={()=>{setItemNumber(1)}}
          className={`rounded-full px-4 py-2 border-2 outline-none  border-[#3e3857] ${
            itemNumber  !== 1 ? 'bg-[#161420]  text-white ' : 'bg-[#060608] focus:bg-[#060608] focus:rounded-full focus:text-white'
          }`}
          
        >
          All Task
        </Tab>
        <Tab
        onClick={()=>{setItemNumber(2)}}
          className={`rounded-full px-4 py-2 border-2 outline-none  border-[#3e3857] ${
            itemNumber  !== 2 ? 'bg-[#161420]  text-white ' : 'bg-[#060608] focus:bg-[#060608] focus:rounded-full focus:text-white'
          }`}
          
        >
          All Task
        </Tab>
        <Tab
        onClick={()=>{setItemNumber(3)}}
          className={`rounded-full px-4 py-2 border-2 outline-none  border-[#3e3857] ${
            itemNumber  !== 3 ? 'bg-[#161420]  text-white ' : 'bg-[#060608] focus:bg-[#060608] focus:rounded-full focus:text-white'
          }`}
          
        >
          All Task
        </Tab>
        <Tab
        onClick={()=>{setItemNumber(4)}}
          className={`rounded-full px-4 py-2 border-2 outline-none  border-[#3e3857] ${
            itemNumber  !== 4 ? 'bg-[#161420]  text-white ' : 'bg-[#060608] focus:bg-[#060608] focus:rounded-full focus:text-white'
          }`}
          
        >
          All Task
        </Tab> */}
      
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 4</h2>
    </TabPanel>
  </Tabs>
      </div>

       
        </div>
    );
};

export default Dashboard;