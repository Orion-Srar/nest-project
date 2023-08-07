import {Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm";
import {User} from "../user/user.entity";

@Entity()
export class Animal {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    class: string

    @Column()
    type: string

    @Column()
    age: string

    @OneToOne(()=> User)
    @JoinColumn()
    user: User
}