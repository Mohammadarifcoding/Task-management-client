import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Dashboard = () => {
    return (
        <div className="text-white lg:p-[30px] md:p-[20px] p-2">
        <h2 className="lg:text-[30px] ml-3 mt-3 font-medium md:text-[26px] items-center text-[24px] flex gap-4">Hello, Mohammad Arif <img className="lg:w-10  w-8" src="/images/hand.png" alt="" /></h2>
        
        <div className=" ml-3 mt-10  flex sm:flex-row flex-col gap-5 ">
            <h2 className="">Today you have </h2> 
            
            <h2 className="sm:text-base text-sm leading-[70px] gap-2 flex flex-wrap">
                 <h4><span className="bg-[#562CFF] ml-1  p-3 font-bold sm:text-xl text-base rounded-full ">02</span>  Open Task</h4>
                 <h4> <span className="bg-[#FF7A00] ml-1  p-3 font-bold sm:text-xl text-base rounded-full">01</span>  completed</h4>
                 <h4><span className="bg-[#00B81D] ml-1  p-3 font-bold sm:text-xl text-base rounded-full">01</span> is ongoing </h4>
 </h2>
         
        </div>


        
        <Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default Dashboard;