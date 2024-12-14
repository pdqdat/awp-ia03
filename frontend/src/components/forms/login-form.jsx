import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useState, useRef } from "react";

import { toast } from "react-toastify";

import loaderSvg from "@/assets/loader.svg";

import FormField from "@comp/forms/form-field";

import { emailPlaceholder } from "@lib/const";
import { passwordMinLength, passwordMaxLength } from "@lib/const";

import axios from "axios";

import useAuthStore from "@/store/auth-store";

import { useNavigate } from "react-router-dom";

import errorCodeToMsg from "@lib/error-code-to-msg";

import * as z from "zod";

const schema = z.object({
    email: z.string().email({
        message: "Invalid email address",
    }),
    password: z
        .string()
        .min(passwordMinLength, {
            message: `Password must be at least ${passwordMinLength} characters long`,
        })
        .max(passwordMaxLength, {
            message: `Password can not be more than ${passwordMaxLength} characters long`,
        }),
});

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
                `${import.meta.env.VITE_BACKEND_URL}/auth/login`,
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
                    closeButton: true,
                });

                login(response.data.accessToken);

                // Clear the form inputs
                reset();

                // Redirect to the home page
                navigate("/");
            })
            .catch((error) => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx

                    console.log(error.response.data);

                    // Render error message from the backend
                    toast.update(toastId.current, {
                        render: errorCodeToMsg(error.response.data.message),
                        type: "error",
                        isLoading: false,
                        autoClose: 3000,
                    });
                } else if (error.request) {
                    // The request was made but no response was received

                    console.log(error.request);
                    toast.update(toastId.current, {
                        render: errorCodeToMsg("NO_RESPONSE"),
                        type: "error",
                        isLoading: false,
                        autoClose: 5000,
                    });
                } else {
                    // Something happened in setting up the request that triggered an Error

                    console.log("Error", error.message);
                    toast.update(toastId.current, {
                        render: error.message,
                        type: "error",
                        isLoading: false,
                        autoClose: 5000,
                    });
                }
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
                autoFocus
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
