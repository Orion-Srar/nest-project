import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', nullable: false})
    userName: string;

    @Column({type: 'varchar', nullable: false, unique: true})
    email: string;

    @Column({default: true})
    isActivate: boolean;

    @Column({type: 'int', nullable: true})
    age: number;

    @Column({type: 'varchar', nullable: false})
    password: string;
}