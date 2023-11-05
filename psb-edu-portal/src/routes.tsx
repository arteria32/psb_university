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
        path: "/abit",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "welcome-page",
                async lazy() {
                    const { WelcomePageAbitModule } = await import(
                        "./modules/abit-module/abit-module"
                    );
                    return {
                        Component: WelcomePageAbitModule,
                    };
                },
            },
            {
                path: "programs",
                async lazy() {
                    const { ProgramsListPageAbitModule } = await import(
                        "./modules/abit-module/abit-module"
                    );
                    return {
                        Component: ProgramsListPageAbitModule,
                    };
                },
            },

        ],
    },
    {
        path: "*",
        element: <NoMatch />,
    },
]);



export default router