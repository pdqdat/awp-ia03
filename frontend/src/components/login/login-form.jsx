import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useState } from "react";

import { toast } from "react-toastify";

import loaderSvg from "@/assets/loader.svg";

import FormField from "@comp/form-field";

import schema from "@/lib/schema";

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });

    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = (data) => {
        setIsLoading(true);

        const resolveAfter3Sec = new Promise((resolve) =>
            setTimeout(resolve, 1500),
        );
        toast.promise(resolveAfter3Sec, {
            pending: "Logging in...",
            success: `Email: ${data.email}, password: ${data.password}`,
            error: "Failed 🤯",
        });

        setIsLoading(false);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <FormField
                label="Email"
                name="email"
                type="email"
                placeholder="pd.quocdat@gmail.com"
                register={register}
                error={errors.email}
                autoComplete="email"
                disabled={isLoading}
            />

            <FormField
                label="Password"
                name="password"
                type="password"
                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
                register={register}
                error={errors.password}
                autoComplete="current-password"
                disabled={isLoading}
            />

            <div>
                <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-md bg-primary px-3 py-1.5 font-semibold leading-6 text-white shadow-sm hover:bg-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-50"
                    disabled={isLoading}
                >
                    {isLoading && (
                        <img
                            src={loaderSvg}
                            className="mr-2 h-5 w-5 animate-spin"
                        />
                    )}
                    Login
                </button>
            </div>
        </form>
    );
};

export default LoginForm;
