import {
    Injectable,
    NotFoundException,
    ConflictException,
} from "@nestjs/common";

import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { IUser } from "src/interface/user.interface";

import { CreateUserDto } from "./dto/create-user.dto";

import * as bcrypt from "bcrypt";

@Injectable()
export class UserService {
    constructor(@InjectModel("User") private userModel: Model<IUser>) {}

    async createUser(createUserDto: CreateUserDto): Promise<IUser> {
        // Check if the email already exists
        const existingUser = await this.userModel.findOne({
            email: createUserDto.email,
        });

        if (existingUser) {
            throw new ConflictException("Email already exists");
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

    async getAllUsers(): Promise<IUser[]> {
        const userData = await this.userModel.find();

        if (!userData || userData.length === 0) {
            throw new NotFoundException("No user found");
        }

        return userData;
    }
}
