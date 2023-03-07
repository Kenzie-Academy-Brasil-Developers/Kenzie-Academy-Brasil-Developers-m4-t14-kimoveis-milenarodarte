import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1678214224621 implements MigrationInterface {
    name = 'initialMigration1678214224621'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "schedules_users_properties" ("id" SERIAL NOT NULL, "date" date NOT NULL, "hour" TIME NOT NULL, CONSTRAINT "PK_751450246dee9abc82a47dabc4c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "hour"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" ADD "hour" TIME NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "date" date NOT NULL`);
        await queryRunner.query(`DROP TABLE "schedules_users_properties"`);
    }

}
