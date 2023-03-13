import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1678465290918 implements MigrationInterface {
    name = 'initialMigration1678465290918'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "FK_52edcc84ae4f80ef26ce777ef3a"`);
        await queryRunner.query(`ALTER TABLE "real_estate" RENAME COLUMN "adressId" TO "addressId"`);
        await queryRunner.query(`ALTER TABLE "real_estate" RENAME CONSTRAINT "UQ_52edcc84ae4f80ef26ce777ef3a" TO "UQ_44ae17efa35575b6a6f83b35ee5"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "FK_44ae17efa35575b6a6f83b35ee5" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "FK_44ae17efa35575b6a6f83b35ee5"`);
        await queryRunner.query(`ALTER TABLE "real_estate" RENAME CONSTRAINT "UQ_44ae17efa35575b6a6f83b35ee5" TO "UQ_52edcc84ae4f80ef26ce777ef3a"`);
        await queryRunner.query(`ALTER TABLE "real_estate" RENAME COLUMN "addressId" TO "adressId"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "FK_52edcc84ae4f80ef26ce777ef3a" FOREIGN KEY ("adressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
