import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useState, useRef } from "react";

import axios from "axios";

import { toast } from "react-toastify";

import loaderSvg from "@/assets/loader.svg";
import copySvg from "@/assets/copy.svg";

import FormField from "@comp/forms/form-field";

import { emailPlaceholder } from "@lib/const";
import {
    passwordMinLength,
    passwordMaxLength,
    fullNameMaxLength,
    fullNamePlaceholder,
} from "@lib/const";

import { useNavigate } from "react-router-dom";

import errorCodeToMsg from "@lib/error-code-to-msg";

import * as z from "zod";

const schema = z.object({
    email: z
        .string()
        .min(1, {
            message: "Email required",
        })
        .email({
            message: "Invalid email address",
        }),
    fullName: z
        .string()
        .min(1, {
            message: "Full name required",
        })
        .max(fullNameMaxLength, {
            message: `Full name can not be more than ${fullNameMaxLength} characters long`,
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

const RegisterForm = () => {
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

    const navigate = useNavigate();

    const onSubmit = (data) => {
        setIsLoading(true);
        toastId.current = toast.loading("Creating your account...");

        // Send a POST request to the `/user/register` endpoint to register a new user
        axios
            .post(
                `${import.meta.env.VITE_BACKEND_URL}/user/register`,
                {
                    email: data.email,
                    fullName: data.fullName,
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
                    render: response.data.message,
                    type: "success",
                    isLoading: false,
                    autoClose: 3000,
                });

                // Render a toast message with the user's email and a button to copy the email to the clipboard
                toast(
                    <>
                        You can now login with your email:{" "}
                        <span className="font-semibold text-primary">
                            {response.data.user.email}
                        </span>{" "}
                        <button
                            onClick={() =>
                                navigator.clipboard.writeText(
                                    response.data.user.email,
                                )
                            }
                            className="ml-1 duration-300 ease-in-out hover:scale-110"
                        >
                            <img src={copySvg} className="h-3.5 w-3.5" />
                        </button>
                    </>,
                    {
                        autoClose: 8000,
                    },
                );

                // Clear the form inputs
                reset();

                // Redirect to the login page
                navigate("/login");
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
                        autoClose: 5000,
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
                label="Full name"
                name="fullName"
                type="text"
                placeholder={fullNamePlaceholder}
                register={register}
                error={errors.fullName}
                autoComplete="name"
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
                    Create
                </button>
            </div>
        </form>
    );
};

export default RegisterForm;
