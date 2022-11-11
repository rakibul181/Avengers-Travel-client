import AddService from "../Component/AddService";
import Login from "../Component/Login";
import Resister from "../Component/Resister";
import Services from "../Component/Services";
import ErrorPage from "../Pages/ErrorPage";
import MyReview from "../Pages/MyReview";
import ServicesDetails from "../Pages/ServicesDetails";
import PriveteRoute from "./PriveteRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Home } = require("../Pages/Home");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://avengers-travel-server.vercel.app/3service')

            },
            {
                path: 'add-service',
                element: <PriveteRoute><AddService></AddService></PriveteRoute>

            },
            {
                path: 'services',
                element: <Services></Services>,
                loader: () => fetch('https://avengers-travel-server.vercel.app/services')

            },
            {
                path: 'service/:id',
                element: <ServicesDetails></ServicesDetails>,
                loader: ({ params }) => fetch(`https://avengers-travel-server.vercel.app/service/${params.id}`)
            },
            {
                path: 'resister',
                element: <Resister></Resister>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'my-review',
                element:<PriveteRoute><MyReview></MyReview></PriveteRoute>,
                loader: ({ params }) => fetch(`https://avengers-travel-server.vercel.app/service/${params.id}`)
            }

        ]

    }
])