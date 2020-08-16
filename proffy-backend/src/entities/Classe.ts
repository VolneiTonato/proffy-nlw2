import {
    PrimaryGeneratedColumn,
    Column,
    Entity,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';

import User from './User';
import Schedule from './Schedule';
import Subject from './Subject';

@Entity({ name: 'classes' })
class Classe {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'subject_id' })
    subjectId: string;

    @Column()
    cost: number;

    @Column({ name: 'user_id' })
    userId: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @ManyToOne(() => User, { eager: true })
    @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
    user: User;

    @ManyToOne(() => Subject, { eager: true })
    @JoinColumn({ name: 'subject_id', referencedColumnName: 'id' })
    subject: Subject;

    @OneToMany(() => Schedule, schedule => schedule.classe)
    schedules: Schedule[];
}

export default Classe;
