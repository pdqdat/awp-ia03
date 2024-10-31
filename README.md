# HCMUS Advanced Web App Programming

## IA03 - User Registration API with React Frontend

20120268 - Phan Duong Quoc Dat

## Tech stack

-   Front-end: React, Tailwind CSS
-   Back-end: NestJS
-   Database: MongoDB

## How to run

Clone the repository:

```bash
git clone https://github.com/pdqdat/awp-ia03.git
```

Create a MongoDB database on your machine or use a cloud service like MongoDB Atlas. You don't need to create any collection in your database, as the application will automatically create the `users` collection when the server starts.

Configure the environment variables in the `backend/.env.development` file with your MongoDB database connection string and database name:

```env
PORT=8080

MONGODB_CONNECTION_STRING=
MONGODB_DATABASE_NAME=
```

The `frontend/.env.development` file has been pre-configured to connect to the back-end server at `localhost:8080`:

```env
VITE_BACKEND_URL="localhost:8080"
```

Install the dependencies, then run the Back-end server:

```bash
cd backend
npm install
npm run start:dev
```

In another terminal, install the dependencies, then run the Front-end server:

```bash
cd frontend
npm install
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to access the application.

You can visit the deployed version at [https://nestjsauth.vercel.app/](https://nestjsauth.vercel.app/).

## Self evaluation for IA04

Detailed version of the requirements can be found [here](https://docs.google.com/document/d/1sZRlRK7f_1cvWuEVaVSnjuCeWNxuPUvw3_SHHeJQzqY/edit?usp=sharing).

<table>
    <thead>
        <tr>
            <th colspan=3>Rubrics</th>
            <th>Pt.</th>
        </tr>
    </thead>
    <tbody >
        <!-- BACK-END -->
        <tr>
            <td rowspan=2>Back-end</td>
            <td>API Endpoints</td>
            <td>&check;</td>
            <td align=center>2</td>
        </tr>
        <tr>
            <td>Error Handling</td>
            <td>&check;</td>
            <td align=center>2</td>
        </tr>
        <!-- FRONT-END -->
        <tr>
          <td rowspan=3>Front-end</td>
            <td>Routing</td>
            <td>&check;</td>
            <td align=center>1</td>
        </tr>
        <tr>
            <td>API Integration</td>
            <td>&check;</td>
            <td align=center>2</td>
        </tr>
        <tr>
            <td>User Experience</td>
            <td>&check;</td>
            <td align=center>2</td>
        </tr>
        <!-- PUBLIC HOST -->
        <tr>
            <td colspan=2>Public Host Deployment</td>
            <td>&check;</td>
            <td align=center>1</td>
        </tr>
        <!-- TOTAL PT. -->
        <tr>
            <td colspan=3 align=center><strong>Total</strong></td>
            <td align=center><strong>0</strong></td>
        </tr>
    </tbody>
</table>

## Self evaluation for IA03

Detailed version of the requirements can be found [here](https://docs.google.com/document/d/1sZRlRK7f_1cvWuEVaVSnjuCeWNxuPUvw3_SHHeJQzqY/edit?usp=sharing).

<table>
    <thead>
        <tr>
            <th colspan=3>Rubrics</th>
            <th>Pt.</th>
        </tr>
    </thead>
    <tbody >
        <!-- BACK-END -->
        <tr>
            <td rowspan=2>Back-end</td>
            <td>API Endpoints</td>
            <td>&check;</td>
            <td align=center>2</td>
        </tr>
        <tr>
            <td>Error Handling</td>
            <td>&check;</td>
            <td align=center>2</td>
        </tr>
        <!-- FRONT-END -->
        <tr>
          <td rowspan=3>Front-end</td>
            <td>Routing</td>
            <td>&check;</td>
            <td align=center>1</td>
        </tr>
        <tr>
            <td>API Integration</td>
            <td>&check;</td>
            <td align=center>2</td>
        </tr>
        <tr>
            <td>User Experience</td>
            <td>&check;</td>
            <td align=center>2</td>
        </tr>
        <!-- PUBLIC HOST -->
        <tr>
            <td colspan=2>Public Host Deployment</td>
            <td>&check;</td>
            <td align=center>1</td>
        </tr>
        <!-- TOTAL PT. -->
        <tr>
            <td colspan=3 align=center><strong>Total</strong></td>
            <td align=center><strong>10</strong></td>
        </tr>
    </tbody>
</table>

## References

-   [Tailwind CSS Documentation](https://tailwindcss.com/docs/)
-   [Tailwind UI](https://tailwindui.com/)
-   [Nestjs Documentation](https://docs.nestjs.com/)
