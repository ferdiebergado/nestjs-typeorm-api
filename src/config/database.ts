import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export default {
  postgres: {
    type: "postgres",
    host: process.env.POSTGRES_HOST || "localhost",
    port: parseInt(process.env.POSTGRES_PORT) || 5432,
    username: process.env.POSTGRES_USER || "user",
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB || "test",
    autoLoadEntities: true,
    synchronize: true,
  } as TypeOrmModuleOptions,
  sqlite: {},
};
