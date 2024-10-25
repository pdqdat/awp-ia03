import { Link } from "react-router-dom";

import reactSvg from "@/assets/react.svg";

const HomePage = () => {
    return (
        <div className="bg-white">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav
                    aria-label="Global"
                    className="flex items-center justify-between p-6 lg:px-8"
                >
                    <div className="flex lg:flex-1">
                        <Link to="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Dat Phan</span>
                            <img
                                alt="React logo"
                                src={reactSvg}
                                className="h-10 w-auto animate-spin-slow"
                            />
                        </Link>
                    </div>

                    <div className="flex lg:flex-1 lg:justify-end">
                        <a
                            href="https://github.com/pdqdat/awp-ia03"
                            target="_blank"
                            className="font-semibold leading-6 text-gray-900"
                        >
                            Github <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </nav>
            </header>

            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="text-center">
                        <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                            React Frontend for
                        </h1>

                        <h1 className="animate-text text-balance bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-5xl font-semibold tracking-tight text-transparent sm:text-7xl">
                            User Registration API
                        </h1>

                        <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                            IA03 assessment for Advanced Web Programming course
                            at HCMUS
                        </p>

                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link
                                to="/register"
                                className="rounded-md bg-purple-500 px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-purple-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                            >
                                Create an account
                            </Link>

                            <Link
                                to="/login"
                                className="font-semibold leading-6 text-gray-900"
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                </div>

                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                >
                    <div
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    />
                </div>

                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                >
                    <div
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
