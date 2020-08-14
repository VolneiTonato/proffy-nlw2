import {
    PrimaryGeneratedColumn,
    Column,
    Entity,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    ManyToOne,
    OneToMany,
    OneToOne,
    BeforeInsert,
    BeforeUpdate,
} from 'typeorm';

import User from './User';
import Schedule from './Schedule';

@Entity({ name: 'classes' })
class Classe {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    subject: string;

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

    @OneToMany(() => Schedule, schedule => schedule.classe)
    schedules: Schedule[];

    @BeforeInsert()
    @BeforeUpdate()
    transformUppercase() {
        this.subject = this.subject.toUpperCase();
    }
}

export default Classe;
