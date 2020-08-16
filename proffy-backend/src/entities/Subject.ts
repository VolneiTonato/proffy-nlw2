import {
    PrimaryGeneratedColumn,
    Column,
    Entity,
    CreateDateColumn,
    UpdateDateColumn,
    BeforeInsert,
    BeforeUpdate,
} from 'typeorm';

@Entity({ name: 'subjects' })
class Subject {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    subject: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @BeforeInsert()
    @BeforeUpdate()
    transformUppercase() {
        this.subject = this.subject.toUpperCase();
    }
}

export default Subject;
