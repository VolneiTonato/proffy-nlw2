import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class ClassesSchedule1596674549120 implements MigrationInterface {

    private table = new Table({
        name: 'schedules',
        columns: [
            {
                name: 'id',
                type: 'uuid',
                isNullable: false,
                isPrimary: true,
                generationStrategy: 'uuid',
                default: 'uuid_generate_v4()',
            },
            {
                name: 'week_day',
                type: 'int',
                isNullable:false,
            },
            {
                name: 'from',
                type: 'int',
                isNullable:false,
            },
            {
                name: 'to',
                type: 'int',
                isNullable:false,
            },
            {
                name: 'created_at',
                type: 'timestamp',
                default: 'now()',
                isNullable: false,
              },
        
              {
                name: 'updated_at',
                type: 'timestamp',
                default: 'now()',
                isNullable: false,
              },
        ]
    })

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(this.table);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.table);
    }

}
