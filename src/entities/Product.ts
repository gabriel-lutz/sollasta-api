import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, OneToOne, JoinColumn } from "typeorm";
import Category from "./Category";
import Image from "./Image"
import Specification from "./Specification";

@Entity("products")
export default class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  img1Url: string;

  @Column()
  img2Url: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @ManyToOne(()=>Category)
  category: Category;

  @OneToMany(()=>Image, image => image.product)
  images: Image[]

  @OneToOne(()=>Specification, specification => specification.product)
  @JoinColumn()
  specification: Specification;
}
