import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";

import { swaggerSpec } from "@/config";
import { itemsRouter } from "@/routes";

const app = express();
const PORT = process.env.PORT || 3001; // Different from React's default 3000

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON bodies

// Serve raw OpenAPI specification (put first to avoid swagger ui taking over)
app.get("/api-docs/openapi.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});

// Swagger documentation route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api/items", itemsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(
    `API Documentation available at http://localhost:${PORT}/api-docs`
  );
});
