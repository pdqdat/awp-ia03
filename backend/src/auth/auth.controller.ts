import {
    Body,
    Controller,
    Post,
    HttpStatus,
    Res,
    UseGuards,
    Get,
    Request,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./login.dto";
import { AuthGuard } from "./auth.guard";
import { UserService } from "../user/user.service";

@Controller("auth")
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService,
    ) {}

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
    async getProfile(@Request() req, @Res() res) {
        try {
            const user = await this.userService.getUserByEmail(req.user.email);

            if (!user) {
                return res.status(HttpStatus.NOT_FOUND).json({
                    message: "User not found",
                    error: "Not Found",
                    statusCode: 404,
                });
            }

            return res.status(HttpStatus.OK).json(user);
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: error.message,
                error: "Internal Server Error",
                statusCode: 500,
            });
        }
    }
}
