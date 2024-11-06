import { UnauthorizedException } from "@nestjs/common";

export class InvalidCredentialsException extends UnauthorizedException {
    constructor(message: string = "INVALID_CREDENTIALS") {
        super(message);
    }
}
