import {
    MigrationInterface, QueryRunner, TableColumn,
    TableForeignKey,
} from "typeorm";

export class CreateForeingnKeyClassScheduleToClasses1596674734180 implements MigrationInterface {

    private tableName = 'schedules';

    private column = new TableColumn({
        name: 'class_id',
        type: 'int',
        isNullable: false,
    });

    private foreingKey = new TableForeignKey({
        columnNames: [this.column.name],
        referencedColumnNames: ['id'],
        referencedTableName: 'classes',
        name: 'fk_schedule_classes',
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
