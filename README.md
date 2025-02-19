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
   DATABASE_URL="mysql://user:password@localhost:3306/todo_db" #enter your database url
   PORT=8080
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
     color   String
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

├── controllers/   # Route controllers
│          ├── todo.controller.js
├── route/        # API routes
│          ├── todoRoutes.js      
├── server.js     # main server file
├── prisma/
│          ├── migrations/    # Prisma migrations
│          ├── schema.prisma  # Prisma schema
├── .env               # Environment variables
├── package.json       # Dependencies
├── tsconfig.json      # TypeScript configuration
└── README.md          # Documentation
```


