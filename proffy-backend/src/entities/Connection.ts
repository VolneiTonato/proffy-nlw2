import {
    Column,
    Entity,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    PrimaryGeneratedColumn,
    OneToOne
} from 'typeorm';

import User from './User'


@Entity({ name: 'connections' })
class Connection {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({name: 'user_id'})
    userId: string;

    

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @OneToOne(() => User, { eager: true })
    @JoinColumn({ name: 'user_id' })
    user: User;



}

export default Connection;
