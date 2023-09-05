import mongoose from 'mongoose';

const URL = 'mongodb+srv://sensei:1234@cluster0.vep1mp4.mongodb.net/social';

export const dbConnect = async () => {
  await mongoose.connect(URL);
}
