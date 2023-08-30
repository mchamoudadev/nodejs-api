import dotenv from 'dotenv';
dotenv.config();

export const dbUrl = process.env.DATABASE_URL;
export const secretKey = process.env.SECRET_KEY;
export const port = process.env.PORT;
