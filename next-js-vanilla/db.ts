import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();


const pool = new Pool({
//   user: process.env.POSTGRES_USER,
//   host: process.env.POSTGRES_HOST,
//   database: process.env.POSTGRES_DATABASE,
//   password: process.env.POSTGRES_PASSWORD,
  user: "dbuser",
  host: "localhost",
  database: "next-js-dashboard",
  password: "dbpasswd",
  port: 5432,
});

export default pool;