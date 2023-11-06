import React from "react";
import {
    Outlet,
    createBrowserRouter
} from "react-router-dom";
import NavigationTemplatePage from "./core/page/NavigationTemplatePage/NavigationTemplatePage";
import LoginPage from "./core/page/LoginPage/LoginPage";
import RegisterPage from "./core/page/RegisterPage/RegisterPage";

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

const AuthLayout = () => (<Outlet />)

const router = createBrowserRouter([
    {
        path: "/*",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "applications",
                async lazy() {
                    const { ListPageApplicationsModule } = await import(
                        "./modules/applications-module/applications-module"
                    );
                    return {
                        Component: ListPageApplicationsModule,
                    };
                },
            }
        ],
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <LoginPage />,
            },
            {
                path: "register",
                element: <RegisterPage />,
            },
        ]
    }
]);



export default router