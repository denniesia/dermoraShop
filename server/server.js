import express from "express";
import fs from "fs";

const app = express();

const products = JSON.parse(
  fs.readFileSync(new URL("./data/products.json", import.meta.url))
);


app.use(express.json());

// Root route (fixes "Not Found")
app.get("/", (req, res) => {
  res.send("Dermora API is running 🚀");
});

// API endpoint
app.get("/products", (req, res) => {
  res.json(products);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});