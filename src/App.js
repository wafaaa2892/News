import './App.css';
import Sports from './component/Sports/Sports';
import Business from './component/Business/Business';
import Science from './component/Science/Science';
import Health from './component/Health/Health';
import NotFound from './component/NotFound/NotFound';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './component/Layout/Layout';

let routers = createBrowserRouter([
  {path:"",element:<Layout/>,errorElement:<NotFound/>,children:[
    {index:true,element:<Sports/>},
    {path:"business",element:<Business/>},
    {path:"science",element:<Science/>},
    {path:"health",element:<Health/>},
    {path:"notfound",element:<NotFound/>}
  ]}
])


export default function App() {
  return <>
      <RouterProvider router={routers}>

      </RouterProvider>
  </>
}
