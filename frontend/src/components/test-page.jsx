import PageTitle from "@comp/page-title";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import FormField from "@comp/form-field";

const schema = z.object({
    email: z.string().email({
        message: "Invalid email address",
    }),
    password: z
        .string()
        .min(3, {
            message: "Password must be at least 3 characters long",
        })
        .max(20, {
            message: "Password can not be more than 20 characters long",
        }),
});

const TestPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data.email, data.password);
    };

    return (
        <div className="p-4">
            <PageTitle title="Test..." />

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="mx-auto flex w-1/3 flex-col gap-4 p-4"
            >
                <FormField
                    label="Email"
                    htmlFor="email"
                    type="email"
                    placeholder="datphan@gmail.com"
                    name="email"
                    register={register}
                    error={errors.email}
                    autoComplete="email"
                />

                <FormField
                    label="Password"
                    htmlFor="password"
                    type="password"
                    placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
                    name="password"
                    register={register}
                    error={errors.password}
                />

                <input
                    type="submit"
                    value="Submit"
                    className="cursor-pointer bg-primary p-2 font-semibold text-white"
                />
            </form>
        </div>
    );
};

export default TestPage;
