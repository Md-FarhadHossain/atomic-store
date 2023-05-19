import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Navbar from '../components/Navbar/Navbar'
import Home from '../pages/Home/Home'
import Main from '../utilities/Main'
import SelectedPackage from '../pages/SelecedPackage/SelectedPackage'
import OrderOverview from '../pages/OrderOverview/OrderOverview'
import Login from '../pages/Login/Login'
import Dashboard from '../pages/Dashboard/Dashboard'
import PendingOrder from '../pages/Dashboard/PendingOrder/PendingOrder'
import ConfirmOrder from '../pages/Dashboard/ConfirmOrder/ConfirmOrder'
import CancelOrder from '../pages/Dashboard/CancelOrder/CancelOrder'
import AllOrder from '../pages/Dashboard/AllOrder/AllOrder'
import NewOrder from '../pages/Dashboard/NewOrder/NewOrder'
import PrivetRoute from './PrivetRoute'


const Routes = () => {


    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/package/:id',
                    element: <SelectedPackage />,
                    loader: async ({params}) => await fetch(`https://atomic-store.vercel.app/packages/${params.id}`)
                },
                {
                    path: '/order-overview',
                    element: <OrderOverview />

                },
                {
                    path: '/login',
                    element: <Login />
                }
            ]
        },
        
        {
            path: '/dashboard',
            element: <PrivetRoute><Dashboard /></PrivetRoute>,
            children: [
                {
                    path: 'pending-order',
                    element: <PendingOrder />
                },
                {
                    path: 'confirm-order',
                    element: <ConfirmOrder />
                },
                {
                    path: 'cancel-order',
                    element: <CancelOrder />
                },
                {
                    path: 'all-order',
                    element: <AllOrder />
                },
                {
                    path: 'new-order',
                    element: <NewOrder />
                },
            ]
        },
        

    ])
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default Routes