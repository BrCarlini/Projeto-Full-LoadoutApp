import { Controller, Get, HttpCode, HttpStatus, Post, Body, Param, ParseIntPipe, Put, Delete } from "@nestjs/common";
import { CategoriaArma } from "../entities/categoria.arma.entity";
import { CategoriaArmaService } from "../services/categoria.arma.service";

@Controller('/categoriaArma')
export class CategoriaArmaController {

    constructor(
        private readonly service: CategoriaArmaService 
    ){}

    
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<CategoriaArma[]>{
        return this.service.findAll()
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<CategoriaArma>{
        return this.service.findById(id)
    }

    @Get('buscar/:palavras')
    @HttpCode(HttpStatus.OK)
    findByName(@Param('palavras') palavras: string): Promise<CategoriaArma[]>{
        return this.service.findByName(palavras)

    }


    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() categoria: CategoriaArma): Promise<CategoriaArma> {
        return this.service.update(categoria)
    }


    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() categoria: CategoriaArma): Promise<CategoriaArma> {
        return this.service.create(categoria)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        this.service.delete(id)
    }
}