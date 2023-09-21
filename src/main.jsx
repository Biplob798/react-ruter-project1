import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import myCreatedRoute from './Components/Route/Route'
// first one ---
// eslint-disable-next-line no-unused-vars
// const myCreatedRoute = createBrowserRouter([
//   {
//     path:"/",
//     element: <div className='bg-red-400'>This is my first home router</div>
//   },
//   {
//     path:"/products",
//     element: <div>product route hitted</div>
//   },
//   {
//     path:"/about",
//     element: <div>about route hitted</div>
//   }
// ])

// second one ---
// const myCreatedRoute= createBrowserRouter([
//   {
//     path: "/",
//     element: <section>
//       <div>This is fixed item</div>
//       <Outlet></Outlet>
//     </section>,
//     children: [
//       {
//       path: "/",
//       element: <div>Tis is home route</div>
//     },
//     {
//       path:"/products",
//       element:<div>Products page</div>
//     }
//   ]
//   }
// ])

// third one --- 
// const myCreatedRoute= createBrowserRouter([
//   {
//     path: "/",
//     // element: <section>
//     //   <div className='py-2 shadow-lg'>Navbar</div>
//     //   <Outlet></Outlet>
//     // </section>,
//     element: <LayOuts></LayOuts>,
//     children: [
//       {
//       path: "/",
//       // element: <div>Tis is home route</div>
//       element: <Home></Home>
//     },
//     {
//       path:"/products",
//       // element:<div>Products page</div>
//       element: <Products></Products>
//     }
//   ]
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myCreatedRoute}></RouterProvider>
  </React.StrictMode>,
)
