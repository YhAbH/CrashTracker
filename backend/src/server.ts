import express from "express";
import colors, { blue } from "colors";
import morgan from "morgan";
import { db } from "./config/db";

async function connectDB() {
  try {
    await db.authenticate();
    await db.sync();
    console.log(colors.blue.bold("Conexión exitosa con la DB"));
  } catch (error) {
    console.log(colors.red.bold("Error al conectar con la DB:"), error);
  }
}

const app = express();

app.use(morgan("dev"));

app.use(express.json());

export default connectDB;
