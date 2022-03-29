import supertest from 'supertest';
import { Connection } from 'typeorm';
import { hash } from 'bcrypt';

import { randomUUID } from 'crypto';

import { app } from '@shared/infra/http/app';
import createConnection from '@shared/infra/typeorm';

let connection: Connection;

describe('Create Category Controller', () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();

    const id = randomUUID();
    const password = await hash('123456', 8);

    await connection.query(
      `INSERT INTO users (id, name, email, password, is_admin, created_at, driver_license) VALUES ('${id}', 'Jhon Doe', 'test@test.com','${password}', true, 'now()', 'XXXXXX')`,
    );
  });

  afterEach(async () => {
    await connection.dropDatabase();
    await connection.close();
  });
  it('should be able to create a new category', async () => {
    const responseToken = await supertest(app).post('/sessions').send({
      email: 'test@test.com',
      password: '123456',
    });

    const { token } = responseToken.body;

    const response = await supertest(app)
      .post('/categories')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Carros',
        description: 'Carros da categoria',
      });

    expect(response.status).toBe(201);
  });
});
