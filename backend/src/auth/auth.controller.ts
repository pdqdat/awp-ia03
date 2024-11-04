import {
    Body,
    Controller,
    Post,
    HttpCode,
    HttpStatus,
    Res,
    UseGuards,
    Get,
    Request
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./login.dto";
import { AuthGuard } from "./auth.guard";

@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    //* ENDPOINT: /auth/login
    @Post("login")
    async login(@Body() loginDto: LoginDto, @Res() res) {
        try {
            const accessToken = await this.authService.login(loginDto);

            return res.status(HttpStatus.OK).json(accessToken);
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: error.message,
                error: "Bad Request",
                statusCode: 400,
            });
        }
    }

    //* ENDPOINT: /auth/profile
    @UseGuards(AuthGuard)
    @Get("profile")
    getProfile(@Request() req) {
        return req.user;
    }
}
