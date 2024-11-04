import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UserModule } from "../user/user.module";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "../user/user.schema";

@Module({
    imports: [
        UserModule,
        MongooseModule.forFeature([{ name: "User", schema: UserSchema }]),
    ],
    controllers: [AuthController],
    providers: [AuthService],
    exports: [AuthService],
})
export class AuthModule {}
