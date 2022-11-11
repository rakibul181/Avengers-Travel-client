import AddService from "../Component/AddService";
import Services from "../Component/Services";
import ServicesDetails from "../Pages/ServicesDetails";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Home } = require("../Pages/Home");

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('http://localhost:5000/3service')

            },
            {
                path:'add-service',
                element:<AddService></AddService>

            },
            {
                path:'services',
                element:<Services></Services>,
                loader: ()=> fetch('http://localhost:5000/services')

            },
            {
                path:'service/:id',
                element:<ServicesDetails></ServicesDetails>,
                loader:({params})=> fetch(`http://localhost:5000/service/${params.id}`)
            }

        ]
    
    }
])