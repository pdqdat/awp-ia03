import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IUser } from "src/interface/user.interface";
import { CreateUserDto } from "./dto/create-user.dto";
import * as bcrypt from "bcrypt";
import { EmailConflictException } from "./exceptions/email-conflict.exception";

@Injectable()
export class UserService {
    constructor(@InjectModel("User") private userModel: Model<IUser>) {}

    async createUser(createUserDto: CreateUserDto): Promise<IUser> {
        // Check if the email already exists
        const existingUser = await this.userModel.findOne({
            email: createUserDto.email,
        });

        if (existingUser) {
            throw new EmailConflictException();
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

        // Create a new user
        const newUser = await new this.userModel({
            ...createUserDto,
            password: hashedPassword,
            createdAt: createUserDto.createdAt || new Date(),
        });

        return newUser.save();
    }

    async getUserByEmail(email: string): Promise<{
        email: string;
        fullName: string;
        createdAt: Date;
    } | null> {
        const user = await this.userModel.findOne({ email: email });

        if (!user) {
            return null;
        }

        return {
            email: user.email,
            fullName: user.fullName,
            createdAt: user.createdAt,
        };
    }
}
