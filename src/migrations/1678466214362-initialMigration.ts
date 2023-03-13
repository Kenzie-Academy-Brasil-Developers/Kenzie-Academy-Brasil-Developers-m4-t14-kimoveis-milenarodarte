import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1678466214362 implements MigrationInterface {
    name = 'initialMigration1678466214362'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "admin" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "admin" DROP DEFAULT`);
    }

}
