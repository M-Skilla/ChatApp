import mongoose, { mongo } from "mongoose";
import chalk from "chalk";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);

    const green = chalk.hex("#00490b");
    console.log(green("Connected to Mongo DB"));
  } catch (error) {
    console.log("Error connecting to database", error.message);
  }
};

export default connectToMongoDB;
