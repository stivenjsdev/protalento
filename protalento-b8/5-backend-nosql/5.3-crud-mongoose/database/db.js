import mongoose from "mongoose";

const URL = process.env.URL;

export const dbConnection = async () => {
  await mongoose.connect(URL);
}
