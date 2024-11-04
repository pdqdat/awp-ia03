import { Link } from "react-router-dom";

import PageLogo from "@comp/page-logo";
import PageTitle from "@comp/page-title";
import RegisterForm from "@comp/register/register-form";

const RegisterPage = () => {
    const pageTitle = "Create new account";

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
                <RegisterForm />

                <p className="mt-10 text-center text-gray-500">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="primary-link font-semibold leading-6"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;
