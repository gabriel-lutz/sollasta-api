import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("specifications")
export default class Specification {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    productId: number;

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