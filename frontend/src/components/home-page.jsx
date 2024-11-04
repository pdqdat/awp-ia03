import { Link } from "react-router-dom";

import PageTitle from "@comp/page-title";

import { appName } from "@lib/const";

import useAuthStore from "@/store/auth-store";

const HomePage = () => {
    const { isAuthenticated } = useAuthStore();

    return (
        <div className="container py-32 sm:py-48 lg:py-56">
            <div className="text-center">
                <PageTitle title={appName} />

                <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 md:text-7xl">
                    React Frontend for
                </h1>

                <h1 className="h-14 animate-text text-balance bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-5xl font-semibold tracking-tight text-transparent md:h-[5.5rem] md:text-7xl">
                    {appName}
                </h1>

                <p className="mt-4 text-pretty text-lg font-medium text-gray-500 md:mt-8 md:text-xl/8">
                    A simple demo for a NestJS user registration API
                </p>

                <div className="mt-10 flex items-center justify-center gap-x-6">
                    {!isAuthenticated ? (
                        <>
                            <Link to="/register" className="beautiful-btn">
                                Create an account
                            </Link>

                            <Link
                                to="/login"
                                className="font-semibold leading-6 text-gray-900"
                            >
                                Login
                            </Link>
                        </>
                    ) : (
                        <Link to="/profile" className="beautiful-btn">
                            Visit your profile
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
