import {
    Body,
    Controller,
    Post,
    HttpCode,
    HttpStatus,
    Res,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";

@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    //* ENDPOINT: /auth/login
    @Post("login")
    async login(@Body() loginDto: LoginDto, @Res() res) {
        try {
            const user = await this.authService.login(loginDto);

            return res.status(HttpStatus.OK).json(user);
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: error.message,
                error: "Bad Request",
                statusCode: 400,
            });
        }
    }
}
