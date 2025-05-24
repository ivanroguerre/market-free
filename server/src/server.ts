import express from "express";
import cors from "cors";
import itemsRouter from "@/routes/items";

const app = express();
const PORT = process.env.PORT || 3001; // Different from React's default 3000

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON bodies

app.use("/api/items", itemsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
