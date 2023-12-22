import { useContext } from "react";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AuthContext } from "../Providers/AuthProvider";


const Tasks = () => {
     
    const { user } = useContext(AuthContext)
     
    const {data:tasks ,isLoading ,refetch} = useQuery({
        queryKey:[`tasks${user?.email}`],
        queryFn:async()=>{
        const TaskData = await axios.get(`http://localhost:3000/tasks/${user?.email}`)
               return  TaskData.data
        }
  
       })
   

     return [tasks , isLoading,refetch]

};

export default Tasks;