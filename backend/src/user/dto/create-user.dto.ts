import {
    IsNotEmpty,
    IsEmail,
    IsDate,
    IsOptional,
    Length,
} from "class-validator";
import { Type } from "class-transformer";
import { minPasswordLength, maxPasswordLength } from "src/const";

export class CreateUserDto {
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @Length(minPasswordLength, maxPasswordLength)
    readonly password: string;

    @IsDate()
    @IsOptional()
    @Type(() => Date)
    readonly createdAt?: Date;
}
