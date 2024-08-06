import mongoose, { mongo } from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);

    console.log("Connected to Mongo DB");
  } catch (error) {
    console.log("Error connecting to database", error.message);
  }
};

export default connectToMongoDB;
