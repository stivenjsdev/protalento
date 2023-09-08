import mongoose from "mongoose";

const URL =
  "mongodb+srv://sensei:1234@cluster0.vep1mp4.mongodb.net/social?retryWrites=true&w=majority";


export const dbConnection = async () => {
  await mongoose.connect(URL);
}
