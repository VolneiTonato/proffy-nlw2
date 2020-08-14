import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from 'typeorm';

export class Connections1596674943459 implements MigrationInterface {
    private table = new Table({
        name: 'connections',
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
                name: 'user_id',
                type: 'int',
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

    private foreingKey = new TableForeignKey({
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        name: 'fk_connection_user',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.table);

        await queryRunner.createForeignKey(this.table, this.foreingKey);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(this.table, this.foreingKey);

        await queryRunner.dropTable(this.table);
    }
}
