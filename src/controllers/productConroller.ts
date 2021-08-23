import { Request, Response } from "express";
import Product from "../entities/Product";

import { queryAllProducts, queryProduct } from "../services/productService";

export async function getProductById(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    if (!id) {
      res.sendStatus(404);
    }

    const result: Product = await queryProduct(id);
    res.send(result);

  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export async function getAllProducts(req: Request, res: Response){
  try{
    const result = await queryAllProducts()
    res.send(result)
  }catch(err){
    console.log(err)
    res.sendStatus(500)
  }
}
