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
            
            return res.status(HttpStatus.OK).json({
                message: "User has been created successfully",
                user: {
                    email: newUser.email,
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

    //* ENDPOINT: /user/profile
    @Get("profile")
    async getProfile(@Res() res) {
        try {
            return res.status(HttpStatus.OK).json({
                message: "Profile detail from the backend",
            });
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: "Error: No user found!",
                error: "Bad Request",
                statusCode: 400,
            });
        }
    }

    //* ENDPOINT: /user
    @Get()
    async getAllUsers(@Res() res) {
        try {
            const users = await this.userService.getAllUsers();

            return res.status(HttpStatus.OK).json({
                message: "Users fetched successfully",
                users,
            });
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: "Error: No user found!",
                error: "Bad Request",
                statusCode: 400,
            });
        }
    }
}
