import {
    IsNotEmpty,
    IsEmail,
    IsDate,
    IsOptional,
    Length,
} from "class-validator";
import { Type } from "class-transformer";
import {
    minPasswordLength,
    maxPasswordLength,
    maxFullNameLength,
} from "src/lib/const";

export class CreateUserDto {
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @Length(1, maxFullNameLength)
    readonly fullName: string;

    @IsNotEmpty()
    @Length(minPasswordLength, maxPasswordLength)
    readonly password: string;

    @IsDate()
    @IsOptional()
    @Type(() => Date)
    readonly createdAt?: Date;
}
