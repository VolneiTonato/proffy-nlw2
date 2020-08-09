import {
    PrimaryGeneratedColumn,
    Column,
    Entity,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    ManyToOne,
} from 'typeorm';

import Classe from './Classe'


@Entity({ name: 'schedules' })
class Schedule {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({name:'week_day'})
    weekDay: number;

    @Column()
    from: number;

    @Column()
    to: number;

    
    @Column({name: 'class_id'})
    classId: string

    @CreateDateColumn({name:'created_at'})
    createdAt: Date;
  
    @UpdateDateColumn({name:'updated_at'})
    updatedAt: Date;


    @ManyToOne(() => Classe, {eager: true})
    @JoinColumn({name: 'class_id', referencedColumnName: 'id'})
    classe: Classe

}

export default Schedule;
