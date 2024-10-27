import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(new ValidationPipe());

    app.enableCors({
        origin: [process.env.FRONTEND_URL, "http://localhost:5173"],
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    });

    await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
