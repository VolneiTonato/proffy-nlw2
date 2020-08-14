import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Classes1596674091015 implements MigrationInterface {
    private table = new Table({
        name: 'classes',
        columns: [
            {
                name: 'id',
                isNullable: false,
                isPrimary: true,
                type: 'uuid',
                generationStrategy: 'uuid',
                default: 'uuid_generate_v4()',
            },
            {
                name: 'subject',
                type: 'varchar',
                isUnique: true,
                isNullable: false,
            },
            {
                name: 'cost',
                type: 'decimal(10,2)',
                isNullable: false,
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
        ],
    });

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.table);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.table);
    }
}
