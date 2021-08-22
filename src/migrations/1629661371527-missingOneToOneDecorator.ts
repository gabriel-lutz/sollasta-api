import {MigrationInterface, QueryRunner} from "typeorm";

export class missingOneToOneDecorator1629661371527 implements MigrationInterface {
    name = 'missingOneToOneDecorator1629661371527'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."specifications" DROP COLUMN "productId"`);
        await queryRunner.query(`ALTER TABLE "public"."products" ADD "specificationId" integer`);
        await queryRunner.query(`ALTER TABLE "public"."products" ADD CONSTRAINT "UQ_87594b33e577b389f96bb7c868f" UNIQUE ("specificationId")`);
        await queryRunner.query(`ALTER TABLE "public"."products" ADD CONSTRAINT "FK_87594b33e577b389f96bb7c868f" FOREIGN KEY ("specificationId") REFERENCES "specifications"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."products" DROP CONSTRAINT "FK_87594b33e577b389f96bb7c868f"`);
        await queryRunner.query(`ALTER TABLE "public"."products" DROP CONSTRAINT "UQ_87594b33e577b389f96bb7c868f"`);
        await queryRunner.query(`ALTER TABLE "public"."products" DROP COLUMN "specificationId"`);
        await queryRunner.query(`ALTER TABLE "public"."specifications" ADD "productId" integer NOT NULL`);
    }

}
