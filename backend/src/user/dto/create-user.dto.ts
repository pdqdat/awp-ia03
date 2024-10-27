import { IsNotEmpty, IsEmail, IsDate, IsOptional } from "class-validator";
import { Type } from "class-transformer";

export class CreateUserDto {
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    readonly password: string;

    @IsDate()
    @IsOptional()
    @Type(() => Date)
    readonly createdAt?: Date;
}
