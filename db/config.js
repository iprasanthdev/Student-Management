const mongoose = require("mongoose");

const connectDB = async() => {
   console.log("connecting to MongoDB...");
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("error", error.message);
        process.exit(1);
    }
}

module.exports = connectDB;