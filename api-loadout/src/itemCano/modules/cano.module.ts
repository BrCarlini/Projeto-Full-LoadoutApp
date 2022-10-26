import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ItemCanoController } from "../controllers/cano.controller";
import { ItemCano } from "../entities/cano.entity";
import { ItemCanoService } from "../services/cano.service";

@Module({
    imports: [TypeOrmModule.forFeature([ItemCano])],
    providers: [ItemCanoService],
    controllers: [ItemCanoController],
    exports: [TypeOrmModule]
})
export class ItemCanoModule{}