import { createBrowserRouter } from "react-router-dom";
import LayOuts from "../Layouts/LayOuts";
import Home from "../Home/Home";
import Products from "../Products/Products";
import SingleProduct from "../SingleProduct/SingleProduct";
import Dashboard from "../Dashboard/Dashboard";
import DashboardLayout from "./DashboardLayout/DashboardLayout";
import Profile from "../Profile/Profile";
import EditProfile from "../editProfile/EditProfile";

const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <LayOuts></LayOuts>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/products",
                element: <Products></Products>,
                loader: () => fetch(`https://dummyjson.com/products`)

            },
            {
                path: "/product/:id",
                element: <SingleProduct></SingleProduct>,
                // loader: { object } => fetch(`https://dummyjson.com/products/${object.params.id}`)
            },
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>,
                children: [
                    {
                        path: "/dashboard",
                        element: <DashboardLayout></DashboardLayout>
                    },
                    {
                        path: "/dashboard/profile",
                        element: <Profile></Profile>
                    },
                    {
                        path: "/dashboard/editProfile",
                        element: <EditProfile></EditProfile>
                    }
                ]
            }
        ]
    }
])
export default myCreatedRoute;