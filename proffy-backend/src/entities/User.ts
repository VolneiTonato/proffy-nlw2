import {
    PrimaryGeneratedColumn,
    Column,
    Entity,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';


@Entity({ name: 'users' })
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    avatar: string;

    @Column()
    whatsapp: string;

    @Column()
    bio: string;

    @CreateDateColumn({name:'created_at'})
    createdAt: Date;
  
    @UpdateDateColumn({name:'updated_at'})
    updatedAt: Date;

}

export default User;
