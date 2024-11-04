import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "@comp/layout/main-layout";
import EmptyLayout from "@comp/layout/empty-layout";

import HomePage from "@comp/home-page";
import ErrorPage from "@comp/error-page";
import ProfilePage from "@comp/profile-page";
import TestPage from "@comp/test-page";

import LoginPage from "@comp/login/login-page";
import RegisterPage from "@comp/register/register-page";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
    {
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/profile",
                element: <ProfilePage />,
            },
            {
                path: "/test",
                element: <TestPage />,
            },
        ],
    },
    {
        element: <EmptyLayout />,
        children: [
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/register",
                element: <RegisterPage />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
        <ToastContainer />
    </StrictMode>,
);
