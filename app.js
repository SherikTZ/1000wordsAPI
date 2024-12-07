import dotenv from "dotenv";
import express from "express";
import wordsRouter from "./routes/get1000Words.js";
import initializeDatabase from "./controllers/dbController.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

(async () => {
  try {
    await initializeDatabase();
    app.use("/api", wordsRouter);

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to start the server:", error);
    process.exit(1);
  }
})();
