import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    OneToMany
} from 'typeorm';

import Recipe from "./recipe";

@Entity()
export default class Category {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @OneToMany(
        type => Recipe,
        recipe => recipe.category
    )
    recipes!: Recipe[];


}