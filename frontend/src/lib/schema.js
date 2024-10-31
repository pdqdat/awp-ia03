import * as z from "zod";

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

export default schema;
