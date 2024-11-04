import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useState, useRef } from "react";

import { toast } from "react-toastify";

import loaderSvg from "@/assets/loader.svg";

import FormField from "@comp/form-field";

import schema from "@lib/schema";
import { emailPlaceholder } from "@lib/const";

import axios from "axios";

import useAuthStore from "@/store/auth-store";

import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(schema),
    });

    const [isLoading, setIsLoading] = useState(false);
    const toastId = useRef(null);

    const { login } = useAuthStore();

    const navigate = useNavigate();

    const onSubmit = (data) => {
        setIsLoading(true);
        toastId.current = toast.loading("Logging in...");

        // Send a POST request to the `/auth/login` endpoint
        axios
            .post(
                `http://${import.meta.env.VITE_BACKEND_URL}/auth/login`,
                {
                    email: data.email,
                    password: data.password,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
            )
            .then((response) => {
                toast.update(toastId.current, {
                    render: "You have logged in successfully. Welcome to the app 🎉",
                    type: "success",
                    isLoading: false,
                    autoClose: 4000,
                });

                login(response.data.accessToken);

                // Clear the form inputs
                reset();

                // Redirect to the home page
                navigate("/");
            })
            .catch((error) => {
                toast.update(toastId.current, {
                    render: error.response.data.message,
                    type: "error",
                    isLoading: false,
                    autoClose: 3000,
                });
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <FormField
                label="Email"
                name="email"
                type="email"
                placeholder={emailPlaceholder}
                register={register}
                error={errors.email}
                autoComplete="email"
                disabled={isLoading}
            />

            <FormField
                label="Password"
                name="password"
                type="password"
                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
                register={register}
                error={errors.password}
                autoComplete="current-password"
                disabled={isLoading}
            />

            <div>
                <button
                    type="submit"
                    className="primary-btn w-full"
                    disabled={isLoading}
                >
                    {isLoading && (
                        <img
                            src={loaderSvg}
                            className="mr-2 h-5 w-5 animate-spin"
                        />
                    )}
                    Login
                </button>
            </div>
        </form>
    );
};

export default LoginForm;
