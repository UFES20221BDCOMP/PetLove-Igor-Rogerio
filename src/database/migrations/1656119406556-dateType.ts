import { MigrationInterface, QueryRunner } from "typeorm";

export class dateType1656119406556 implements MigrationInterface {
    name = 'dateType1656119406556'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Animal" RENAME COLUMN "owner" TO "ownerId"`);
        await queryRunner.query(`ALTER TABLE "Person" DROP COLUMN "birthDate"`);
        await queryRunner.query(`ALTER TABLE "Person" ADD "birthDate" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Animal" DROP COLUMN "ownerId"`);
        await queryRunner.query(`ALTER TABLE "Animal" ADD "ownerId" uuid`);
        await queryRunner.query(`ALTER TABLE "Schedule" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "Schedule" ADD "date" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Animal" ADD CONSTRAINT "FK_d909121f8b0e16ff1a9900b5450" FOREIGN KEY ("ownerId") REFERENCES "Person"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Animal" DROP CONSTRAINT "FK_d909121f8b0e16ff1a9900b5450"`);
        await queryRunner.query(`ALTER TABLE "Schedule" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "Schedule" ADD "date" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Animal" DROP COLUMN "ownerId"`);
        await queryRunner.query(`ALTER TABLE "Animal" ADD "ownerId" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Person" DROP COLUMN "birthDate"`);
        await queryRunner.query(`ALTER TABLE "Person" ADD "birthDate" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Animal" RENAME COLUMN "ownerId" TO "owner"`);
    }

}
