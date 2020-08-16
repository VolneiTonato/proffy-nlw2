import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
} from 'typeorm';

export class CreateForeignKeySubjectClasses1597450008757
    implements MigrationInterface {
    private tableName = 'classes';

    private column = new TableColumn({
        name: 'subject_id',
        type: 'string',
        isNullable: false,
    });

    private foreingKey = new TableForeignKey({
        columnNames: [this.column.name],
        referencedColumnNames: ['id'],
        referencedTableName: 'subjects',
        name: 'fk_classes_subject',
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
