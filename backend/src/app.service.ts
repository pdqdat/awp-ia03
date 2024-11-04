import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
    getHello(): string {
        return "Message from Dat Phan: Have a nice day!";
    }
}
