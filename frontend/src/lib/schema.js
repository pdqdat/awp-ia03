import * as z from "zod";

import { passwordMinLength, passwordMaxLength } from "@lib/const";

const schema = z.object({
    email: z.string().email({
        message: "Invalid email address",
    }),
    password: z
        .string()
        .min(passwordMinLength, {
            message: `Password must be at least ${passwordMinLength} characters long`,
        })
        .max(passwordMaxLength, {
            message: `Password can not be more than ${passwordMaxLength} characters long`,
        }),
});

export default schema;
