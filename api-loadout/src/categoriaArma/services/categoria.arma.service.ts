import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { CategoriaArma } from "../entities/categoria.arma.entity";

@Injectable()
export class CategoriaArmaService{

    constructor(
        @InjectRepository(CategoriaArma)
        private categoriaArmaRepository: Repository<CategoriaArma>
    ){}

    async findAll(): Promise<CategoriaArma[]> {
        return this.categoriaArmaRepository.find()
    }


    async findById(id_cat: number): Promise<CategoriaArma> {
        let categoria = await this.categoriaArmaRepository.findOne({
            where: {
                id_cat
            }
        })

        if(!categoria)
            throw new HttpException('Tarefa não foi encontrada!', HttpStatus.NOT_FOUND)
        return categoria
    }


    async findByName(palavra: string): Promise<CategoriaArma[]> {
        return this.categoriaArmaRepository.find({
            where: {
                categoria: ILike(`%${palavra}%`)
            }
        })
    }


    async create(categoria: CategoriaArma): Promise<CategoriaArma> {
        return this.categoriaArmaRepository.save(categoria)
    }


    async update(categoria: CategoriaArma): Promise<CategoriaArma> {
        let categoriaUpdate = await this.findById(categoria.id_cat)

        if(!categoriaUpdate || !categoria.id_cat)
            throw new HttpException('Categoria não foi encontrada', HttpStatus.NOT_FOUND)
        
        return this.categoriaArmaRepository.save(categoria)
    }


    async delete(id: number): Promise<DeleteResult> {
        let categoriaDelete = await this.findById(id)

        if(!categoriaDelete)
            throw new HttpException('Categoria não foi encontrada', HttpStatus.NOT_FOUND)
        
            return this.categoriaArmaRepository.delete(id)
    }
}