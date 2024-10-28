import { useRef } from "react";

import { toast } from "react-toastify";

const LoginForm = () => {
    const email = useRef();
    const password = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        toast.info("Login feature is being developed");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 text-gray-900">
            <div>
                <label htmlFor="email" className="block font-medium leading-6">
                    Email
                </label>

                <div className="mt-2">
                    <input
                        disabled
                        id="email"
                        name="email"
                        type="email"
                        ref={email}
                        required
                        autoComplete="email"
                        className="block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50 sm:leading-6"
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
                        disabled
                        id="password"
                        name="password"
                        type="password"
                        ref={password}
                        required
                        autoComplete="current-password"
                        className="block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50 sm:leading-6"
                    />
                </div>
            </div>

            <div>
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 font-semibold leading-6 text-white shadow-sm hover:bg-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                    Login
                </button>
            </div>
        </form>
    );
};

export default LoginForm;
