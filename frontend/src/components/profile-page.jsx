import { useEffect, useState } from "react";

import PageTitle from "@comp/page-title";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import useAuthStore from "@/store/auth-store";

import axios from "axios";

const ProfilePage = () => {
    const [profile, setProfile] = useState({
        email: "",
        sub: "",
    });

    const navigate = useNavigate();
    const { isAuthenticated, accessToken } = useAuthStore();

    useEffect(() => {
        // Redirect to the login page if the user is not authenticated
        if (!isAuthenticated) {
            navigate("/login");

            toast.warning(
                "You need to login first in order to access the Profile page",
                {
                    autoClose: 5000,
                },
            );
        }

        // Send a GET request to the `/auth/profile` endpoint to retrieve the user's profile
        axios
            .get(`http://${import.meta.env.VITE_BACKEND_URL}/auth/profile`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
            .then((response) => {
                setProfile(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [isAuthenticated, navigate, accessToken]);

    return (
        <div className="container mt-8 text-center">
            <PageTitle title="Profile" />

            <h1 className="mb-8 text-2xl font-semibold">Profile Page</h1>

            {profile.email !== "" && (
                <h3 className="text-lg font-semibold">
                    Email: {profile.email}
                </h3>
            )}
            {profile.sub !== "" && (
                <h3 className="text-lg font-semibold">ID: {profile.sub}</h3>
            )}
        </div>
    );
};

export default ProfilePage;
