import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as Joi from '@hapi/joi';
import { ConfigService } from '@nestjs/config';

export const dbValidationSchema = Joi.object({
  DATABASE_USER: Joi.string().required(),
  DATABASE_PASSWORD: Joi.string().required(),
  DATABASE_NAME: Joi.string().required(),
  DATABASE_PORT: Joi.number().required(),
  DATABASE_HOST: Joi.string().required(),
  DATABASE_AUTOLOAD_ENTITIES: Joi.boolean().required(),
  DATABASE_SYNC: Joi.boolean().required(),
});

export const getDbConfig = (config: ConfigService): TypeOrmModuleOptions => {
  return {
    type: 'postgres',
    host: config.get<string>('DATABASE_HOST'),
    port: config.get<number>('DATABASE_PORT'),
    username: config.get<string>('DATABASE_USER'),
    password: config.get<string>('DATABASE_PASSWORD'),
    database: config.get<string>('DATABASE_NAME'),
    autoLoadEntities: config.get<boolean>('DATABASE_AUTOLOAD_ENTITIES'),
    synchronize: config.get<boolean>('DATABASE_SYNC'),
  };
};
