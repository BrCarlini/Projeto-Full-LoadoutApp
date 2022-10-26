import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { response } from 'express';

describe('Testes do Módulo de CategoriaArma (e2e)', () => {
  let app: INestApplication;

  let categoriaArmaId: number

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: 'Brunexc*1997',
          database: 'db_loadoutapp_test',
          autoLoadEntities: true,
          synchronize: true,
          logging: false,
          dropSchema: true
        }),
        AppModule
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });


  // Teste para inserir uma Categoria de Arma no banco
  it('01 - Deve inserir uma Tarefa no Banco', async () => {
    let response = await request(app.getHttpServer())
      .post('/categoriaArma')
      .send({
        categoria: 'Metralhadora'
      })
      .expect(201)

      categoriaArmaId = response.body.id_cat
  });



  // Teste para verificar se conseguimos atualizar uma Categoria de Arma
  it('02 - Deve recuperar uma Categoria de Arma específica', async () => {
    return request(app.getHttpServer())
      .get(`/categoriaArma/${categoriaArmaId}`)
      .expect(200)
  })


  // Teste para verificar se conseguimos atualizar uma tarefa
  it('03 - Deve atualizar uma Categoria de Arma', async () => {
    return request(app.getHttpServer())
      .put('/categoriaArma')
      .send({
        id_cat: 1,
        categoria: 'SMT'
      })
      .expect(200)
      .then(response => {
        expect('SMT').toEqual(response.body.categoria)
      })
  })


  // Teste para ver se ele valida uma atualização de tarefa que não existe
  it('04 - Não deverá atualizar uma Categoria de Arma que não existe', async () => {
    return request(app.getHttpServer())
      .put('/tarefa')
      .send({
        id_cat: 1000,
        categoria: 'AR'
      })
      .expect(404)
  })


  // Teste para verificar se conseguimos deletar uma tarefa
  it('05 - Deve deletar uma Categoria de Arma do database', async () => {
    return request(app.getHttpServer())
      .delete(`/tarefa/${categoriaArmaId}`)
      .expect(404)
  })


  // Parar a execução dos testes
  afterAll(async () => {
    await app.close()
  })

});
