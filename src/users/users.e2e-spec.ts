import * as request from "supertest";
import { Test } from "@nestjs/testing";

import { INestApplication } from "@nestjs/common";
import { UsersModule } from "./users.module";
import { UsersService } from "./users.service";

describe("Cats", () => {
  let app: INestApplication;
  let usersService = { findAll: () => ["test"], create: () => {} };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [UsersModule],
    })
      .overrideProvider(UsersService)
      .useValue(usersService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET users`, () => {
    return request(app.getHttpServer()).get("/users").expect(200).expect({
      data: usersService.findAll(),
    });
  });

  it(`/POST users`, () => {
    const createUserDto = {};
    return request(app.getHttpServer())
      .post("/users")
      .send(createUserDto)
      .expect(201)
      .expect({
        data: usersService.create(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
