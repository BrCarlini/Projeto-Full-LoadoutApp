import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoriaArmaController } from "../controllers/categoria.arma.controllers";
import { CategoriaArma } from "../entities/categoria.arma.entity";
import { CategoriaArmaService } from "../services/categoria.arma.service";

@Module({
    imports: [TypeOrmModule.forFeature([CategoriaArma])],
    providers: [CategoriaArmaService],
    controllers: [CategoriaArmaController],
    exports: [TypeOrmModule]
})
export class CategoriaArmaModule {}