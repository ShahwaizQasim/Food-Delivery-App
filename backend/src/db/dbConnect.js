import mongoose from "mongoose"

const ConnectDB =  async () => {
    try {
        const url = process.env.MONGODB_URL;
        mongoose.connect(url)
        console.log("MONGODB Connected");
    } catch (error) {
        console.log("MONGODB Connection Failed", error.message);
    }
}

export {
    ConnectDB
}