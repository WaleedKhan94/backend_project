import connect_DB from "./db/index.connection.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});

connect_DB()
  .then(() => {
    app.on("error", (error) => {
      console.error("AN Error has been encountered", error);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(`DB connection error  ${err}`);
  });
