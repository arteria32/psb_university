import React from "react";
import {
    Outlet,
    createBrowserRouter
} from "react-router-dom";
import NavigationTemplatePage from "./core/page/NavigationTemplatePage/NavigationTemplatePage";

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}


const Layout = () => (<NavigationTemplatePage>
    <Outlet />
</NavigationTemplatePage>)



const router = createBrowserRouter([
    {
        path: "/*",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    },
]);



export default router