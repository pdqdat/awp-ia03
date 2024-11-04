import { Link } from "react-router-dom";

import PageLogo from "@comp/page-logo";
import PageTitle from "@comp/page-title";
import LoginForm from "@comp/login/login-form";

const LoginPage = () => {
    const pageTitle = "Login";

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <PageTitle title={pageTitle} />

                <Link to="/">
                    <PageLogo big className="mx-auto" />
                </Link>

                <h2 className="mt-10 text-center text-2xl font-bold leading-9 text-gray-900">
                    {pageTitle}
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <LoginForm />

                <p className="mt-10 text-center text-gray-500">
                    Don&apos;t have an account yet?{" "}
                    <Link
                        to="/register"
                        className="primary-link font-semibold leading-6"
                    >
                        Create one
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
