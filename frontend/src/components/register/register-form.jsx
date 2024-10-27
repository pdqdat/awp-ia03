import { useRef, useState } from "react";

import axios from "axios";

import { toast } from "react-toastify";

import loaderSvg from "@/assets/loader.svg";

const RegisterForm = () => {
    const email = useRef();
    const password = useRef();

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const enteredEmail = email.current.value;
        const enteredPassword = password.current.value;

        setIsLoading(true);

        axios
            .post(
                `http://${import.meta.env.VITE_BACKEND_URL}/user/register`,
                {
                    email: enteredEmail,
                    password: enteredPassword,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
            )
            .then((response) => {
                toast.success(response.data.message, {
                    autoClose: 3000,
                });

                toast("Your email: " + response.data.newUser.email, {
                    autoClose: 6000,
                });

                event.target.reset();
            })
            .catch((error) => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.status);
                    console.log(error.response.data);

                    toast.error(error.response.data.message, {
                        autoClose: 3000,
                    });
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log("Error", error.message);

                    toast.error("Error", error.message);
                }
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 text-gray-900">
            <div>
                <label htmlFor="email" className="block font-medium leading-6">
                    Email
                </label>

                <div className="mt-2">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        ref={email}
                        required
                        autoComplete="email"
                        className="block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 disabled:cursor-not-allowed disabled:opacity-50 sm:leading-6"
                        disabled={isLoading}
                    />
                </div>
            </div>

            <div>
                <label
                    htmlFor="password"
                    className="block font-medium leading-6"
                >
                    Password
                </label>

                <div className="mt-2">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        ref={password}
                        required
                        autoComplete="current-password"
                        className="block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 disabled:cursor-not-allowed disabled:opacity-50 sm:leading-6"
                        disabled={isLoading}
                    />
                </div>
            </div>

            <div>
                <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-md bg-purple-600 px-3 py-1.5 font-semibold leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 disabled:pointer-events-none disabled:opacity-50"
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
