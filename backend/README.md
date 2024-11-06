<p align="center">
    <a href="http://nestjs.com/" target="_blank">
        <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
    </a>
</p>

<p align="center">
    <a href="https://www.npmjs.com/~nestjscore" target="_blank">
        <img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" />
    </a>
</p>

# NestJS Backend for User Authentication System

## Tech stack

-   Nest
-   Mongoose
-   JWT
-   Bcrypt

## How to run

Install dependencies

```bash
npm install
```

Configure the environment variables in the `.env.development` file:

-   `PORT`: Port number for the server (pre-configured to 8080)
-   `MONGODB_CONNECTION_STRING`: MongoDB connection string
-   `MONGODB_DATABASE_NAME`: Database name
-   `JWT_SECRET`: Secret key for JWT

Run the development server...

```bash
npm run start
```

... or run in watch mode with hot reload

```bash
npm run start:dev
```
