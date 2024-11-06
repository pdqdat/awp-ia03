import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IUser } from "src/interface/user.interface";
import { LoginDto } from "./login.dto";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { InvalidCredentialsException } from "./exceptions/invalid-credentials.exception";

@Injectable()
export class AuthService {
    constructor(
        @InjectModel("User") private userModel: Model<IUser>,
        private jwtService: JwtService,
    ) {}

    async login(loginDto: LoginDto): Promise<{
        accessToken: string;
    }> {
        const user = await this.userModel.findOne({ email: loginDto.email });

        if (!user) {
            throw new InvalidCredentialsException();
        }

        const isPasswordValid = await bcrypt.compare(
            loginDto.password,
            user.password,
        );

        if (!isPasswordValid) {
            throw new InvalidCredentialsException();
        }

        const payload = { email: user.email, sub: user._id };

        return {
            accessToken: await this.jwtService.sign(payload),
        };
    }
}
