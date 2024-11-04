import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(new ValidationPipe());

    app.enableCors({
        origin: [
            "https://ia3auth.vercel.app/",
            "https://nestjsauth.vercel.app/",
            "http://localhost:5173",
        ],
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    });

    await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
