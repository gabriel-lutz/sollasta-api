import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Product from "./Product";

@Entity("images")
export default class Image {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;

    @ManyToOne(()=>Product, product=>product.images)
    product: Product

}