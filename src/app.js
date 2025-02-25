import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" })); // Data coming from JSON file.
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // Data coming from URL.
app.use(express.static("public")); // Folder for public assets PDF and Image files.
app.use(cookieParser()); // Securly Accessing browser cookies.

export { app };
