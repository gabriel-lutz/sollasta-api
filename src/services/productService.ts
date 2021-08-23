import { getRepository } from "typeorm";
import Product from "../entities/Product";

export async function queryProduct(id: number) {
  const query = await getRepository(Product).findOne({
    where: { id: id },
    relations: ["images", "category", "specification"],
  });
  return query;
}

export async function queryAllProducts() {
  const query = await getRepository(Product).find({
    relations: ["images", "category", "specification"],
  });
  return query;
}
