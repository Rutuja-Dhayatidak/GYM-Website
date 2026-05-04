import dotenv from "dotenv";
dotenv.config(); // MUST be FIRST

import app from "./app.js";
import connectDB from "./src/config/db.js";

console.log("MONGO_URI =", process.env.MONGO_URI); // DEBUG

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});