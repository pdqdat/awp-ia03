import { Module } from "@nestjs/common";

import { ConfigModule } from "@nestjs/config";

import { MongooseModule } from "@nestjs/mongoose";
import { Connection } from "mongoose";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import { UserSchema } from "./user/user.schema";

import { UserModule } from './user/user.module';
import { UserService } from "./user/user.service";
import { UserController } from "./user/user.controller";

import { AuthModule } from "./auth/auth.module";

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
        MongooseModule.forRoot(process.env.MONGODB_CONNECTION_STRING, {
            dbName: process.env.MONGODB_DATABASE_NAME,
            onConnectionCreate: (connection: Connection) => {
                connection.on("connected", () =>
                    console.log("Successfully connected to MongoDB"),
                );
                connection.on("open", () =>
                    console.log(
                        "MongoDB connection is opened and ready for operations",
                    ),
                );
                connection.on("disconnected", () =>
                    console.log("MongoDB connection is lost"),
                );
                connection.on("reconnected", () =>
                    console.log("Reconnected to MongoDB"),
                );
                connection.on("disconnecting", () =>
                    console.log("MongoDB connection is closing"),
                );

                return connection;
            },
        }),
        MongooseModule.forFeature([
            {
                name: "User",
                schema: UserSchema,
            },
        ]),
        AuthModule,
        UserModule,
    ],
    controllers: [AppController, UserController],
    providers: [AppService, UserService],
})
export class AppModule {}
