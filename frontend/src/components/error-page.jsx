import { useRouteError, useLocation, Link } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);

    const location = useLocation();

    return (
        <div className="container flex min-h-72 flex-col items-center justify-center gap-4 sm:min-h-96">
            <h1 className="font-code text-[100px] leading-none sm:text-[120px]">
                404
            </h1>

            <p>
                <span className="text-destructive">{location.pathname}</span>{" "}
                could not be found
            </p>

            <Link
                to="/"
                className="mt-8 text-xl font-bold duration-300 ease-in-out hover:tracking-widest"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default ErrorPage;
