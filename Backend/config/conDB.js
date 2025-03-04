const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://mongo:27017/Recipes", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("✅ MongoDB Connected Successfully");
    } catch (err) {
        console.error("❌ MongoDB Connection Error:", err);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
