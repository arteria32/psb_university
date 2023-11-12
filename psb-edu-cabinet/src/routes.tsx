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
            },
            {
                path: "schedular",
                async lazy() {
                    const { SchedularPageApplicationsModule } = await import(
                        "./modules/schedular-moudle/schedular-moudle"
                    );
                    return {
                        Component: SchedularPageApplicationsModule,
                    };
                },
            },
            {
                path: "lesson/:lessonId",
                async lazy() {
                    const { LessonPageApplicationsModule } = await import(
                        "./modules/schedular-moudle/schedular-moudle"
                    );
                    return {
                        Component: LessonPageApplicationsModule,
                    };
                },
            },
            {
                path: "tasks",
                async lazy() {
                    const { StudentTaskListPageApplicationsModule } = await import(
                        "./modules/schedular-moudle/schedular-moudle"
                    );
                    return {
                        Component: StudentTaskListPageApplicationsModule,
                    };
                },
            },
            {
                path: "task/:taskId",
                async lazy() {
                    const { StudentTaskViewerPageApplicationsModule } = await import(
                        "./modules/schedular-moudle/schedular-moudle"
                    );
                    return {
                        Component: StudentTaskViewerPageApplicationsModule,
                    };
                },
            },
            {
                path: "profile",
                async lazy() {
                    const { ProfilePageProfileModule } = await import(
                        "./modules/profile-module/profile-module"
                    );
                    return {
                        Component: ProfilePageProfileModule,
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