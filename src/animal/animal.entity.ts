import {Column, Entity, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
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

    @ManyToOne( () => User, (entity) => entity.animals)
    user: User
}