import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1678578790631 implements MigrationInterface {
    name = 'initialMigration1678578790631'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "value" SET DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "value" DROP DEFAULT`);
    }

}
