import * as dotenv from "dotenv";
//dotenv.config();
dotenv.config({ path: './.env' });

//check directories to see if things are right??
console.log("__dirname:", __dirname);
console.log("process.cwd():", process.cwd());


export const CONFIG = {
nodeEnv: process.env.NODE_ENV ?? "dev",
port: process.env.PORT ?? 3000,
dbName: process.env.DB_NAME ?? "sqlite::memory:",
dbUserName: process.env.DB_USERNAME ?? "",
dbPassword: process.env.DB_PASSWORD ?? "",
dbHost: process.env.DB_HOST ?? "localhost",
dbPort: process.env.DB_PORT ?? "5432",
dbDialect: process.env.DB_DIALECT ?? "sqlite",
} as const;