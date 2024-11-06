import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UserModule } from "../user/user.module";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "../user/user.schema";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule } from "@nestjs/config";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: [
                ".env.development.local",
                ".env.local",
                ".env.development",
                ".env",
            ],
        }),
        JwtModule.register({
            global: true,
            secret: process.env.JWT_SECRET,
            signOptions: {
                // The JWT token will expire in 1 hour
                expiresIn: "3600s",
            },
        }),
        UserModule,
        MongooseModule.forFeature([
            {
                name: "User",
                schema: UserSchema,
            },
        ]),
    ],
    controllers: [AuthController],
    providers: [AuthService],
    exports: [AuthService],
})
export class AuthModule {}
