import { IsNotEmpty, IsEmail, Length } from "class-validator";
import { minPasswordLength, maxPasswordLength } from "src/lib/const";

export class LoginDto {
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @Length(minPasswordLength, maxPasswordLength)
    readonly password: string;
}
