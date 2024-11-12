import { IsNotEmpty, IsEmail, Length } from "class-validator";
import { minPasswordLength, maxPasswordLength } from '../lib/const';

export class LoginDto {
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @Length(minPasswordLength, maxPasswordLength)
    readonly password: string;
}
