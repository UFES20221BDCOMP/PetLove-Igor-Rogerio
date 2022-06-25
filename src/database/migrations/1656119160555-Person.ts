import { MigrationInterface, QueryRunner } from "typeorm";

export class Person1656119160555 implements MigrationInterface {
    name = 'Person1656119160555'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Schedule" DROP COLUMN "owner"`);
        await queryRunner.query(`ALTER TABLE "Schedule" DROP COLUMN "animal"`);
        await queryRunner.query(`ALTER TABLE "Schedule" DROP COLUMN "service"`);
        await queryRunner.query(`ALTER TABLE "Schedule" ADD "ownerId" uuid`);
        await queryRunner.query(`ALTER TABLE "Schedule" ADD "animalId" uuid`);
        await queryRunner.query(`ALTER TABLE "Schedule" ADD "serviceId" uuid`);
        await queryRunner.query(`ALTER TABLE "Service" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "Service" ADD "value" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Animal" DROP COLUMN "cost"`);
        await queryRunner.query(`ALTER TABLE "Animal" ADD "cost" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Person" DROP COLUMN "birthDate"`);
        await queryRunner.query(`ALTER TABLE "Person" ADD "birthDate" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Schedule" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "Schedule" ADD "date" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Schedule" ADD CONSTRAINT "FK_3ab9091692cc434df18a95c1ec7" FOREIGN KEY ("ownerId") REFERENCES "Person"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Schedule" ADD CONSTRAINT "FK_7bb5d3c0553907188d9222b3e4b" FOREIGN KEY ("animalId") REFERENCES "Animal"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Schedule" ADD CONSTRAINT "FK_c2eea5a452fdb87c621a143b583" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Schedule" DROP CONSTRAINT "FK_c2eea5a452fdb87c621a143b583"`);
        await queryRunner.query(`ALTER TABLE "Schedule" DROP CONSTRAINT "FK_7bb5d3c0553907188d9222b3e4b"`);
        await queryRunner.query(`ALTER TABLE "Schedule" DROP CONSTRAINT "FK_3ab9091692cc434df18a95c1ec7"`);
        await queryRunner.query(`ALTER TABLE "Schedule" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "Schedule" ADD "date" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Person" DROP COLUMN "birthDate"`);
        await queryRunner.query(`ALTER TABLE "Person" ADD "birthDate" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Animal" DROP COLUMN "cost"`);
        await queryRunner.query(`ALTER TABLE "Animal" ADD "cost" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Service" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "Service" ADD "value" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Schedule" DROP COLUMN "serviceId"`);
        await queryRunner.query(`ALTER TABLE "Schedule" DROP COLUMN "animalId"`);
        await queryRunner.query(`ALTER TABLE "Schedule" DROP COLUMN "ownerId"`);
        await queryRunner.query(`ALTER TABLE "Schedule" ADD "service" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Schedule" ADD "animal" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Schedule" ADD "owner" character varying NOT NULL`);
    }

}
