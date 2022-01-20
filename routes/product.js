import express from "express";
const router = express.Router();
import Product from "../models/product.js";

router.get("/", (req, res) => {
  res.send("RestfulAPI");
});

router.get("/products", async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

router.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.json(product);
});

router.post("/products", async (req, res) => {
  const payload = req.body;
  const product = new Product(payload);
  await product.save();
  res.json({message:"Product added !!"});
});

router.put("/products/:id", async (req, res) => {
  const {id} = req.params;
  const payload = req.body;
  const product = await Product.findByIdAndUpdate(id, {$set:payload});
  res.json({ mesage: `Product Id ${id} is updated` });
});

router.delete("/products/:id", async (req, res) => {
  const {id} = req.params;
  await Product.findByIdAndDelete(id);
  if(Product){}
  res.json({ message:`Product Id ${id} is deleted` }); // ALT + 96 FOR `
});
export default router;