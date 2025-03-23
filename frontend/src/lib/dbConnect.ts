import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    const URI: string = `mongodb+srv://${process.env.MONGODB_USER_NAME}:${process.env.MONGODB_PASSWORD}@lms.fdc0y.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority&appName=LMS`;
    await mongoose.connect(URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("MongoDB Connection Failed", error);
  }
};

export { ConnectDB };
