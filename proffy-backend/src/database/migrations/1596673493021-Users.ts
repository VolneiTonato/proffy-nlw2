import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Users1596673493021 implements MigrationInterface {
    private table = new Table({
        name: 'users',
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
                name: 'name',
                type: 'varchar',
                isNullable: false,
            },
            {
                name: 'avatar',
                type: 'varchar',
                isNullable: false,
            },
            {
                name: 'whatsapp',
                type: 'varchar',
                isNullable: false,
            },
            {
                name: 'bio',
                type: 'varchar',
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
        await queryRunner.dropTable(this.table.name);
    }
}
