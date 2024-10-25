import { useRef } from "react";

const LoginForm = () => {
    const email = useRef();
    const password = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        const enteredEmail = email.current.value;
        const enteredPassword = password.current.value;

        alert("email: " + enteredEmail);
        alert("password: " + enteredPassword);

        // event.target.reset();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
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
                        className="block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:leading-6"
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
                        className="block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:leading-6"
                    />
                </div>
            </div>

            <div>
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-purple-600 px-3 py-1.5 font-semibold leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                >
                    Login
                </button>
            </div>
        </form>
    );
};

export default LoginForm;
