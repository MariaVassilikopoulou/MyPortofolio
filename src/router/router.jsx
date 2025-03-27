import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";
import Main from "../components/main/Main";
import Card from "../components/card/Card";
import About from "../components/card/About";
import CV from "../components/card/CV";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/about',
        element:<Main/>
    },
    {
        path:'/main',
        element:<Main/>
    },
    {
        path:'/cv',
        element:<CV/>
    }
])


export default router;