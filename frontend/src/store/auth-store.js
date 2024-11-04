import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { toast } from "react-toastify";

const useAuthStore = create(
    persist(
        (set) => ({
            accessToken: null,
            isAuthenticated: false,

            login: (accessToken) => {
                set({
                    accessToken,
                    isAuthenticated: true,
                });
            },

            logout: () => {
                set({
                    accessToken: null,
                    isAuthenticated: false,
                });

                // Render a toast message when the user logs out
                toast(
                    "You have successfully logged out. Please come back soon!",
                    {
                        autoClose: 3000,
                    },
                );
            },
        }),
        {
            name: "auth-storage",
            storage: createJSONStorage(() => localStorage),
        },
    ),
);

export default useAuthStore;
