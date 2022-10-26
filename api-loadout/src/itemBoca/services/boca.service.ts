import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { ItemBoca } from "../entities/boca.entity";

@Injectable()
export class ItemBocaService {

    constructor(
        @InjectRepository(ItemBoca)
        private bocaRepository: Repository<ItemBoca>
    ){}

    // Busca todos os itens
    async findAll(): Promise<ItemBoca[]> {
        return this.bocaRepository.find()
    }


    // Busca o item pelo id informado
    async findById(id_boca: number): Promise<ItemBoca> {
        let itemBoca = await this.bocaRepository.findOne({
            where: {
                id_boca
            }  
        })

        if(!itemBoca)
            throw new HttpException('Item não encontrado', HttpStatus.NOT_FOUND)
            
        return itemBoca
    }


    // Busca item com os palavras informadas
    async findByName(nome: string): Promise<ItemBoca[]> {
        return this.bocaRepository.find({
            where: {
                nome: ILike(`%${nome}%`)
            }
        })
    }


    // Cria um item
    async create(item: ItemBoca): Promise<ItemBoca> {
        return this.bocaRepository.save(item)
    }


    // Atualiza um item
    async update(boca: ItemBoca): Promise<ItemBoca> {
        let bocaUpdate = await this.findById(boca.id_boca)

        if(!bocaUpdate)
            throw new HttpException('Item não encontrado!', HttpStatus.NOT_FOUND)

        return this.bocaRepository.save(boca)
    }


    // Deleta um item
    async delete(id: number): Promise<DeleteResult> {
        let bocaDelete = await this.findById(id)

        if(!bocaDelete)
            throw new HttpException('Item não encontrado!', HttpStatus.NOT_FOUND)
        
        return this.bocaRepository.delete(id)
    }
}