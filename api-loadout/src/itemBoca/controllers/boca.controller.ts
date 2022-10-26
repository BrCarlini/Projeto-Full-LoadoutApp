import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ItemBoca } from "../entities/boca.entity";
import { ItemBocaService } from "../services/boca.service";

@Controller('/itemBoca')
export class ItemBocaController {

     constructor(
        private readonly service: ItemBocaService
     ){}

     @Get()
     @HttpCode(HttpStatus.OK)
     findAll(): Promise<ItemBoca[]> {
         return this.service.findAll()
     }


     @Get('/:id')
     @HttpCode(HttpStatus.OK)
     findById(@Param('id', ParseIntPipe) id: number): Promise<ItemBoca> {
         return this.service.findById(id)
     }


     @Get('buscar/:nome')
     @HttpCode(HttpStatus.OK)
     findByName(@Param('nome') nome:string): Promise<ItemBoca[]> {
         return this.service.findByName(nome)
     }


     @Post()
     @HttpCode(HttpStatus.CREATED)
     create(@Body() item: ItemBoca): Promise<ItemBoca>{
         return this.service.create(item)
     }


     @Put()
     @HttpCode(HttpStatus.OK)
     update(@Body() item: ItemBoca): Promise<ItemBoca> {
         return this.service.update(item)
     }

     @Delete('/:id')
     @HttpCode(HttpStatus.NO_CONTENT)
     dalete(@Param('id') id: number){
         return this.service.delete(id)
     }
}