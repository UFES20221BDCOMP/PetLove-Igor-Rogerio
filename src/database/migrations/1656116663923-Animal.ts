import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Animal1656116663923 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "Animal",
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
                            name: "cost",
                            type: "float"
                        },
                        {
                            name: "type",
                            type: "varchar"
                        },
                        {
                            name: "owner",
                            type: "varchar"
                        },
                    ],
                }
            )
        );
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Animal");
    }

}