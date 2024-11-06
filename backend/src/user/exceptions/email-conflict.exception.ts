import { HttpException, HttpStatus } from "@nestjs/common";

export class EmailConflictException extends HttpException {
    constructor(message: string = "EMAIL_EXISTS") {
        super(message, HttpStatus.CONFLICT);
    }
}
