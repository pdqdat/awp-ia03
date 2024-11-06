import { useEffect, useState } from "react";

import PageTitle from "@comp/page-title";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import useAuthStore from "@/store/auth-store";

import axios from "axios";

import errorCodeToMsg from "@lib/error-code-to-msg";
import dateFormatter from "@lib/date-formatter";

const ProfilePage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [profile, setProfile] = useState({
        email: "",
        fullName: "",
        createdAt: "",
    });
    const [message, setMessage] = useState("");

    const { isAuthenticated, accessToken } = useAuthStore();
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect to the login page if the user is not authenticated
        // or the access token is missing
        if (!isAuthenticated || !accessToken) {
            navigate("/login");

            toast.warning(errorCodeToMsg("LOGIN_FIRST"), {
                autoClose: 5000,
            });
        }

        setIsLoading(true);

        // Send a GET request to the `/auth/profile` endpoint to retrieve the user's profile
        axios
            .get(`${import.meta.env.VITE_BACKEND_URL}/auth/profile`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
            .then((response) => {
                setProfile(response.data);
            })
            .catch((error) => {
                if (error.response) {
                    // The request was made
                    // and the server responded with an unauthorized message

                    console.log(error.response.data);

                    setMessage(errorCodeToMsg("PROFILE_ERROR"));
                } else if (error.request) {
                    // The request was made but no response was received

                    console.log(error.message);

                    setMessage(errorCodeToMsg("PROFILE_ERROR"));
                }
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [isAuthenticated, accessToken, navigate]);

    return (
        <>
            <PageTitle title="Profile" />

            <div className="container mt-8 flex flex-col items-center">
                {message !== "" ? (
                    <h3 className="text-center text-2xl">{message}</h3>
                ) : (
                    <div className="relative h-40 w-40 overflow-hidden rounded-full bg-gray-100 shadow-xl">
                        <svg
                            className="absolute -left-4 h-48 w-48 text-hover transition-colors hover:text-primary"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </div>
                )}

                {isLoading && (
                    <h1 className="mt-4 text-2xl">Fetching your profile...</h1>
                )}

                {profile.fullName && (
                    <h1 className="mt-4 text-2xl font-semibold">
                        {profile.fullName}
                    </h1>
                )}

                {profile.email && (
                    <h5 className="mt-4 font-medium">{profile.email}</h5>
                )}

                {profile.createdAt && (
                    <h5 className="mt-2 text-gray-500">
                        Member since: {dateFormatter(profile.createdAt)}
                    </h5>
                )}
            </div>
        </>
    );
};

export default ProfilePage;
