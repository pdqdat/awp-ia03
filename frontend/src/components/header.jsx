import { Link } from "react-router-dom";

import PageLogo from "@comp/page-logo";

const Header = () => {
    const isLoggedIn = true;

    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav
                aria-label="Global"
                className="flex items-center justify-between p-6 lg:px-12"
            >
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">User Registration API</span>

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

                    {isLoggedIn && (
                        <>
                            {/* Vertical separator */}
                            <div className="h-6 w-0.5 rounded-md bg-gray-300" />

                            <Link to="/profile" className="primary-btn px-5">
                                Profile
                            </Link>

                            <button className="secondary-btn" type="button">
                                Logout
                            </button>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
