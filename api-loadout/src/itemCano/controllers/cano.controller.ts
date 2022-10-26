import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ItemCano } from "../entities/cano.entity";
import { ItemCanoService } from "../services/cano.service";

@Controller('/itemCano')
export class ItemCanoController {

    constructor(
        private readonly service: ItemCanoService
    ){}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<ItemCano[]>{
        return this.service.findAll()
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<ItemCano>{
        return this.service.findById(id)
    }


    @Get('/buscar/:palavra')
    @HttpCode(HttpStatus.OK)
    findByName(@Param('palavra') palavra: string): Promise<ItemCano[]> {
        return this.service.findByName(palavra)
    }


    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() cano: ItemCano): Promise<ItemCano> {
        return this.service.create(cano)
    }


    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() cano: ItemCano): Promise<ItemCano> {
        return this.service.update(cano)
    }


    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.service.delete(id)
    }
}