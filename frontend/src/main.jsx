import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "@comp/home-page";
import ErrorPage from "@comp/error-page";
import TestPage from "@comp/test-page";

import LoginPage from "@comp/login/login-page";
import RegisterPage from "@comp/register/register-page";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/register",
        element: <RegisterPage />,
    },
    {
        path: "/test",
        element: <TestPage />,
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
        <ToastContainer />
    </StrictMode>,
);
