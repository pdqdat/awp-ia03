# User Authentication System

A full-stack authentication system using JWT to secure user login and registration.

Built by **Phan Duong Quoc Dat - 20120268** for IA03 and IA04 assessment of the **Advanced Web App Development** course at **HCMUS**.

## Tech stack

-   Front-end: React, Tailwind CSS, Zustand (for state management)
-   Back-end: NestJS, JWT
-   Database: MongoDB

## How to run

Clone the repository:

```bash
git clone https://github.com/pdqdat/awp-ia03.git
```

Create a MongoDB database on your machine or use a cloud service like MongoDB Atlas. You don't need to create any collection in your database, as the application will automatically create the `users` collection when the server starts.

Configure the environment variables in the `backend/.env.development` file with your MongoDB database connection string, database name, and a secret key for JWT:

```env
PORT=8080

MONGODB_CONNECTION_STRING=
MONGODB_DATABASE_NAME=

JWT_SECRET=
```

The `frontend/.env.development` file has been pre-configured to connect to the back-end server at `localhost:8080`:

```env
VITE_BACKEND_URL="http://localhost:8080"
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

Open your browser and navigate to `http://localhost:5173` to access the application.

You can visit the deployed version at [https://nestjsauth.vercel.app/](https://nestjsauth.vercel.app/).

## Self evaluation for IA04

Detailed version of the requirements can be found [here](https://docs.google.com/document/d/14nGcUmv1VdnLEIB_3o0JuPAbFP4Pjf-FqYyTVVgc-vU/edit?tab=t.0).

<table>
    <thead>
        <tr>
            <th>Criteria</th>
            <th colspan=2>Description</th>
            <th>Score</th>
        </tr>
    </thead>
    <tbody >
        <tr>
            <td>Registration Endpoints</td>
            <td>Works perfectly, validations and hashing are correct</td>
            <td>&check;</td>
            <td align=center>0.5</td>
        </tr>
        <tr>
            <td>Login Endpoint</td>
            <td>Works correctly, token generated and returned</td>
            <td>&check;</td>
            <td align=center>0.5</td>
        </tr>
        <tr>
            <td>JWT Token Validation</td>
            <td>Proper middleware with token verification on protected routes</td>
            <td>&check;</td>
            <td align=center>0.5</td>
        </tr>
        <tr>
            <td>Profile (Protected Route)</td>
            <td>Protected route works, only accessible with valid token</td>
            <td>&check;</td>
            <td align=center>0.5</td>
        </tr>
        <tr>
            <td>Register page</td>
            <td></td>
            <td>&check;</td>
            <td align=center>1</td>
        </tr>
        <tr>
            <td>Login page</td>
            <td></td>
            <td>&check;</td>
            <td align=center>1</td>
        </tr>
        <tr>
            <td>Profile page</td>
            <td></td>
            <td>&check;</td>
            <td align=center>1</td>
        </tr>
        <tr>
            <td>Home page</td>
            <td>Display content based on authentication status</td>
            <td>&check;</td>
            <td align=center>1</td>
        </tr>
        <tr>
            <td>Frontend Form Handling</td>
            <td>All forms work smoothly, good UX with error handling</td>
            <td>&check;</td>
            <td align=center>1</td>
        </tr>
        <tr>
            <td>State Management</td>
            <td>State managed well, token and user info updated smoothly</td>
            <td>&check;</td>
            <td align=center>1</td>
        </tr>
        <tr>
            <td>Error Handling & Feedback</td>
            <td>Comprehensive error handling, clear user feedback</td>
            <td>&check;</td>
            <td align=center>1</td>
        </tr>
        <tr>
            <td>Public Host</td>
            <td>Public host deployment</td>
            <td>&check;</td>
            <td align=center>1</td>
        </tr>
        <!-- TOTAL SCORE -->
        <tr>
            <td colspan=3 align=center><strong>Total</strong></td>
            <td align=center><strong>10</strong></td>
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
-   [Nestjs Documentation](https://docs.nestjs.com/)
