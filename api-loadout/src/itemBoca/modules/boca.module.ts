import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ItemBocaController } from "../controllers/boca.controller";
import { ItemBoca } from "../entities/boca.entity";
import { ItemBocaService } from "../services/boca.service";

@Module({
    imports: [TypeOrmModule.forFeature([ItemBoca])],
    providers: [ItemBocaService],
    controllers: [ItemBocaController],
    exports: [TypeOrmModule]
})
export class ItemBocaModule {}