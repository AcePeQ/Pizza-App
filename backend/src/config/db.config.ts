import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI as string);
    console.log(`Connected with DB: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error in database connection: ${error}`);
  }
};
