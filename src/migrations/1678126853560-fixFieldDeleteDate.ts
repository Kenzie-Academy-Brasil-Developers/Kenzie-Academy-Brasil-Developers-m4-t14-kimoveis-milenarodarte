import { MigrationInterface, QueryRunner } from "typeorm";

export class fixFieldDeleteDate1678126853560 implements MigrationInterface {
    name = 'fixFieldDeleteDate1678126853560'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "deletedAt" date`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "deletedAt" TIMESTAMP`);
    }

}
