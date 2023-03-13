import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1678461031680 implements MigrationInterface {
    name = 'initialMigration1678461031680'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "sold" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "sold" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "sold" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "sold" DROP NOT NULL`);
    }

}
