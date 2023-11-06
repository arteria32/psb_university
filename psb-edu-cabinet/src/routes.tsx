import React from "react";
import {
    Outlet,
    createBrowserRouter
} from "react-router-dom";
import NavigationTemplatePage from "./core/page/NavigationTemplatePage/NavigationTemplatePage";
import UserPage from "./modules/profile-module/pages/UserPage/UserPage";
import SchedulePage from "./modules/profile-module/pages/SchedulePage/SchedulePage";
import TasksPage from "./modules/profile-module/pages/TasksPage/TasksPage";

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
    {
        path: "/user",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <UserPage />,
            },
        ],
    },
    {
        path: "/schedule",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <SchedulePage />,
            },
        ],
    },
    {
        path: "/tasks",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <TasksPage />,
            },
        ],
    },
]);



export default router