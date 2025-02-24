import connect_DB from "./db/index.connection.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});

connect_DB();
