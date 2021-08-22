import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import Product from "./Product";

@Entity("specifications")
export default class Specification {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(()=>Product, product=>product.specification)
    product: Product;

    @Column()
    color: string;

    @Column()
    width: number;

    @Column()
    height: number;
    
    @Column()
    weight: number;

    @Column()
    length: number;

    @Column()
    diameter: number;

    @Column()
    material: string;
}