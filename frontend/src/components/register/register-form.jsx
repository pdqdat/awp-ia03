import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useState, useRef } from "react";

import axios from "axios";

import { toast } from "react-toastify";

import loaderSvg from "@/assets/loader.svg";

import FormField from "@comp/form-field";

import schema from "@/lib/schema";

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

    const onSubmit = (data) => {
        setIsLoading(true);
        toastId.current = toast.loading("Creating your account...");

        // Send a POST request to the `/user/register` endpoint to register a new user
        axios
            .post(
                `http://${import.meta.env.VITE_BACKEND_URL}/user/register`,
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
                    render: response.data.message,
                    type: "success",
                    isLoading: false,
                    autoClose: 3000,
                });
                toast(
                    <>
                        Your email:{" "}
                        <span className="font-semibold text-primary">
                            {response.data.user.email}
                        </span>
                    </>,
                    {
                        autoClose: 6000,
                    },
                );

                // Clear the form inputs
                reset();
            })
            .catch((error) => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.status);
                    console.log(error.response.data);

                    // Render error message from the backend
                    toast.update(toastId.current, {
                        render: error.response.data.message,
                        type: "error",
                        isLoading: false,
                        autoClose: 6000,
                    });
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                    // toast.error(
                    //     "We are unable to process your request at the moment. Please try again later.",
                    // );
                    toast.update(toastId.current, {
                        render: "We are unable to process your request at the moment. Please try again later.",
                        type: "error",
                        isLoading: false,
                        autoClose: 6000,
                    });
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log("Error", error.message);
                    // toast.error("Error", error.message);
                    toast.update(toastId.current, {
                        render: error.message,
                        type: "error",
                        isLoading: false,
                        autoClose: 6000,
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
                placeholder="datphan@gmail.com"
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
                    className="flex w-full items-center justify-center rounded-md bg-primary px-3 py-1.5 font-semibold leading-6 text-white shadow-sm hover:bg-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-50"
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
