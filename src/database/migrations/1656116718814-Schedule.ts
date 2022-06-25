import { MigrationInterface, QueryRunner,Table } from "typeorm"

export class Schedule1656116718814 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "Schedule",
                    columns: [
                        {
                            name: "id",
                            type: "uuid",
                            isPrimary: true
                        },
                        {
                            name: "owner",
                            type: "varchar",
                        },
                        {
                            name: "animal",
                            type: "varchar"
                        },
                        {
                            name: "service",
                            type: "varchar"
                        },
                        {
                            name: "date",
                            type: "date"
                        },
                    ],
                }
            )
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {        
        await queryRunner.dropTable("Schedule");

    }

}
