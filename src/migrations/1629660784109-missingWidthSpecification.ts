import {MigrationInterface, QueryRunner} from "typeorm";

export class missingWidthSpecification1629660784109 implements MigrationInterface {
    name = 'missingWidthSpecification1629660784109'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."specifications" ADD "width" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."specifications" DROP COLUMN "width"`);
    }

}
