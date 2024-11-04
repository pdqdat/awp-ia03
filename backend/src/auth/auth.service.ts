import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IUser } from "src/interface/user.interface";
import { LoginDto } from "./dto/login.dto";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
    constructor(@InjectModel("User") private userModel: Model<IUser>) {}

    async login(loginDto: LoginDto): Promise<any> {
        const user = await this.userModel.findOne({ email: loginDto.email });

        const isPasswordValid = await bcrypt.compare(
            loginDto.password,
            user.password,
        );

        if (!user || !isPasswordValid) {
            throw new UnauthorizedException("Invalid credentials");
        }

        const { password, ...result } = user.toObject();

        return result;
    }
}
