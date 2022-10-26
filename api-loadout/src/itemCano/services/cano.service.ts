import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { ItemCano } from "../entities/cano.entity";

@Injectable()
export class ItemCanoService {

    
    constructor(
        @InjectRepository(ItemCano)
        private canoRepository: Repository<ItemCano>
    ){}


    async findAll(): Promise<ItemCano[]> {
        return this.canoRepository.find()
    }


    async findById(id_cano: number): Promise<ItemCano> {
        let buscaId = await this.canoRepository.findOne({
            where: {
                id_cano
            }
        })

        if(!buscaId)
            throw new HttpException('Item de Cano não encontrado.', HttpStatus.NOT_FOUND)

        return buscaId
    }


    async findByName(palavra: string): Promise<ItemCano[]> {
        return this.canoRepository.find({
            where: {
                nome: ILike(`%${palavra}%`)
            }
        })
    }


    async create(cano: ItemCano): Promise<ItemCano> {
        return this.canoRepository.save(cano)
    }


    async update(cano: ItemCano): Promise<ItemCano> {
        let verificaItem = await this.findById(cano.id_cano)

        if(!verificaItem)
            throw new HttpException('Item de Cano não encontrado', HttpStatus.NOT_FOUND)
        
        return this.canoRepository.save(cano)
    }


    async delete(id_cano: number): Promise<DeleteResult> {
        let canoDelete = await this.findById(id_cano)

        if(!canoDelete)
            throw new HttpException('Item de Cano não encontrado.', HttpStatus.NOT_FOUND)
        
        return this.canoRepository.delete(id_cano)

    }
}

