import {
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn    
} from 'typeorm';

import Recipe from './recipe';
// import Patient from './Patient';

@Entity()
export default class User {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    email!: string;

    @Column()
    password!: string;

    @OneToMany(
        type => Recipe,
        recipe => recipe.user
    )
    recipes!: Recipe[];
}