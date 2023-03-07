import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1678213317211 implements MigrationInterface {
    name = 'initialMigration1678213317211'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "UQ_8b0be371d28245da6e4f4b61878"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "hour"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD "adressId" integer`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "UQ_52edcc84ae4f80ef26ce777ef3a" UNIQUE ("adressId")`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "date" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "hour" TIME NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "name" character varying(45) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "UQ_8b0be371d28245da6e4f4b61878" UNIQUE ("name")`);
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "value" TYPE numeric(12,2)`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "FK_52edcc84ae4f80ef26ce777ef3a" FOREIGN KEY ("adressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "FK_52edcc84ae4f80ef26ce777ef3a"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "value" TYPE numeric`);
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "UQ_8b0be371d28245da6e4f4b61878"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "hour"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "UQ_52edcc84ae4f80ef26ce777ef3a"`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "adressId"`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "hour" TIME NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "date" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "name" character varying(45) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "UQ_8b0be371d28245da6e4f4b61878" UNIQUE ("name")`);
    }

}
