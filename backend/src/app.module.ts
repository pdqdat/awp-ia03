import { Module } from "@nestjs/common";

import { ConfigModule } from "@nestjs/config";

import { MongooseModule } from "@nestjs/mongoose";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

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
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
