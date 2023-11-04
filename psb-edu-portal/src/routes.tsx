import React from "react";
import {
    Link,
    Outlet,
    createBrowserRouter
} from "react-router-dom";

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}


const Layout = () => (<Outlet />)

function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "*",
                element: <NoMatch />,
            },
        ],
    },
]);



export default router