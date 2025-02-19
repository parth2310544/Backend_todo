# Backend_todo

## Todo List Backend

This is the backend of the Todo List App, built using **Express.js**, **Prisma**, **MySQL**, and **TypeScript**.

### Prerequisites
Make sure you have the following installed on your machine:
- **Node.js** (v16 or later)
- **MySQL** (with a database setup)
- **npm** or **yarn**

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/Backend_todo.git
   cd Backend_todo
   ```
2. Install dependencies:
   ```sh
   npm install  
   # or
   yarn install
   ```
3. Install Prisma:
   ```sh
   npm install @prisma/client
   npm install -D prisma
   ```
4. Initialize Prisma:
   ```sh
   npx prisma init
   ```
   This will create a `prisma` folder with a `schema.prisma` file.

### Database Setup
1. Create a `.env` file in the root directory and add the following:
   ```sh
   DATABASE_URL="mysql://user:password@localhost:3306/todo_db"
   PORT=5000
   ```
2. Define your database schema in `prisma/schema.prisma`:
   ```prisma
   generator client {
     provider = "prisma-client-js"
   }

   datasource db {
     provider = "mysql"
     url      = env("DATABASE_URL")
   }

   model Todo {
     id        Int     @id @default(autoincrement())
     title     String
     completed Boolean @default(false)
     createdAt DateTime @default(now())
   }
   ```
3. Run Prisma migrations:
   ```sh
   npx prisma migrate dev --name init
   ```
4. Generate Prisma client:
   ```sh
   npx prisma generate
   ```

### Express.js Setup
1. Create a basic Express server in `src/index.ts`:
   ```ts
   import express from "express";
   import cors from "cors";
   import { PrismaClient } from "@prisma/client";

   const app = express();
   const prisma = new PrismaClient();

   app.use(cors());
   app.use(express.json());

   app.get("/api/todos", async (req, res) => {
     const todos = await prisma.todo.findMany();
     res.json(todos);
   });

   app.post("/api/todos", async (req, res) => {
     const { title } = req.body;
     const todo = await prisma.todo.create({ data: { title } });
     res.json(todo);
   });

   app.listen(5000, () => console.log("Server running on port 5000"));
   ```

### Running the Server
To start the backend server in development mode, run:
```sh
npm run dev  
# or
yarn dev
```
The server will start on `http://localhost:5000`.

### Project Structure
```
Backend_todo/
├── src/
│   ├── controllers/   # Route controllers
│   ├── routes/        # API routes
│   ├── prisma/        # Database setup
│   ├── middleware/    # Middleware functions
│   ├── index.ts       # Main server file
├── prisma/
│   ├── migrations/    # Prisma migrations
│   ├── schema.prisma  # Prisma schema
├── .env               # Environment variables
├── package.json       # Dependencies
├── tsconfig.json      # TypeScript configuration
└── README.md          # Documentation
```

### Deployment
To deploy, use platforms like **Heroku** or **Railway**. Example for Railway:
```sh
railway up
```

### License
This project is licensed under the MIT License.
