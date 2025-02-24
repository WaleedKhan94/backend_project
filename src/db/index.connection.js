import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// Using Async/Await because db is in another continent
const connect_DB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `DB is connected successfully ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`ERROR: NOT ABLE TO CONNECT`, error);
    process.exit(1);
  }
};

export default connect_DB;
