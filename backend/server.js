import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import usersRoutes from "./routes/user.route.js";

import { connectDB } from "./lib/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //parse JSON request bodies
app.use(cookieParser()); //parse cookies

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", usersRoutes);

console.log("PORT =", PORT);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
