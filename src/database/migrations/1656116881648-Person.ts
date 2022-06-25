import { MigrationInterface, QueryRunner,Table } from "typeorm"

export class Person1656116881648 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "Person",
                    columns: [
                        {
                            name: "id",
                            type: "uuid",
                            isPrimary: true
                        },
                        {
                            name: "name",
                            type: "varchar",
                        },
                        {
                            name: "doc",
                            type: "varchar"
                        },
                        {
                            name: "birthDate",
                            type: "date"
                        },
                    ],
                }
            )
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Person");
    }

}
