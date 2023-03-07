import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1678206830081 implements MigrationInterface {
    name = 'initialMigration1678206830081'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "name" character varying(45) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "UQ_8b0be371d28245da6e4f4b61878" UNIQUE ("name")`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "date" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "hour" TIME NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "hour"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "UQ_8b0be371d28245da6e4f4b61878"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "name" character varying(45) NOT NULL`);
    }

}
