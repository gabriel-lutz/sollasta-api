import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";
import { getRepository } from "typeorm";
import Category from "./entities/Category";
import Product from "./entities/Product";
import Image from "./entities/Image"
import Specification from "./entities/Specification";
import { getProductById } from "./controllers/productConroller";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/insertProduct", async (req, res)=>{
  console.log(req.body)
  if(req.body.length){
    return res.send(400)
  }
  const newProduct = req.body
  const category = await getRepository(Category).findOne({id: newProduct.categoryId})
  newProduct.category = category
  const product = getRepository(Product).create(newProduct)
  const result = await getRepository(Product).save(product)

  res.send(result)


});

app.post("/insertImage/:productId", async(req,res)=>{

  const productId = Number(req.params.productId)
  const newImage = req.body
  const product = await getRepository(Product).findOne({id: productId})
  newImage.product = product
  const image = await getRepository(Image).create(newImage)
  const result = await getRepository(Image).save(image)

  res.send(result)
})

app.post("/insertSpecification/:productId", async(req, res)=>{
  const productId = Number(req.params.productId)
  const newSpecification = req.body
  const product = await getRepository(Product).findOne({id: productId})
  newSpecification.product = product
  const specification = await getRepository(Specification).create(newSpecification)
  const result = await getRepository(Specification).save(specification)

  res.send(result)

})

app.get("/product/:id", getProductById)

app.get("/products", async (req,res)=>{
  const query = await getRepository(Product).find({relations: ["images", "category", "specification"]})
  res.send(query)
})

export async function init () {
  await connectDatabase();
}

export default app;
