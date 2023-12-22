import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Pages/Home/Home';
import Layout from './Components/Layout/Layout';
import Register from './Components/Pages/Register/Register';
import Login from './Components/Pages/Login/Login';
import DashboardLayout from './Components/Layout/DashboardLayout';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import AuthProvider from './Components/Providers/AuthProvider';
import PrivateProvider from './Components/Providers/PrivateProvider';





const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
     
    ]
  },
  {
    path:'/dashboard',
    element:<PrivateProvider><DashboardLayout></DashboardLayout></PrivateProvider>,
    children:[
      {
        path:'dash',
        element:<Dashboard></Dashboard>
        
      }
    ]
  }
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>   
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
