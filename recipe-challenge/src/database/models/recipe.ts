import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    OneToMany
} from 'typeorm';

import User from './user';
import Category from './category'

@Entity()
export default class Recipe {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    description!: string;

    @Column()
    ingredients!: string;

    @ManyToOne(type => User, user => user.recipes,
        {
            primary: true, 
            nullable: false 
          })
    user!: User;

    @ManyToOne(type => Category, category => category.recipes)
    category!: Category;

}
