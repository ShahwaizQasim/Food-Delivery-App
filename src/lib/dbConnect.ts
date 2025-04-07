import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL as string);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("MongoDB Connection Failed", error);
  }
};

export { ConnectDB };
