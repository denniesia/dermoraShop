import express from "express";
import cors from "cors";
import products from "./data/products.json" assert { type: "json" };

const app = express();

app.use(cors());
app.use(express.json());

// API endpoint
app.get("/products", (req, res) => {
  res.json(products);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});