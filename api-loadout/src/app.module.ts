import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaArma } from './categoriaArma/entities/categoria.arma.entity';
import { CategoriaArmaModule } from './categoriaArma/modules/categoria.arma.module';
import { ItemBoca } from './itemBoca/entities/boca.entity';
import { ItemBocaModule } from './itemBoca/modules/boca.module';
import { ItemCano } from './itemCano/entities/cano.entity';
import { ItemCanoModule } from './itemCano/modules/cano.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root*123',
      database: 'db_loadoutapp',
      entities: [CategoriaArma, ItemBoca, ItemCano],
      synchronize: true
    }),
    CategoriaArmaModule,
    ItemBocaModule,
    ItemCanoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
