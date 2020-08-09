import {
    MigrationInterface, QueryRunner, TableColumn,
    TableForeignKey,
} from "typeorm";

export class CreateForeingnKeyClassesToUsers1596674342264 implements MigrationInterface {

    private tableName = 'classes';

    private column = new TableColumn({
        name: 'user_id',
        type: 'string',
        isNullable: false,
    });

    private foreingKey = new TableForeignKey({
        columnNames: [this.column.name],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        name: 'fk_classes_user',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(this.tableName, this.column);

        await queryRunner.createForeignKey(this.tableName, this.foreingKey);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropForeignKey(this.tableName, this.foreingKey);

        await queryRunner.dropColumn(this.tableName, this.column.name);
    }

}
