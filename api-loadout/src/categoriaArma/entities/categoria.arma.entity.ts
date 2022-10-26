import { IsNotEmpty, MaxLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tb_categoria_arma'})
export class CategoriaArma {

    @PrimaryGeneratedColumn()
    id_cat: number


    @IsNotEmpty()
    @MaxLength(100)
    @Column({nullable:false, length: 100})
    categoria: string
}