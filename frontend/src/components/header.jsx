import { Link } from "react-router-dom";

import PageLogo from "@comp/page-logo";

import useAuthStore from "@/store/auth-store";

import { appName } from "@lib/const";

import userSvg from "@/assets/user.svg";
import logOutSvg from "@/assets/log-out.svg";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

const Header = () => {
    const { isAuthenticated, logout } = useAuthStore();
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/");

        logout();

        // Render a toast message when the user logs out
        toast("You have successfully logged out. Please come back soon!", {
            autoClose: 3000,
        });
    };

    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav
                aria-label="Global"
                className="flex items-center justify-between p-6 lg:px-12"
            >
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">{appName}</span>

                        <PageLogo />
                    </Link>
                </div>

                <div className="flex items-center space-x-4 lg:flex-1 lg:justify-end">
                    <a
                        href="https://github.com/pdqdat/awp-ia03"
                        target="_blank"
                        className="font-semibold leading-6 text-gray-900 duration-300 ease-in-out hover:tracking-widest"
                    >
                        Github{" "}
                        <span aria-hidden="true" className="font-mono">
                            &#x2197;
                        </span>
                    </a>

                    {isAuthenticated && (
                        <>
                            {/* Vertical separator */}
                            <div className="h-6 w-0.5 rounded-md bg-gray-300" />

                            <Link to="/profile" className="primary-btn px-1.5">
                                <img src={userSvg} className="h-5 w-5" />
                            </Link>

                            <button
                                type="button"
                                onClick={handleLogout}
                                className="transition-color secondary-btn bg-transparent px-1.5 shadow-none hover:bg-gray-200"
                            >
                                <img src={logOutSvg} className="h-5 w-5" />
                            </button>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
