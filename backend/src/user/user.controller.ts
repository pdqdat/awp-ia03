import { Body, Controller, Get, HttpStatus, Post, Res } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) {}

    //* ENDPOINT: /user/register
    @Post("register")
    async createUser(@Body() createUserDto: CreateUserDto, @Res() res) {
        try {
            const newUser = await this.userService.createUser(createUserDto);

            return res.status(HttpStatus.CREATED).json({
                message: "User has been created successfully",
                user: {
                    email: newUser.email,
                    fullName: newUser.fullName,
                    createdAt: newUser.createdAt,
                },
            });
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: error.message,
                error: "Bad Request",
                statusCode: 400,
            });
        }
    }
}
